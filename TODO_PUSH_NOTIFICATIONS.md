# Push Notifications — Implementation Plan

## Overview
Daily push notifications at noon (user's local time) with a curiosity-driven hook for the next undiscovered item. Once a user discovers all 103 items, notifications stop completely.

---

## Status

### Done (code ready, not yet live)
- [x] Notification hook texts for all 103 items → stored in `push_hook_texts` Supabase table
- [x] Permission modal in `index.html` (CSS, HTML, JS) — shows after 5 min play or 2 s after PWA install
- [x] Subscription logic in `index.html` — VAPID subscribe, saves to `push_subscriptions` via Supabase REST
- [x] Client-side guards: `ba_notif_subscribed`, `ba_notif_declined` (30-day cooldown), permission check, all-discovered check
- [x] Safety guard: modal won't show while VAPID key is the placeholder (`TO_BE_REPLACED…`)
- [x] Service worker `push` + `notificationclick` handlers in `sw.js`
- [x] Service worker cache bumped to v13
- [x] Edge function `supabase/functions/send-daily-push/index.ts` (Deno, uses `npm:web-push`)
- [x] SQL migration for `push_subscriptions` table + RLS policies
- [x] SQL for pg_cron schedule (every 15 minutes)

### To Do (deployment steps)

> The app works fine without these — notifications are fully dormant until step 2 is done.

#### Step 1: Generate VAPID keys
**Where:** Terminal (your laptop)
```bash
npx web-push generate-vapid-keys
```
This prints a public key and a private key. Copy both — you'll need them in steps 2 and 3.

#### Step 2: Paste the public key into the code
**Where:** Code editor — `index.html`

Search for `TO_BE_REPLACED_WITH_ACTUAL_VAPID_PUBLIC_KEY` and replace it with the public key from step 1. Commit the change.

#### Step 3: Store secrets in Supabase
**Where:** Supabase CLI (terminal) **or** Supabase dashboard → Project Settings → Edge Functions → Secrets

Option A — CLI:
```bash
supabase secrets set VAPID_PRIVATE_KEY="<private-key-from-step-1>"
supabase secrets set VAPID_PUBLIC_KEY="<public-key-from-step-1>"
supabase secrets set VAPID_SUBJECT="mailto:hello@serenichron.com"
```

Option B — Dashboard:
Go to **Project Settings → Edge Functions → Secrets** and add the three key-value pairs manually.

#### Step 4: Create the `push_subscriptions` table
**Where:** Supabase dashboard → **SQL Editor**

Paste the contents of `supabase/migrations/20260323_push_subscriptions.sql` and click **Run**. This creates the table, index, and RLS policies.

#### Step 5: Deploy the edge function
**Where:** Terminal (your laptop), from the project root
```bash
supabase functions deploy send-daily-push
```
This uploads `supabase/functions/send-daily-push/index.ts` to Supabase.

#### Step 6: Enable pg_net and schedule the cron
**Where:** Supabase dashboard

1. Go to **Database → Extensions**, search for `pg_net`, and enable it.
2. Go to **SQL Editor**, paste the contents of `supabase/migrations/20260323_pg_cron_push.sql`, and click **Run**. This schedules the edge function to run every 15 minutes.

#### Step 7: Deploy the frontend
**Where:** However you normally deploy (push to GitHub Pages, etc.)

Deploy the updated `index.html` and `sw.js` to production.

#### Step 8: Test end-to-end
Open the app on a phone, wait 5 minutes (or trigger the modal via PWA install), accept notifications, and verify a push arrives at noon your time.

---

## 1. VAPID Key Pair
- Generate a VAPID key pair (`web-push generate-vapid-keys`)
- Store the private key as a Supabase secret (`VAPID_PRIVATE_KEY`)
- Embed the public key in `index.html`

## 2. Supabase Table: `push_subscriptions`
```sql
CREATE TABLE push_subscriptions (
  session_id TEXT PRIMARY KEY,
  subscription JSONB NOT NULL,
  timezone TEXT NOT NULL DEFAULT 'UTC',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_notified_at TIMESTAMPTZ,
  active BOOLEAN NOT NULL DEFAULT true
);
CREATE INDEX idx_push_active_last ON push_subscriptions (active, last_notified_at);
```
- RLS: allow anon inserts and updates

## 3. Client Side (index.html)

### Permission Modal
- Show an in-app modal after 5 minutes of active play
- On PWA install (`appinstalled` event), show it after 2 seconds
- Text: "Daily marketing tip? Get one business concept at noon each day."
- Two buttons: "Enable daily tips" / "Not now"

### Subscription Logic
- On accept: call `Notification.requestPermission()`
- If granted: `pushManager.subscribe()` with VAPID public key
- Save subscription JSON + timezone + session_id to `push_subscriptions` via Supabase REST

### Edge Cases (Client)
- **Already subscribed**: Don't show modal (check `localStorage ba_notif_subscribed`)
- **Permission denied by browser**: Don't show modal (check `Notification.permission`)
- **User clicked "Not now"**: Store timestamp in `localStorage ba_notif_declined`, re-show after 30 days
- **All 103 discovered**: Never show the modal

## 4. Service Worker (sw.js)

### Push Event Handler
```js
self.addEventListener('push', e => {
  const data = e.data.json();
  e.waitUntil(self.registration.showNotification(data.title, {
    body: data.body,
    icon: './icons/icon-192.png',
    badge: './icons/icon-192.png',
    tag: 'bizalchemy-daily',
    renotify: true,
    data: { url: './' }
  }));
});
```

### Notification Click
- Focus existing app window, or open a new one

## 5. Supabase Edge Function: `send-daily-push`

### Trigger
- pg_cron every 15 minutes

### Logic
1. Query `push_subscriptions` where `active = true` and (`last_notified_at` is null or older than 20 hours)
2. For each subscription, check if user's local time is approximately noon (11:45–12:15)
3. Join with `game_saves` to get `discovered` array
4. If `discovered` contains all 103 items → skip (no notification)
5. Pick next undiscovered items: walk tiers T0→T6, collect first 7 undiscovered in ALL order
6. Rotate daily: select item at index `day_of_year % count` (where count ≤ 7) so the user sees a different concept each day even if they don't play
7. Look up hook text for that item from `push_hook_texts` table (see Section 7)
8. If `game_saves.updated_at` is older than 7 days → use inactive variant text
9. Send web-push (VAPID-signed, encrypted payload)
10. Update `last_notified_at`
11. On 410 Gone response → set `active = false`

## 6. Edge Cases (Server)

| Case | Behavior |
|------|----------|
| All 103 discovered | **Stop all notifications permanently** |
| Inactive 7+ days | Use alternate tone: "Your marketing empire misses you. [hook] — come back and discover [item]." |
| Permission denied | Respect it. Client won't subscribe. No server action needed. |
| Multiple devices/sessions | Deduplicate by `session_id` — one notification per user per day |
| Timezone handling | Store user's `Intl.DateTimeFormat().resolvedOptions().timeZone`, server checks if local time ≈ noon |
| Subscription expired (410) | Mark `active = false`, stop sending |

## 7. Notification Hook Texts (All 103 Items)

**Storage:** These texts live in the `push_hook_texts` Supabase table (columns: `item`, `title`, `body`). The edge function fetches them at runtime — no hardcoded texts in the function code.

Format: `Item` → **Title** / Body

### Tier 0 — Raw Ingredients (4)
- **Idea** → "Your next big move starts here" / One raw spark is all it takes. Open BizAlchemy and see what your idea becomes.
- **Audience** → "Who exactly are you building for?" / A business without a clear audience is shouting into the void. Come find yours in BizAlchemy.
- **Content** → "Your silent salesperson is waiting" / Content sells while you sleep — but only if you create it. Come build yours.
- **Tool** → "The right tool changes everything" / Stop doing things the hard way. One combination could unlock your next level.

### Tier 1 — Core Assets (8)
- **Niche** → "The riches are in the niches" / Your competitors are broad. You should be specific. Discover your niche today.
- **Article** → "One article can work for years" / Most businesses never write their first one. You're about to discover how.
- **Website** → "You still don't have a digital home?" / Every serious business needs a website. Come build the foundation.
- **Newsletter** → "Own your audience — no algorithm needed" / A newsletter is the one channel nobody can take from you. Discover it.
- **CRM** → "Your network is leaking" / Relationships slip through the cracks without a system. Discover CRM today.
- **Template** → "Why are you reinventing the wheel?" / One template saves hours every week. Come see what you can unlock.
- **Value Proposition** → "Can you explain your business in 1 sentence?" / If your customers can't, you have a problem. Discover your value proposition.
- **Social Media** → "Your audience is scrolling right now" / They are online. You should be too. Discover social media strategy.

### Tier 2 — Digital Foundations (22)
- **Keyword Research** → "Your customers are Googling this right now" / The exact words they type are gold. Come discover keyword research.
- **Landing Page** → "One page. One goal. Maximum conversions." / The most focused page on your site is often the most profitable. Build it.
- **Lead Magnet** → "What would make someone give you their email?" / A lead magnet so good they can't say no. Come discover the strategy.
- **Persona** → "Do you really know your customer?" / Their fears, goals, habits — when you know them deeply, selling becomes helping. Discover Persona.
- **Offer** → "Nobody buys confused" / The right offer makes the right person say yes instantly. Come craft yours.
- **Blog** → "Scattered content is forgotten content" / A blog compounds over time. Come give your writing a permanent home.
- **Content Strategy** → "Winging it with content? That shows." / A plan for what you create, for whom, and why. Discover the system.
- **Content Calendar** → "When was your last consistent week?" / Consistency beats inspiration. A calendar keeps you publishing. Come discover it.
- **Copywriting** → "Words that make people reach for their wallet" / Not just writing — writing with intent. Every word earns its place. Come unlock it.
- **Email Capture** → "Your visitors are leaving forever" / Without email capture, every visitor is a lost relationship. Come discover how to fix that.
- **Analytics** → "Are you guessing or do you know?" / Stop hoping. Start measuring. Discover what analytics reveals.
- **Wireframe** → "Beautiful sites that don't convert share one flaw" / They skipped the wireframe. Structure first, beauty later. Come discover it.
- **Email List** → "Social followers vanish. This doesn't." / Your email list is the one asset no platform can take away. Come unlock it.
- **Nurture Sequence** → "Your new subscribers are forgetting you" / A nurture sequence turns cold signups into warm prospects — on autopilot. Discover it in BizAlchemy.
- **Automation** → "You're doing manually what a machine could do" / Automation is not a shortcut — it's an accelerator for what already works. Come discover it.
- **Web Design** → "Visitors judge you in 3 seconds" / Design isn't decoration. It's the trust signal that wins or loses the deal. Come unlock it.
- **Headline** → "Nobody reads line two if line one fails" / The headline is the most important copy you'll ever write. Come master it in BizAlchemy.
- **Pitch Deck** → "Can you win the room in 10 minutes?" / A pitch deck opens doors to clients, partners, and investors. Build yours.
- **Subscriber** → "Someone chose to hear from you. Now what?" / Unlike followers, subscribers gave you real permission. Don't waste it. Come discover Subscriber.
- **Script** → "Why do your presentations feel unrehearsed?" / A great script makes you sound effortless. That's the paradox. Come unlock it.
- **Hosting** → "Your website is only as good as its uptime" / Invisible but essential — without hosting, your site is just a file. Come discover it.
- **Workflow** → "The third time you do anything manually is a signal" / It's time to build a workflow. Document it once, use it forever. Come unlock it in BizAlchemy.

### Tier 3 — Marketing Channels (25)
- **Brand Guide** → "Your brand looks different on every channel" / Inconsistency erodes trust. A brand guide fixes it in one document. Come discover it.
- **SEO** → "Your competitors rank. You don't. Why?" / SEO is the compound interest of marketing. Start investing today.
- **Rank Tracker** → "Are you on page 1 or page 10?" / You can't improve what you don't measure. Track your search rankings.
- **Sales Page** → "Your best salesperson should work 24/7" / A sales page handles objections and closes deals while you sleep. Come unlock it.
- **Lead Generation** → "Where is tomorrow's customer coming from?" / Without a lead gen system, you're relying on luck. Build the engine.
- **Brand Voice** → "Do your emails sound like a different company wrote them?" / Brand voice is discovered, not invented. You have enough data now. Come unlock it in BizAlchemy.
- **Design System** → "Every new page shouldn't be built from scratch" / Reusable components keep your brand consistent as you scale. Come discover Design System.
- **Prototype** → "Building before testing is the most expensive mistake" / Change a prototype in minutes. Change a product in weeks. Come discover Prototype.
- **Editorial Plan** → "What are you publishing next month? No idea?" / An editorial plan means no more last-minute scrambles. Come unlock it.
- **Email Funnel** → "Your list is growing but sales aren't?" / The problem is almost always a missing email funnel. Fix the sequence.
- **Marketing Stack** → "Your tools don't talk to each other, do they?" / Connected tools beat disconnected apps. Discover the marketing stack.
- **Webinar** → "30 minutes of attention beats 30 seconds of scrolling" / Teach live, sell naturally. The highest-converting format exists. Come discover it.
- **Video** → "The most engaging format and you're not using it" / Face, voice, story. Recorded once, watched forever. Discover video.
- **Ad Copy** → "Your ad has 3 seconds to earn the click" / Short, sharp, written for one person in one moment. Come master ad copy in BizAlchemy.
- **Dashboard** → "Is your business data in 7 different tabs?" / One screen, everything that matters. Discover the dashboard concept.
- **Brand Identity** → "A logo is not a brand" / The complete visual and verbal expression of who you are. Go deeper.
- **Opt-in Page** → "Your homepage is not an opt-in page" / One page, one irresistible reason to subscribe. Simple and powerful. Come unlock it.
- **Sales Copy** → "Every sentence should move them closer to yes" / Persuasive writing where each word earns the close. Discover it.
- **Organic Traffic** → "Paying for every visitor? There's another way." / SEO meets content strategy — the compound interest of digital marketing. Come discover it.
- **Outreach** → "Waiting to be discovered is not a strategy" / Reach out before they find you. Control your pipeline proactively. Come unlock Outreach.
- **Podcast** → "Build trust through their earbuds" / Authority-building during commutes and gym sessions. Discover podcasting.
- **Social Proof** → "They don't believe you. They believe your customers." / Testimonials, reviews, case studies — the most powerful conversion tool. Come discover it.
- **Tripwire** → "The tiny offer that separates browsers from buyers" / A low price point that changes the entire relationship. Discover it.
- **A/B Test** → "You're guessing which version works better" / Two versions, one winner. The highest-leverage marketing habit. Come unlock it in BizAlchemy.
- **AI Writing** → "Writer's block is now optional" / AI-accelerated content — no slow days, no blank pages. Discover it.

### Tier 4 — Growth Strategy (23)
- **Sales Funnel** → "From stranger to customer in how many steps?" / Every step intentionally designed. That's what a sales funnel does. Come discover it.
- **Launch Sequence** → "Opening day with zero anticipation? That's a mistake." / Build desire before the cart opens. Discover the launch sequence.
- **Inbound Sales** → "What if buyers came to you already warm?" / No cold calls needed. They arrive educated and ready. Come unlock Inbound Sales.
- **Webinar Funnel** → "Registration to sale — fully automated" / Education followed by a natural offer. The complete system awaits.
- **High-Ticket Offer** → "Undercharging is not humility. It's a mistake." / Premium pricing backed by proof and positioning. You're ready. Come discover it in BizAlchemy.
- **Authority Site** → "Are you the go-to in your niche, or just another option?" / So comprehensive, people reference you automatically. Come unlock Authority Site.
- **Product Design** → "An idea is not a product" / Where function meets form — from concept to something people pay for. Come discover it.
- **Marketing OS** → "Your marketing still requires you every day?" / All tools connected, all processes flowing. Nothing manual anymore. Come unlock it.
- **Conversion** → "Traffic means nothing without this" / The moment they say yes. The most important metric in your business. Come discover it.
- **Social Brand** → "A brand people follow like a person" / Not a logo posting occasionally — a living personality on social media. Come unlock it.
- **Content Machine** → "Running out of content ideas every week?" / A system that produces reliably without burning you out. Come discover Content Machine.
- **Performance Report** → "How much of your marketing budget is wasted?" / Raw numbers turned into clear decisions. No more vanity metrics. Come unlock it in BizAlchemy.
- **Ad Campaign** → "Paid attention, aimed precisely" / Reach new audiences at exactly the right moment and place. Come discover it.
- **Video Channel** → "A channel that grows more valuable over time" / Compounding audience — the longer it exists, the more it earns. Come unlock it.
- **Checkout Page** → "They added to cart but never paid?" / The final step where intent becomes revenue. Come discover Checkout Page in BizAlchemy.
- **Retargeting** → "97% of visitors leave without buying. Then what?" / A warmer second chance for people who nearly said yes. Come unlock Retargeting.
- **AI Automation** → "Your workflows are dumb. They don't have to be." / AI-enhanced marketing stack running intelligently around the clock. Come discover it.
- **Discovery Call** → "Are you pitching before you understand?" / Understand their situation first. Recommend second. Close naturally. Come unlock it.
- **Online Course** → "Your expertise has a shelf life. Package it." / Your knowledge, available at scale without your daily presence. Come discover it in BizAlchemy.
- **Referral Program** → "Your happiest customers aren't recruiting for you?" / Happy customers are your most credible marketers. Come discover how to systematize it.
- **Digital Product** → "Build once. Sell forever. Zero fulfilment." / Templates, toolkits, guides — instant value with no shipping costs. Come unlock it.
- **Partnership** → "Growing alone is the slow way" / Strategic relationships where both audiences benefit. Discover partnerships.
- **Portfolio** → "Talking about your work? Show it instead." / Your best work, curated to demonstrate real capability. Come discover Portfolio.

### Tier 5 — Advanced Systems (13)
- **Automated Sales** → "Revenue while you sleep — not a fantasy" / Your sales system generating income without your daily involvement. Come unlock it in BizAlchemy.
- **Thought Leadership** → "Are people quoting you yet?" / The earned status where others reference and recommend you. Come discover it.
- **Product Launch** → "Maximum impact on day one — by design" / Every element aligned for the strongest possible opening. Come unlock Product Launch.
- **Automated Webinar** → "Your best presentation, running without you" / Teach and sell around the clock. No stage fright required. Come discover it.
- **Revenue Engine** → "Predictable income or rollercoaster months?" / Revenue that arrives consistently without heroic effort. Come unlock it in BizAlchemy.
- **Premium Brand** → "Still competing on price? There's a better way." / A brand so strong, no one pushes back on your pricing. Come discover it.
- **Influence** → "Reach without trust is just noise" / Genuine, lasting influence that shapes what people believe. Come unlock it.
- **Growth System** → "Your growth is accidental. It shouldn't be." / Acquisition and retention — deliberate, documented, repeatable. Come discover it in BizAlchemy.
- **Sales Machine** → "Sales only happen when you're hustling?" / Consistent generation at any hour of any day. Discover the machine.
- **SaaS Product** → "Monthly recurring revenue from software" / Built once, sold to thousands. The recurring revenue dream. Come unlock it.
- **Performance Marketing** → "Every euro tracked, every cent optimized" / Data-driven growth with nothing left to chance. Come discover it in BizAlchemy.
- **AI Content System** → "Content at scale is now a tech question, not a time one" / A self-sustaining engine that makes you the publisher. Come unlock it.
- **Upsell** → "Every sale could be worth more" / Each transaction is an opportunity to grow its value. Discover upsells.

### Tier 6 — Endgame (8)
- **Passive Income** → "Money that arrives while you rest" / Not a fantasy — a system built step by step. You're almost there.
- **Recurring Revenue** → "One-time sales are exhausting. This isn't." / Revenue that renews itself. The most stable business model. Come discover it.
- **Viral Growth** → "What if your customers brought more customers?" / Word-of-mouth engineered into the experience. Growth that multiplies. Come unlock it.
- **Personal Brand** → "Your name should open doors" / You are the brand. Reputation as your superpower. Come discover it in BizAlchemy.
- **Market Leader** → "Stop competing. Start leading." / You're not in the race anymore — you own the category. Come unlock it.
- **Financial Freedom** → "The reason you started all of this" / Income exceeds needs, permanently. Discover the endgame.
- **Digital Empire** → "Beyond a single business — a legacy" / Influence and income across channels. The final discovery awaits.
- **AI Marketing OS** → "The future of digital business is here" / Every funnel, email, ad, and content piece orchestrated by intelligence. Come discover it.

### Inactive User Variant (7+ days)
Override the title with: **"Your marketing empire misses you"**
Override the body with: "It's been a while. [original title lowercase] — come back and discover [Item Name]."

## 8. File Locations

| What | File |
|------|------|
| Permission modal (HTML/CSS/JS) | `index.html` — search for `notif-overlay` |
| VAPID public key placeholder | `index.html` — search for `VAPID_PUBLIC_KEY` |
| Push + click handlers | `sw.js` — `push` and `notificationclick` listeners |
| Edge function | `supabase/functions/send-daily-push/index.ts` |
| Table migration | `supabase/migrations/20260323_push_subscriptions.sql` |
| Cron setup | `supabase/migrations/20260323_pg_cron_push.sql` |
| Hook texts | `push_hook_texts` table in Supabase (already populated) |

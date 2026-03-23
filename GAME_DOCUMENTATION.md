# BizAlchemy — Game Documentation

## Overview

**BizAlchemy** is a single-page browser-based crafting/combination game inspired by "Little Alchemy" but themed entirely around **digital marketing and business concepts**. Players start with four basic elements and combine them to discover increasingly advanced marketing strategies, tools, and business outcomes — ultimately building a "Digital Empire."

The game is educational: every element maps to a real digital marketing concept with a detailed description, and each card links to the Serenichron glossary for deeper learning. Players can also mark elements as "owned" to track which concepts they've actually implemented in their business.

**Tech stack:** Pure HTML/CSS/JavaScript — single self-contained HTML file. Only external dependency is Twemoji for cross-platform emoji rendering.

---

## Game Concept

- **Genre:** Crafting / Combination puzzle (similar to Little Alchemy, Doodle God)
- **Theme:** Digital marketing & online business building
- **Goal:** Discover all 103 elements across 7 tiers by combining pairs of elements
- **Secondary goal:** Mark discovered elements as "owned" to track real business coverage
- **Educational purpose:** Each element represents a real digital marketing concept with descriptions explaining what it is and why it matters
- **Win condition:** Discover all 103 elements to unlock the "Digital Empire achieved" congratulations screen

---

## Core Mechanics

### Starting Elements (Tier 0 — "Raw Ingredients")
Players begin with 4 base elements:

| Element   | Emoji | Description |
|-----------|-------|-------------|
| Idea      | 💡    | The spark that starts every business |
| Audience  | 👥    | The people you exist to serve |
| Content   | 📝    | The value you create and put into the world |
| Tool      | 🔧    | The software and systems that turn ideas into reality |

### Combination System
- **Select two cards** from the grid to attempt a combination
- If the pair has a valid recipe, the result appears in the combination tray
- **Tap the result** to add it to the collection
- Newly discovered elements can then be used in further combinations
- Invalid combinations show a "NO MATCH" state

### Combination Tray (Bottom Bar)
The tray at the bottom of the screen has three zones:
- **Slot A** — First selected element
- **Slot B** — Second selected element
- **Result Slot** — Shows the combination outcome

Result slot states:
- **NEW** (green) — A new element was created; tap to collect it
- **FOUND** (blue) — The result already exists in your collection; tap to cancel
- **NO MATCH** (red) — These two elements don't combine; tap to cancel

---

## Tier System

The game organizes all 103 elements into 7 tiers, each with a unique color palette:

| Tier | Name                | Color   | Elements | Description |
|------|---------------------|---------|----------|-------------|
| 0    | Raw Ingredients     | Gold    | 4        | Starting elements |
| 1    | Core Assets         | Blue    | 8        | First combinations from base elements |
| 2    | Digital Foundations  | Green   | 22       | Building blocks of digital marketing |
| 3    | Marketing Channels  | Orange  | 25       | Active marketing tools and channels |
| 4    | Growth Strategy     | Purple  | 23       | Scaling and optimization systems |
| 5    | Advanced Systems    | Pink    | 13       | Automated and advanced business systems |
| 6    | Endgame             | Lime    | 8        | Ultimate business outcomes |

**Total: 103 elements, 117 recipes (some elements have multiple recipes)**

---

## All Elements by Tier

### Tier 0 — Raw Ingredients (4)
| Element | Emoji |
|---------|-------|
| Idea | 💡 |
| Audience | 👥 |
| Content | 📝 |
| Tool | 🔧 |

### Tier 1 — Core Assets (8)
| Element | Emoji | Recipe |
|---------|-------|--------|
| Niche | 🎯 | Idea + Audience |
| Article | ✍️ | Idea + Content |
| Website | 🌐 | Idea + Tool |
| Newsletter | 📧 | Audience + Content |
| CRM | 🗃️ | Audience + Tool |
| Template | 📋 | Content + Tool |
| Value Proposition | ✨ | Idea + Niche |
| Social Media | 📱 | Audience + Website |

### Tier 2 — Digital Foundations (22)
| Element | Emoji | Recipe(s) |
|---------|-------|-----------|
| Keyword Research | 🔑 | Niche + Article |
| Landing Page | 🛬 | Niche + Website |
| Lead Magnet | 🧲 | Niche + Newsletter |
| Persona | 🪞 | Niche + CRM |
| Offer | 💎 | Niche + Template |
| Blog | 📰 | Article + Website |
| Content Strategy | 🗺️ | Article + Social Media |
| Content Calendar | 🗓️ | Article + Template |
| Copywriting | ✏️ | Article + Persona |
| Email Capture | 🎣 | Website + Lead Magnet |
| Analytics | 📊 | Tool + CRM |
| Wireframe | 📐 | Website + Template |
| Email List | 📬 | Lead Magnet + CRM |
| Nurture Sequence | 💌 | Newsletter + Template |
| Automation | 🤖 | CRM + Template |
| Web Design | 🌈 | Website + Wireframe |
| Headline | 🏷️ | Value Proposition + Niche |
| Pitch Deck | 📊 | Value Proposition + Template |
| Subscriber | 🔔 | Audience + Newsletter |
| Script | 🎬 | Idea + Template |
| Hosting | ☁️ | Tool + Website |
| Workflow | ⚙️ | Tool + Template |

### Tier 3 — Marketing Channels (25)
| Element | Emoji | Recipe |
|---------|-------|--------|
| Brand Guide | 🎨 | Web Design + Copywriting |
| SEO | 🔍 | Keyword Research + Blog |
| Rank Tracker | 📈 | Keyword Research + Analytics |
| Sales Page | 💰 | Landing Page + Offer |
| Lead Generation | 🔮 | Lead Magnet + Email List |
| Brand Voice | 🗣️ | Persona + Copywriting |
| Design System | 🏗️ | Brand Guide + Web Design |
| Prototype | 🔬 | Wireframe + Web Design |
| Editorial Plan | 📅 | Content Strategy + Content Calendar |
| Email Funnel | 📨 | Email List + Nurture Sequence |
| Marketing Stack | 🛠️ | Automation + Workflow |
| Webinar | 🎥 | Script + Subscriber |
| Video | 📹 | Script + Hosting |
| Ad Copy | 📣 | Headline + Copywriting |
| Dashboard | 🖥️ | Analytics + Workflow |
| Brand Identity | ⭐ | Design System + Brand Voice |
| Opt-in Page | 📮 | Email Capture + Lead Magnet |
| Sales Copy | 💬 | Copywriting + Offer |
| Organic Traffic | 🌱 | SEO + Content Strategy |
| Outreach | 📤 | CRM + Persona |
| Podcast | 🎙️ | Script + Tool |
| Social Proof | 🌟 | Offer + Subscriber |
| Tripwire | 🪝 | Lead Magnet + Offer |
| A/B Test | 🧪 | Analytics + Landing Page |
| AI Writing | 🪄 | Automation + Copywriting |

### Tier 4 — Growth Strategy (23)
| Element | Emoji | Recipe(s) |
|---------|-------|-----------|
| Sales Funnel | 💸 | Sales Copy + Email Funnel _or_ Tripwire + Email Funnel |
| Launch Sequence | 🏁 | Sales Page + Email Funnel |
| Inbound Sales | 🤝 | Organic Traffic + Sales Page _or_ Discovery Call + Sales Page |
| Webinar Funnel | 🎞️ | Webinar + Email Funnel |
| High-Ticket Offer | 👑 | Sales Page + Social Proof _or_ Discovery Call + Offer _or_ Portfolio + Sales Page |
| Authority Site | 🏆 | Rank Tracker + Organic Traffic |
| Product Design | 🎁 | Prototype + Brand Identity |
| Marketing OS | 💻 | Email List + Marketing Stack _or_ Opt-in Page + Marketing Stack |
| Conversion | ✅ | Email Funnel + Sales Page |
| Social Brand | 📲 | Social Media + Brand Identity |
| Content Machine | 🏭 | Editorial Plan + Social Media _or_ Podcast + Editorial Plan |
| Performance Report | 📑 | Dashboard + Marketing Stack _or_ A/B Test + Marketing Stack |
| Ad Campaign | 📢 | Ad Copy + Landing Page |
| Video Channel | 📺 | Video + Subscriber |
| Checkout Page | 💳 | Sales Page + Offer |
| Retargeting | 🔁 | Ad Campaign + Analytics |
| AI Automation | 🧩 | Marketing Stack + AI Writing |
| Discovery Call | 📞 | Outreach + Lead Generation |
| Online Course | 🎓 | Video + Offer |
| Referral Program | 🔗 | Lead Generation + Social Proof |
| Digital Product | 📦 | Workflow + Offer |
| Partnership | 🤲 | Outreach + Social Proof |
| Portfolio | 🗂️ | Social Proof + Brand Identity |

### Tier 5 — Advanced Systems (13)
| Element | Emoji | Recipe(s) |
|---------|-------|-----------|
| Automated Sales | 🦾 | Sales Funnel + Marketing OS _or_ Online Course + Marketing OS |
| Thought Leadership | 🧠 | Authority Site + Content Machine _or_ Partnership + Authority Site |
| Product Launch | 🚀 | Product Design + Launch Sequence _or_ Online Course + Launch Sequence |
| Automated Webinar | 📽️ | Webinar Funnel + Marketing OS |
| Revenue Engine | 💹 | Inbound Sales + Conversion _or_ Digital Product + Sales Funnel |
| Premium Brand | 🏅 | High-Ticket Offer + Authority Site |
| Influence | 🌠 | Video Channel + Social Brand |
| Growth System | 🌊 | Performance Report + Revenue Engine _or_ Referral Program + Content Machine |
| Sales Machine | ⚡ | Launch Sequence + Marketing OS |
| SaaS Product | 🔌 | Product Design + Automation |
| Performance Marketing | 🏹 | Retargeting + Conversion |
| AI Content System | 🧬 | AI Automation + Content Machine |
| Upsell | ⬆️ | Checkout Page + Offer |

### Tier 6 — Endgame (8)
| Element | Emoji | Recipe(s) |
|---------|-------|-----------|
| Passive Income | 💤 | Sales Machine + Revenue Engine _or_ Automated Webinar + Automated Sales |
| Recurring Revenue | ♾️ | SaaS Product + Automated Sales _or_ Upsell + Sales Machine |
| Viral Growth | 🦠 | Growth System + Influence _or_ Referral Program + Growth System |
| Personal Brand | 🦋 | Thought Leadership + Influence _or_ Partnership + Influence |
| Market Leader | 🥇 | Premium Brand + Performance Marketing _or_ Portfolio + Premium Brand |
| Financial Freedom | 🏖️ | Passive Income + Recurring Revenue _or_ Upsell + Revenue Engine |
| Digital Empire | 🌎 | Market Leader + Viral Growth _or_ Product Launch + Revenue Engine |
| AI Marketing OS | 🌌 | AI Content System + Marketing OS |

---

## Features

### 1. Intro Screen
- Displays on first load and after reset
- Shows the game logo, title, and tagline
- **New players** see:
  - Three-step tutorial (Mix, Discover, Learn)
  - Feature grid highlighting: achievements, hints, glossary, tracking, audio narration, multilanguage support
- **Returning players** see a welcome-back dashboard with:
  - Stats summary (discovered, owned, achievements)
  - Overall progress bar with percentage
  - Per-tier breakdown mini-chart
  - Recent achievements
  - Next achievement teaser
- "Start discovering →" button to begin

### 2. Card Grid
- Scrollable area displaying all elements **organized by department** (not tier)
- Seven departments with distinct color palettes: Strategy & Foundations, Content & Media, Brand & Design, Marketing & Traffic, Email & Automation, Sales & Conversion, Products & Revenue
- Department tab bar at the top for navigation; all departments visible on one scrollable screen
- Each department has a header showing department name, icon, and progress (e.g., "5 / 14")
- **Discovered elements** show as colored cards with emoji and name
- **Undiscovered elements** show as locked placeholders ("?" with dashed border)
- Cards are arranged in a 3-column grid per department

### 3. Card Selection & Filtering
- Tapping a card selects it (highlighted with a colored border and scaled up)
- When one card is selected, **incompatible cards fade out** (opacity 0.2, pointer-events disabled) — only cards that can react with the selected one remain active
- When both slots are filled, all non-selected cards dim (opacity 0.32)
- Tapping a selected card deselects it

### 4. Card Indicators
After attempting a combination, cards show status badges:
- **★ (gold star)** — A valid combination exists and was found, but the result hasn't been collected yet
- **✓ (green checkmark)** — The combination was made and the result was already collected
- **≠ (grey)** — These two elements don't produce a result

These indicators only appear when one card is selected, showing the status of that card's past combinations with each visible card.

### 5. Info Icons
- Each card has an (i) icon in the top-left corner
- **Hidden by default**, fades in when hovering over a card
- Clicking opens the slide-in detail panel

### 6. Combination Tray
- Fixed at the bottom of the game area
- Layout: `[Slot A] + [Slot B] = [Result]`
- Each slot can be cleared individually via an "✕" button
- Color-coded to match the tier of the element in each slot

### 7. Result States
- **NEW** (green) — A new element was created; tap to collect it
- **FOUND** (blue) — Already discovered; tap to cancel
- **NO MATCH** (red) — No valid recipe; tap to cancel

### 8. Discovery Animation
- Newly discovered elements appear with a "pop" animation (scale from 0 with rotation)
- The grid auto-scrolls to the newly discovered card
- A green toast notification appears: "Discovered: [emoji] [name]!"
- Toast auto-dismisses after 2.4 seconds

### 9. Tooltips (Desktop)
- Hover over any card to see a tooltip
- Tooltip contents:
  - Element name with emoji
  - Recipe(s) that create this element (if any)
  - Two-line description explaining the concept
  - "Read more →" link to the Serenichron glossary page
- Tooltip intelligently positions itself above or below the card
- Tooltip stays visible while hovered

### 10. Slide-in Detail Panel
- Opens when tapping a card's info icon (or on mobile via long-press)
- Full-height panel sliding up from the bottom (80% height)
- Contains:
  - Element emoji, name, and tier
  - Full multi-paragraph description with "Also known as" synonym terms for SEO
  - Recipe(s) that create this element
  - "Read more" link to Serenichron glossary
  - **3-state ownership toggle** — "Not yet" / "Partially" / "Yes" segmented control
  - **Narration button** — play/pause text-to-speech of the description (with language selector)
  - CTA link to book a consultation call
- Closeable via ✕ button or tapping the overlay

### 11. Ownership Tracking
- **Three ownership states:** "Not yet" (default), "Partially" (counts as 0.5), and "Yes" (fully owned)
- Owned and partially-owned status persists in localStorage and syncs to cloud
- Owned elements show a "✓ Owned" badge in tooltips; partial shows "◐ Partially"
- Ownership tracked separately from discovery (you can discover without owning)
- Both owned and partially-owned count toward "Business Coverage" achievements
- Drives the "Business Coverage" and "Department Badge" achievement categories

### 12. Hint System
- "💡 Hint" button in the header
- Shows a popup suggesting a valid undiscovered combination (prioritizes lowest tier)
- Format: `[emoji] Name + [emoji] Name = ???`
- **15-second cooldown** after each use (countdown displayed on the button)
- Popup auto-dismisses after 4 seconds or can be manually closed
- If all elements are found, shows "You found everything!" message

### 13. Progress Counter
- Displayed in the header as a pill badge: `X / 103 found`
- Updates in real-time as elements are discovered

### 14. Statistics Screen
- Accessed via the 📊 button in the header
- **Achievements section** — 4-column grid showing all 28 achievement badges (unlocked in color, locked greyed out)
- **Summary cards** — Elements discovered, recipes tried, items owned, business coverage %
- **Per-tier breakdown** — Tier name, visual progress bar (discovered vs owned), item list
- Each item in a tier shows discovered/owned/not-discovered state

### 15. Achievement System
28 achievements across 3 categories, checked in real-time:

**Game Progression (8):**
| Achievement | Condition |
|-------------|-----------|
| 🌱 First Discovery | Discover 1 element beyond starters |
| 🧭 Explorer | Discover 25 elements |
| ⚗️ Alchemist | Discover 50 elements |
| 🔮 Master Alchemist | Discover 75 elements |
| 👑 Grand Master | Discover all 103 elements |
| 🧪 Experimenter | Try 30 recipes |
| ⚡ Mad Scientist | Try 75 recipes |
| 🏆 Completionist | Try all 117 recipes |

**Business Coverage (4):**
| Achievement | Condition |
|-------------|-----------|
| 🚶 Getting Started | Mark 5 items as owned |
| 🧱 Foundation | Mark 15 items as owned |
| ⛰️ Halfway There | Mark 50 items as owned |
| 🦄 Full Stack Business | Mark all 103 items as owned |

**Department Badges (16):**
| Achievement | Department | Condition |
|-------------|-----------|-----------|
| ✍️ Content Creator | Content | Own Article, Blog, Content Strategy |
| 🏭 Publishing Machine | Content | Own Editorial Plan, Content Calendar, Content Machine, AI Content System |
| 📧 Email Marketer | Email | Own Newsletter, Email List, Email Funnel |
| 💌 Nurture Expert | Email | Own Newsletter, Email List, Nurture Sequence, Email Funnel, Lead Generation |
| 📣 Marketer | Marketing | Own Social Media, SEO, Ad Copy |
| 🚀 Marketing Pro | Marketing | Own Marketing Stack, Marketing OS, Performance Marketing, AI Marketing OS |
| 💰 Closer | Sales | Own Offer, Sales Page, Sales Funnel |
| ⚡ Sales Machine | Sales | Own Offer, Sales Page, Sales Funnel, Upsell, High-Ticket Offer, Automated Sales |
| 🎨 Brand Builder | Brand | Own Value Proposition, Brand Voice, Brand Identity |
| 👑 Brand Empire | Brand | Own Value Proposition, Brand Voice, Brand Identity, Brand Guide, Design System, Premium Brand |
| 🔧 Tech Ready | Tech | Own Website, CRM, Analytics, Automation |
| 🤖 Automation Expert | Tech | Own Automation, AI Automation, Marketing OS, Workflow |
| 🎁 Product Creator | Products | Own any 3 product items |
| 📦 Product Empire | Products | Own all 5 product items |
| 💹 Revenue Stream | Revenue | Own Revenue Engine, Recurring Revenue, Passive Income |
| 🏖️ Financially Free | Revenue | Own Passive Income, Recurring Revenue, Financial Freedom, Revenue Engine |

**Achievement popup:**
- Animated popup with overlay when an achievement unlocks
- Displays icon, "Achievement unlocked" label, name, and description
- "Nice!" button to dismiss
- Multiple achievements queue and show one at a time
- Tapping the overlay also dismisses

### 16. Hamburger Menu
- "☰" button in the header opens a dropdown menu
- **Session ID** — displayed at the top with tap-to-copy functionality
- **Sync status indicator** — colored dot showing cloud sync state (synced/syncing/failed/offline) with last sync time
- **Load session** — enter another session ID to restore progress from the cloud
- **Install app** — manual PWA install button (shown only on mobile/tablet browsers)
- **Reset** — resets all state with confirmation dialog

### 17. Reset Game
- Accessed via the hamburger menu (↺ Reset)
- Shows an in-app confirmation dialog before resetting (not browser `confirm()`)
- Resets all state: discovered elements, tried combinations, owned items, partial items, and achievements
- Clears all localStorage data
- Returns to the intro screen

### 18. Win / Congratulations Screen
- Triggers automatically when all 103 elements are discovered (600ms delay)
- Animated trophy emoji burst
- "Achievement unlocked" label
- Title: "Digital Empire achieved."
- Subtitle: "You've discovered every concept in the BizAlchemy tree."
- **Business coverage bar** — animated progress bar showing percentage of elements marked as owned
- **Encouragement message** — motivational text about building a real business
- **Achievement summary** — grid of all 28 achievement chips (unlocked in color, locked greyed out)
- **Learning message** — reflection on the educational value of the game
- **CTA** — "Book a free discovery call" link to Serenichron
- Confetti-style emoji row with fade-in animation
- Two buttons: "Back to overview →" (returns to game board) and "↺ Start fresh" (resets)
- Debug: `showCongrats()` can be called from the browser console to preview

### 19. Cloud Sync (Supabase)
- All game progress is automatically synced to a **Supabase** cloud database
- Uses the `game_saves` table with upsert (merge-duplicates) strategy
- **Sync triggers:** after every state change (discovery, ownership toggle, achievement unlock)
- **Session-based:** each browser gets a unique 8-character alphanumeric session ID
- **Data synced:** discovered elements, tried recipes, owned items, partial items, achievements, and `updated_at` timestamp
- Sync only starts after the player has discovered at least one element beyond the starters
- Non-blocking: sync failures don't affect gameplay; data is always saved locally first
- **Load Session:** players can enter another session ID to restore progress from the cloud (via hamburger menu)

### 20. Offline Mode
- Automatically detects online/offline state changes via `navigator.onLine` and event listeners
- **Offline bar** appears at top of game: "You are offline — progress saves locally" with last sync time
- Sync status indicator changes to grey "offline" state
- **Disabled when offline:** translation and narration features
- **Automatic re-sync:** when connection restores, queued changes are pushed to Supabase
- Game remains fully playable offline with all progress saved to localStorage

### 21. Sound Effects
- Synthesized in real-time via the **Web Audio API** (no audio files)
- **Discovery chime** — 3-note ascending tone (523, 659, 784 Hz)
- **Achievement fanfare** — 4-note ascending chord (523, 659, 784, 1047 Hz)
- **Combo click** — Single sine wave (440 Hz, 0.12s)
- **Fail tone** — 2-note descending tone (330 → 294 Hz)

### 22. Text-to-Speech Narration
- Available in the slide-in detail panel via a play/pause button
- Uses the **Web Speech API** (`speechSynthesis`) as primary TTS engine
- Falls back to **Google Translate TTS** if native voices are unavailable
- **Language selector** with 30+ languages and flag emoji indicators
- Translates element descriptions via the Google Translate API when a non-English language is selected
- **Screen wake lock** — prevents the device from sleeping during narration (via `navigator.wakeLock`)
- Narrate button disabled while translation is in progress

### 23. PWA Support
- **`manifest.json`** — Full Web App manifest with app name, icons, theme color, and screenshots
- **Service worker** (`sw.js`) — Cache v11 with network-first strategy for own assets, cache-first for CDN resources
- Installable as a standalone app on mobile and desktop
- **Manual install button** in hamburger menu (shown on mobile/tablet browsers only)
- Portrait orientation enforced
- Auto-reload when a new service worker activates
- Body scroll/bounce disabled in standalone PWA mode

### 24. Glossary Integration
- Every tooltip includes a "Read more →" link
- Slide-in detail panel includes a glossary link
- Links follow the pattern: `https://serenichron.com/glossary/[slug]`
- Slugs are auto-generated from element names (lowercase, hyphens, alphanumeric only)
- Congrats screen also links to the glossary

---

## Color Palette System

Seven distinct color palettes, one per tier:
| Tier | Background | Border/Accent | Text | Usage |
|------|-----------|---------------|------|-------|
| 0 | #FAEEDA | #EF9F27 | #633806 | Gold/amber |
| 1 | #E6F1FB | #378ADD | #0C447C | Blue |
| 2 | #E1F5EE | #1D9E75 | #085041 | Green |
| 3 | #FAECE7 | #D85A30 | #711B13 | Orange |
| 4 | #EEEDFE | #7F77DD | #3C3489 | Purple |
| 5 | #FBEAF0 | #D4537E | #72243E | Pink |
| 6 | #FDF6E3 | #C8981E | #5C4508 | Gold |

---

## Responsive Design
- **Mobile (default):** Max width 390px, fixed height 720px (or 100svh in standalone PWA mode)
- **Tablet/desktop:** Grid expands to 4–5 columns at wider breakpoints
- **Landscape mode:** Special layout with sidebar combination tray when viewport is short and wide
- Touch-optimized: tap to select, long-press for detail panel
- Scrollable grid area with padding for the fixed tray
- Rounded corners (20px game container, 13px cards, 14px slots — removed on mobile < 430px)
- Cross-platform emoji via Twemoji CDN

## Accessibility
- Full **ARIA labels** on all interactive elements (buttons, cards, slots, dialogs)
- **Screen reader announcements** via sr-only live region
- **`prefers-reduced-motion`** support — animations disabled when the user prefers reduced motion
- Semantic HTML with `role="application"`, `role="dialog"`, `aria-modal`, etc.

---

## Animations & Transitions
- **Card selection:** Scale to 1.06 with border color transition
- **Card tap:** Scale to 0.92 on `:active`
- **Discovery pop:** Keyframe animation scaling from 0 with rotation
- **Congrats burst:** Trophy scales in with rotation
- **Confetti row:** Fade-in with upward slide (0.4s delay)
- **Tooltip:** Opacity fade (0.12s)
- **Slot border:** Color transition (0.15s)
- **Slide-in panel:** translateY with cubic-bezier easing (0.35s)
- **Achievement popup:** Scale from 0 with cubic-bezier spring (0.35s)
- **Info icon:** Opacity fade on card hover (0.15s)

---

## Recipe Tree Summary

The game contains **117 recipes** producing 99 non-starting elements (many elements have multiple recipes).

### Recipe Structure
- **Tier 0 → Tier 1:** All 6 combinations of the 4 starters (4 choose 2) + 2 cross-tier recipes (8 total)
- **Tier 1 → Tier 2:** 22 recipes from Tier 1 pairs + cross-tier
- **Tier 2 → Tier 3:** 25 recipes
- **Tier 3 → Tier 4:** 30 recipes (many elements have 2–3 recipes)
- **Tier 4 → Tier 5:** 18 recipes (some elements have 2 recipes)
- **Tier 5 → Tier 6:** 15 recipes (most elements have 2 recipes)

### Multi-Recipe Elements
Many elements can be created via multiple recipes (18 elements total):
- **Sales Funnel:** Sales Copy + Email Funnel _or_ Tripwire + Email Funnel
- **Inbound Sales:** Organic Traffic + Sales Page _or_ Discovery Call + Sales Page
- **High-Ticket Offer:** Sales Page + Social Proof _or_ Discovery Call + Offer _or_ Portfolio + Sales Page
- **Marketing OS:** Email List + Marketing Stack _or_ Opt-in Page + Marketing Stack
- **Content Machine:** Editorial Plan + Social Media _or_ Podcast + Editorial Plan
- **Performance Report:** Dashboard + Marketing Stack _or_ A/B Test + Marketing Stack
- **Automated Sales:** Sales Funnel + Marketing OS _or_ Online Course + Marketing OS
- **Thought Leadership:** Authority Site + Content Machine _or_ Partnership + Authority Site
- **Product Launch:** Product Design + Launch Sequence _or_ Online Course + Launch Sequence
- **Revenue Engine:** Inbound Sales + Conversion _or_ Digital Product + Sales Funnel
- **Growth System:** Performance Report + Revenue Engine _or_ Referral Program + Content Machine
- **Passive Income:** Sales Machine + Revenue Engine _or_ Automated Webinar + Automated Sales
- **Recurring Revenue:** SaaS Product + Automated Sales _or_ Upsell + Sales Machine
- **Viral Growth:** Growth System + Influence _or_ Referral Program + Growth System
- **Personal Brand:** Thought Leadership + Influence _or_ Partnership + Influence
- **Market Leader:** Premium Brand + Performance Marketing _or_ Portfolio + Premium Brand
- **Financial Freedom:** Passive Income + Recurring Revenue _or_ Upsell + Revenue Engine
- **Digital Empire:** Market Leader + Viral Growth _or_ Product Launch + Revenue Engine

---

## Persistence

All game state is saved to `localStorage` under these keys:
| Key | Type | Contents |
|-----|------|----------|
| `ba_session` | String | 8-character alphanumeric session ID |
| `ba_discovered` | JSON array | Names of all discovered elements |
| `ba_tried` | JSON array | Sorted pair keys of all attempted recipes |
| `ba_owned` | JSON array | Names of elements marked as fully "owned" |
| `ba_partial` | JSON array | Names of elements marked as "partially" owned |
| `ba_achievements` | JSON array | IDs of unlocked achievements |
| `ba_last_sync` | ISO string | Timestamp of last successful Supabase sync |

Progress auto-loads on page refresh. If saved progress is found with at least the starter elements, the intro screen is skipped. All local state is also synced to Supabase cloud storage.

---

## Technical Architecture

### Data Structures
- `ALL` — Object mapping element names to `{emoji, tier}`
- `R` — Object mapping sorted pair keys to result names (recipe lookup)
- `REV` — Object mapping result names to arrays of `[ingredientA, ingredientB]` (reverse lookup)
- `INFO` — Object mapping element names to `{description}` for all 103 elements (includes "Also known as" synonym terms)
- `PAL` — Array of 7 tier color palette objects `{bg, b, t, dot}`
- `DEPT_PAL` — Array of 7 department color palette objects
- `DEPARTMENTS` — Array of 7 department objects with `{name, icon, items[]}`
- `ITEM_DEPT` — Object mapping each element name to its department index
- `TIER_NAMES` — Array of 7 tier name strings
- `ACHIEVEMENTS` — Array of 28 achievement objects with `{id, name, desc, icon, cat, check()}`

### State Variables
- `discovered` — `Set` of discovered element names
- `tried` — `Set` of attempted combination keys (sorted pair joined by `||`)
- `owned` — `Set` of elements marked as fully owned
- `partial` — `Set` of elements marked as partially owned
- `unlockedAch` — `Set` of unlocked achievement IDs
- `sessionId` — 8-character alphanumeric session identifier
- `syncStatus` — Current cloud sync state (`'synced'`, `'pending'`, `'failed'`, `'offline'`)
- `lastSyncTime` — `Date` of last successful Supabase sync
- `slotA`, `slotB` — Currently selected element names (or null)
- `resultName`, `resultState` — Current result in the tray
- `domCards` — `Map` from element name to its DOM node
- `activeDept` — Currently active department index (0–6)

### Key Functions
| Function | Purpose |
|----------|---------|
| `buildGrid()` | Renders the full card grid from current state |
| `tapCard(name)` | Handles card selection logic |
| `updateCardStates()` | Applies selected/dimmed/blocked/indicator classes |
| `renderSlot(el, name)` | Updates a combination slot's display |
| `renderResult()` | Evaluates and displays the combination result |
| `addResult()` | Collects a new discovery into the set |
| `showTooltip(name, el)` | Positions and displays a card tooltip |
| `openSlideIn(name)` | Opens the detail panel for an element |
| `showHint()` | Finds and displays a hint for the lowest-tier undiscovered element |
| `openStats()` | Renders and displays the statistics screen |
| `checkAchievements()` | Evaluates all achievement conditions and shows popups |
| `resetGame()` | Resets all state to initial |
| `checkWin()` | Checks if all elements are discovered; triggers congrats |
| `showCongrats()` | Displays the win screen with stats |
| `saveProgress()` | Saves all state to localStorage and triggers cloud sync |
| `loadProgress()` | Loads state from localStorage |
| `syncToSupabase()` | Pushes current state to Supabase cloud (async, non-blocking) |
| `loadFromSupabase(id)` | Fetches a session's data from Supabase by session ID |
| `loadSession()` | Prompts user for session ID and restores cloud-saved progress |
| `updateSyncIndicator()` | Updates the sync status dot and label in the UI |
| `updateOfflineUI()` | Toggles offline-related UI elements based on connectivity |
| `toggleMenu()` | Opens/closes the hamburger dropdown menu |
| `copySessionId()` | Copies current session ID to clipboard |
| `installApp()` | Triggers the PWA install prompt |

### Audio System
- `audioCtx` — Shared `AudioContext` instance (lazy-initialized)
- `playTone(freq, dur, type, vol, delay)` — Core tone generator using oscillator nodes
- `sndDiscover()` — 3-note ascending chime on element discovery
- `sndAchieve()` — 4-note fanfare on achievement unlock
- `sndCombo()` — Single click tone on card selection
- `sndFail()` — 2-note descending tone on failed combination

### Narration System
- `narrationUtterance` — Current `SpeechSynthesisUtterance` instance
- `preferredVoice` — Selected voice for the current language
- `startNarration()` / `stopNarration()` — Play/stop text-to-speech
- `requestWakeLock()` / `releaseWakeLock()` — Screen wake lock during narration
- Falls back to Google Translate TTS URL when `speechSynthesis` is unavailable

### External Dependencies
- **Twemoji** (v15.1.0 via CDN) — Cross-platform emoji rendering
- **Google Translate API** — Used for element description translation and TTS fallback
- **Supabase** (REST API) — Cloud database for session sync and persistence
- No frameworks (React, Vue, etc.)
- No CSS preprocessors
- No build tools
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

---

## AI / Automation Theme Track

The game includes a dedicated AI/automation discovery path:
1. **AI Writing** (Tier 3) — Automation + Copywriting
2. **AI Automation** (Tier 4) — Marketing Stack + AI Writing
3. **AI Content System** (Tier 5) — AI Automation + Content Machine
4. **AI Marketing OS** (Tier 6) — AI Content System + Marketing OS

This represents the progression from basic AI-assisted copywriting to a fully autonomous AI-driven marketing operation.

---

## Business Concept Departments

The game grid organizes all 103 elements into 7 departments (distinct from tiers, which represent discovery difficulty). Each department has its own color palette:

| Department | Icon | Items | Count |
|-----------|------|-------|-------|
| Strategy & Foundations | 🧭 | Idea, Audience, Niche, Value Proposition, Template, Keyword Research, Persona, Offer, Content Strategy, Analytics, Pitch Deck, Editorial Plan, A/B Test, Dashboard | 14 |
| Content & Media | ✍️ | Content, Article, Blog, Script, Headline, Copywriting, Content Calendar, Video, Podcast, Webinar, AI Writing, Social Proof, Content Machine, Video Channel, Online Course, AI Content System | 16 |
| Brand & Design | 🎨 | Website, Web Design, Wireframe, Hosting, Brand Guide, Brand Voice, Design System, Prototype, Brand Identity, Social Brand, Portfolio, Premium Brand, Personal Brand | 13 |
| Marketing & Traffic | 📣 | Social Media, Landing Page, Lead Magnet, SEO, Rank Tracker, Ad Copy, Organic Traffic, Outreach, Opt-in Page, Lead Generation, Ad Campaign, Retargeting, Referral Program, Performance Marketing, Influence, Viral Growth | 16 |
| Email & Automation | 📧 | Tool, Newsletter, CRM, Email Capture, Email List, Subscriber, Nurture Sequence, Automation, Workflow, Email Funnel, Marketing Stack, Launch Sequence, Marketing OS, AI Automation, Performance Report, Automated Webinar | 16 |
| Sales & Conversion | 💰 | Sales Page, Sales Copy, Tripwire, Sales Funnel, Inbound Sales, Webinar Funnel, High-Ticket Offer, Conversion, Checkout Page, Discovery Call, Automated Sales, Sales Machine, Upsell | 13 |
| Products & Revenue | 📦 | Authority Site, Product Design, Digital Product, Partnership, Thought Leadership, Product Launch, Revenue Engine, SaaS Product, Growth System, Passive Income, Recurring Revenue, Market Leader, Financial Freedom, Digital Empire, AI Marketing OS | 15 |

---

## Game Flow

```
[Intro Screen]
      |
      v  (click "Start discovering")
[Game Board — 4 starter cards visible]
      |
      v  (tap card A → tap card B)
[Combination evaluated in tray]
      |
      ├── NO MATCH → tap to cancel, try again
      ├── FOUND → already discovered, tap to cancel
      └── NEW → tap to collect
            |
            v
      [Element added to grid with pop animation]
      [Toast notification]
      [Achievement check → popup if unlocked]
      [Card unlocked for future combinations]
            |
            v  (repeat until all 103 found)
[Congratulations Screen]
      |
      ├── "Back to overview →" → return to game board
      └── "↺ Start fresh" → reset to intro
```

**Secondary loops:**
- **Stats loop:** Check progress → view achievements → identify gaps → play more
- **Business loop:** Discover → read description → mark as owned → track coverage → unlock department badges
- **Hint loop:** Stuck → use hint → discover new element → new combinations available

---

## Branding & External Links

- **Game name:** BizAlchemy
- **Associated brand:** Serenichron
- **Glossary URL pattern:** `https://serenichron.com/glossary/[element-slug]`
- **Main glossary:** `https://serenichron.com/glossary`
- **CTA:** Book a free 30-min call via Calendly link in slide-in panel

---

## Debug / Developer Tools

- `window.unlockAll()` — Discover all 103 elements at once
- `showCongrats()` — Preview the congratulations screen
- All state is in global variables: `discovered`, `tried`, `owned`, `partial`, `unlockedAch`
- Console: `discovered.size` to check progress count

## Admin Dashboard

- **`admin.html`** — Password-protected analytics dashboard (not linked from the game)
- **`<meta name="robots" content="noindex,nofollow">`** — Hidden from search engines
- Fetches all sessions from the Supabase `game_saves` table
- **Summary cards:** total sessions, active sessions (24h/7d), avg discovery/business coverage, avg achievements, bounce rate, 100% completion count
- **Discovery distribution:** histogram showing sessions spread across 0–100%
- **Engagement insights:** most owned concepts, hardest to discover items, most/rarest achievements, tier funnel
- **Recent sessions:** last 10 active sessions with progress bars
- **All sessions:** searchable, filterable (24h/7d/30d), sortable, paginated table
- **Session detail:** click any row to expand per-tier element breakdown and achievement list
- Password gate uses SHA-256 hash comparison via Web Crypto API

---

## Change Log

### Changes Applied

**1. Analytics recipe updated**
- Changed from `Website + Tool` → `Tool + CRM`
- Tool and CRM combined now produce Analytics — your tools paired with relationship data reveal what's working

**2. Clarified "Nurture Sequence" vs "Email Funnel" descriptions (Option C)**
- Both items kept; descriptions rewritten to make the distinction clear
- **Nurture Sequence** (Tier 2): Trust-building, value-focused email series — no selling, just relationship building on autopilot
- **Email Funnel** (Tier 3): Goal-oriented conversion pipeline with sales triggers, deadlines, and CTAs — the engine that turns subscribers into buyers

**3. Clarified "Email Capture" vs "Opt-in Page" descriptions**
- **Email Capture** (Tier 2): The backend system — form, validation, integration that populates CRM/email software with subscriber data
- **Opt-in Page** (Tier 3): The frontend page — what visitors actually see, designed to convince them to subscribe

**4. Removed rare card animation (border shimmer)**
- Removed the rotating conic-gradient border shimmer effect that was applied to Tier 4+ cards
- Removed CSS classes: `rarity-high`, `rarity-ring`, `rarity-fill`, and `@keyframes borderShimmer`
- Removed JavaScript logic that injected rarity HTML into card elements
- All cards now render uniformly regardless of tier

**5. Balanced department badge achievement requirements**
- Previously, advanced department achievements ranged from 2–12 required items — now standardized to 3–6
- **Nurture Expert** (Email): Reduced from 8 → 5 items (Newsletter, Email List, Nurture Sequence, Email Funnel, Lead Generation)
- **Sales Machine** (Sales): Reduced from 12 → 6 items (Offer, Sales Page, Sales Funnel, Upsell, High-Ticket Offer, Automated Sales)
- **Brand Empire** (Brand): Reduced from 10 → 6 items (Value Proposition, Brand Voice, Brand Identity, Brand Guide, Design System, Premium Brand)
- **Product Creator** (Products): Increased from 2 → 3 required items
- **Revenue Stream** (Revenue): Increased from 2 → 3 items (added Passive Income)
- **Financially Free** (Revenue): Increased from 3 → 4 items (added Revenue Engine)

**6. Documentation updated (March 2026)**
- Corrected element count to 103 and recipe count to 117 throughout
- Updated all achievement descriptions to match new balanced requirements
- Added changelog entries for recent changes

**7. Comprehensive documentation overhaul (March 2026)**
- Added missing features: Hamburger menu (section 16), Cloud sync (section 18), Offline mode (section 19), Admin dashboard
- Updated Card Grid to reflect department-based organization (not tier-based)
- Updated Ownership Tracking to document 3-state system (Not yet / Partially / Yes)
- Updated PWA service worker cache version from v7 → v11; added manual install button
- Updated Tier 6 Endgame color palette from lime green → gold
- Fixed Digital Product recipe from `Editorial Plan + Offer` → `Workflow + Offer`
- Fixed AI Content System recipe in AI theme track from `AI Writing + Content Machine` → `AI Automation + Content Machine`
- Added `ba_partial`, `ba_session`, `ba_last_sync` to persistence keys
- Added `partial`, `sessionId`, `syncStatus`, `lastSyncTime`, `activeDept` to state variables
- Added Supabase-related functions, menu functions, and offline handlers to key functions list
- Added `DEPARTMENTS`, `DEPT_PAL`, `ITEM_DEPT`, `TIER_NAMES` to data structures
- Added Supabase to external dependencies
- Rewrote Business Concept Departments to match actual DEPARTMENTS array with exact item lists and counts
- Added Admin Dashboard documentation section

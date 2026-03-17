# BizAlchemy — Game Documentation

## Overview

**BizAlchemy** is a single-page browser-based crafting/combination game inspired by "Little Alchemy" but themed entirely around **digital marketing and business concepts**. Players start with four basic elements and combine them to discover increasingly advanced marketing strategies, tools, and business outcomes — ultimately building a "Digital Empire."

The game is educational: every element maps to a real digital marketing concept with a detailed description, and each card links to the Serenichron glossary for deeper learning. Players can also mark elements as "owned" to track which concepts they've actually implemented in their business.

**Tech stack:** Pure HTML/CSS/JavaScript — single self-contained HTML file. Only external dependency is Twemoji for cross-platform emoji rendering.

---

## Game Concept

- **Genre:** Crafting / Combination puzzle (similar to Little Alchemy, Doodle God)
- **Theme:** Digital marketing & online business building
- **Goal:** Discover all 102 elements across 7 tiers by combining pairs of elements
- **Secondary goal:** Mark discovered elements as "owned" to track real business coverage
- **Educational purpose:** Each element represents a real digital marketing concept with descriptions explaining what it is and why it matters
- **Win condition:** Discover all 102 elements to unlock the "Digital Empire achieved" congratulations screen

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

The game organizes all 102 elements into 7 tiers, each with a unique color palette:

| Tier | Name                | Color   | Elements | Description |
|------|---------------------|---------|----------|-------------|
| 0    | Raw Ingredients     | Gold    | 4        | Starting elements |
| 1    | Core Assets         | Blue    | 8        | First combinations from base elements |
| 2    | Digital Foundations  | Green   | 22       | Building blocks of digital marketing |
| 3    | Marketing Channels  | Orange  | 24       | Active marketing tools and channels |
| 4    | Growth Strategy     | Purple  | 23       | Scaling and optimization systems |
| 5    | Advanced Systems    | Pink    | 13       | Automated and advanced business systems |
| 6    | Endgame             | Lime    | 8        | Ultimate business outcomes |

**Total: 102 elements, 117 recipes (some elements have multiple recipes)**

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
| Persona | 🪞 | Niche + CRM _or_ Audience + Niche |
| Offer | 💎 | Niche + Template |
| Blog | 📰 | Article + Website |
| Content Strategy | 🗺️ | Article + Newsletter |
| Content Calendar | 🗓️ | Article + Template |
| Copywriting | ✏️ | Article + CRM |
| Email Capture | 🎣 | Website + Newsletter |
| Analytics | 📊 | Website + CRM |
| Wireframe | 📐 | Website + Template |
| Email List | 📬 | Newsletter + CRM |
| Nurture Sequence | 💌 | Newsletter + Template |
| Automation | 🤖 | CRM + Template |
| Web Design | 🌈 | Idea + Website |
| Headline | 🏷️ | Idea + Niche |
| Brand Guide | 🎨 | Niche + Web Design |
| Subscriber | 🔔 | Audience + Newsletter |
| Script | 🎬 | Idea + Template |
| Hosting | ☁️ | Tool + Website |
| Workflow | ⚙️ | Tool + Template |

### Tier 3 — Marketing Channels (24)
| Element | Emoji | Recipe |
|---------|-------|--------|
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
| Social Proof | 🌟 | Subscriber + Offer |
| Tripwire | 🪝 | Lead Magnet + Offer |
| A/B Test | 🧪 | Analytics + Landing Page |
| AI Writing | 🪄 | Automation + Copywriting |

### Tier 4 — Growth Strategy (23)
| Element | Emoji | Recipe(s) |
|---------|-------|-----------|
| Sales Funnel | 💸 | Sales Copy + Email Funnel |
| Launch Sequence | 🏁 | Sales Page + Email Funnel |
| Inbound Sales | 🤝 | Organic Traffic + Sales Page _or_ Lead Generation + Sales Page |
| Webinar Funnel | 🎞️ | Webinar + Email Funnel |
| High-Ticket Offer | 👑 | Sales Page + Social Proof |
| Authority Site | 🏆 | Rank Tracker + Organic Traffic |
| Product Design | 🎁 | Prototype + Brand Identity |
| Marketing OS | 💻 | Opt-in Page + Marketing Stack |
| Conversion | ✅ | Email Funnel + Sales Page |
| Social Brand | 📲 | Social Media + Brand Identity |
| Content Machine | 🏭 | Editorial Plan + Social Media |
| Performance Report | 📑 | Dashboard + Marketing Stack |
| Ad Campaign | 📢 | Ad Copy + Landing Page |
| Video Channel | 📺 | Video + Subscriber |
| Checkout Page | 💳 | Sales Page + Automation |
| Retargeting | 🔁 | Ad Campaign + Analytics |
| AI Automation | 🧩 | Marketing Stack + AI Writing |
| Discovery Call | 📞 | Outreach + Lead Generation |
| Online Course | 🎓 | Video + Offer |
| Referral Program | 🔗 | Lead Generation + Social Proof |
| Digital Product | 📦 | Editorial Plan + Offer |
| Partnership | 🤲 | Outreach + Social Proof |
| Portfolio | 🗂️ | Social Proof + Brand Identity |

### Tier 5 — Advanced Systems (13)
| Element | Emoji | Recipe |
|---------|-------|--------|
| Automated Sales | 🦾 | Sales Funnel + Marketing OS |
| Thought Leadership | 🧠 | Authority Site + Content Machine |
| Product Launch | 🚀 | Online Course + Launch Sequence _or_ Product Design + Launch Sequence |
| Automated Webinar | 📽️ | Webinar Funnel + Marketing OS |
| Revenue Engine | 💹 | Inbound Sales + Conversion _or_ Digital Product + Sales Funnel |
| Premium Brand | 🏅 | High-Ticket Offer + Authority Site |
| Influence | 🌠 | Video Channel + Social Brand |
| Growth System | 🌊 | Performance Report + Revenue Engine _or_ Referral Program + Content Machine |
| Sales Machine | ⚡ | Launch Sequence + Marketing OS |
| SaaS Product | 🔌 | Product Design + Automation |
| Performance Marketing | 🏹 | Retargeting + Conversion |
| AI Content System | 🧬 | AI Writing + Content Machine |
| Upsell | ⬆️ | Checkout Page + Offer |

### Tier 6 — Endgame (8)
| Element | Emoji | Recipe |
|---------|-------|--------|
| Passive Income | 💤 | Sales Machine + Revenue Engine |
| Recurring Revenue | ♾️ | SaaS Product + Automated Sales |
| Viral Growth | 🦠 | Growth System + Influence |
| Personal Brand | 🦋 | Thought Leadership + Influence |
| Market Leader | 🥇 | Portfolio + Premium Brand |
| Financial Freedom | 🏖️ | Passive Income + Recurring Revenue _or_ Upsell + Revenue Engine |
| Digital Empire | 🌎 | Market Leader + Viral Growth _or_ Product Launch + Revenue Engine |
| AI Marketing OS | 🌌 | AI Content System + Marketing OS |

---

## Features

### 1. Intro Screen
- Displays on first load and after reset
- Shows the game logo (⚗️), title, and tagline
- Four-step tutorial explaining how to play
- Card indicator legend (★ pending, ✓ done)
- "Start discovering →" button to begin

### 2. Card Grid
- Scrollable area displaying all elements organized by tier
- Each tier has a header showing tier name, color dot, and progress (e.g., "2 / 8")
- **Discovered elements** show as colored cards with emoji and name
- **Undiscovered elements** show as locked placeholders ("?" with dashed border)
- Cards are arranged in a 3-column grid per tier

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
  - Full multi-paragraph description
  - Recipe(s) that create this element
  - "Read more" link to Serenichron glossary
  - **"I already have this" checkbox** — marks the element as owned
  - CTA link to book a consultation call
- Closeable via ✕ button or tapping the overlay

### 11. Ownership Tracking
- Players can mark any element as "owned" in the detail panel
- Owned status persists in localStorage
- Owned elements highlighted in the statistics screen
- Ownership tracked separately from discovery (you can discover without owning)
- Drives the "Business Coverage" achievement category

### 12. Hint System
- "💡 Hint" button in the header
- Shows a popup suggesting a valid undiscovered combination (prioritizes lowest tier)
- Format: `[emoji] Name + [emoji] Name = ???`
- **15-second cooldown** after each use (countdown displayed on the button)
- Popup auto-dismisses after 4 seconds or can be manually closed
- If all elements are found, shows "You found everything!" message

### 13. Progress Counter
- Displayed in the header as a pill badge: `X / 102 found`
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
| 👑 Grand Master | Discover all 102 elements |
| 🧪 Experimenter | Try 30 recipes |
| ⚡ Mad Scientist | Try 75 recipes |
| 🏆 Completionist | Try all 117 recipes |

**Business Coverage (4):**
| Achievement | Condition |
|-------------|-----------|
| 🚶 Getting Started | Mark 5 items as owned |
| 🧱 Foundation | Mark 15 items as owned |
| ⛰️ Halfway There | Mark 50 items as owned |
| 🦄 Full Stack Business | Mark all 102 items as owned |

**Department Badges (16):**
| Achievement | Department | Condition |
|-------------|-----------|-----------|
| ✍️ Content Creator | Content | Own Article, Blog, Content Strategy |
| 🏭 Publishing Machine | Content | Own Editorial Plan, Content Calendar, Content Machine, AI Content System |
| 📧 Email Marketer | Email | Own Newsletter, Email List, Email Funnel |
| 💌 Nurture Expert | Email | Own all 8 email items |
| 📣 Marketer | Marketing | Own Social Media, SEO, Ad Copy |
| 🚀 Marketing Pro | Marketing | Own Marketing Stack, Marketing OS, Performance Marketing, AI Marketing OS |
| 💰 Closer | Sales | Own Offer, Sales Page, Sales Funnel |
| ⚡ Sales Machine | Sales | Own all 12 sales items |
| 🎨 Brand Builder | Brand | Own Value Proposition, Brand Voice, Brand Identity |
| 👑 Brand Empire | Brand | Own all 10 brand items |
| 🔧 Tech Ready | Tech | Own Website, CRM, Analytics, Automation |
| 🤖 Automation Expert | Tech | Own Automation, AI Automation, Marketing OS, Workflow |
| 🎁 Product Creator | Products | Own any 2 product items |
| 📦 Product Empire | Products | Own all 5 product items |
| 💹 Revenue Stream | Revenue | Own Revenue Engine and Recurring Revenue |
| 🏖️ Financially Free | Revenue | Own Passive Income, Recurring Revenue, Financial Freedom |

**Achievement popup:**
- Animated popup with overlay when an achievement unlocks
- Displays icon, "Achievement unlocked" label, name, and description
- "Nice!" button to dismiss
- Multiple achievements queue and show one at a time
- Tapping the overlay also dismisses

### 16. Reset Game
- "↺ Reset" button in the header
- Resets all state: discovered elements, tried combinations, owned items, and achievements
- Clears all localStorage data
- Returns to the intro screen

### 17. Win / Congratulations Screen
- Triggers automatically when all 102 elements are discovered (600ms delay)
- Animated trophy emoji burst
- Title: "Digital Empire achieved."
- Stats display: elements discovered + combinations tried
- Message linking to the Serenichron glossary
- Confetti-style emoji row with fade-in animation
- Two buttons: "Play again" (resets) and "Visit glossary" (external link)
- Debug: `showCongrats()` can be called from the browser console to preview

### 18. Glossary Integration
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
| 6 | #EAF3DE | #639922 | #27500A | Lime green |

---

## Mobile-First Design
- Max width: 390px (iPhone-sized)
- Fixed height: 720px
- Touch-optimized: tap to select, long-press for detail panel
- Scrollable grid area with padding for the fixed tray
- Rounded corners (20px game container, 13px cards, 14px slots)
- Cross-platform emoji via Twemoji CDN

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

The game contains **117 recipes** producing 98 non-starting elements (some elements have multiple recipes).

### Recipe Structure
- **Tier 0 → Tier 1:** All 6 combinations of the 4 starters (4 choose 2) + 2 cross-tier recipes
- **Tier 1 → Tier 2:** 16 recipes from Tier 1 pairs + cross-tier
- **Tier 2 → Tier 3:** 24 recipes
- **Tier 3 → Tier 4:** 23 recipes
- **Tier 4 → Tier 5:** 17 recipes (some elements have 2 recipes)
- **Tier 5 → Tier 6:** 11 recipes (some elements have 2 recipes)

### Multi-Recipe Elements
Several elements can be created via multiple recipes:
- **Persona:** Niche + CRM _or_ Audience + Niche
- **Inbound Sales:** Organic Traffic + Sales Page _or_ Lead Generation + Sales Page
- **Product Launch:** Online Course + Launch Sequence _or_ Product Design + Launch Sequence
- **Revenue Engine:** Inbound Sales + Conversion _or_ Digital Product + Sales Funnel
- **Growth System:** Performance Report + Revenue Engine _or_ Referral Program + Content Machine
- **Financial Freedom:** Passive Income + Recurring Revenue _or_ Upsell + Revenue Engine
- **Digital Empire:** Market Leader + Viral Growth _or_ Product Launch + Revenue Engine

---

## Persistence

All game state is saved to `localStorage` under these keys:
| Key | Type | Contents |
|-----|------|----------|
| `ba_discovered` | JSON array | Names of all discovered elements |
| `ba_tried` | JSON array | Sorted pair keys of all attempted recipes |
| `ba_owned` | JSON array | Names of elements marked as "owned" |
| `ba_achievements` | JSON array | IDs of unlocked achievements |

Progress auto-loads on page refresh. If saved progress is found with at least the starter elements, the intro screen is skipped.

---

## Technical Architecture

### Data Structures
- `ALL` — Object mapping element names to `{emoji, tier}`
- `R` — Object mapping sorted pair keys to result names (recipe lookup)
- `REV` — Object mapping result names to arrays of `[ingredientA, ingredientB]` (reverse lookup)
- `INFO` — Object mapping element names to `{description}` for all 102 elements
- `PAL` — Array of 7 color palette objects
- `ACHIEVEMENTS` — Array of 28 achievement objects with `{id, name, desc, icon, cat, check()}`

### State Variables
- `discovered` — `Set` of discovered element names
- `tried` — `Set` of attempted combination keys (sorted pair joined by `||`)
- `owned` — `Set` of elements marked as owned
- `unlockedAch` — `Set` of unlocked achievement IDs
- `slotA`, `slotB` — Currently selected element names (or null)
- `resultName`, `resultState` — Current result in the tray
- `domCards` — `Map` from element name to its DOM node

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
| `saveProgress()` | Saves all state to localStorage |
| `loadProgress()` | Loads state from localStorage |

### External Dependencies
- **Twemoji** (v15.1.0 via CDN) — Cross-platform emoji rendering
- No frameworks (React, Vue, etc.)
- No CSS preprocessors
- No build tools
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

---

## AI / Automation Theme Track

The game includes a dedicated AI/automation discovery path:
1. **AI Writing** (Tier 3) — Automation + Copywriting
2. **AI Automation** (Tier 4) — Marketing Stack + AI Writing
3. **AI Content System** (Tier 5) — AI Writing + Content Machine
4. **AI Marketing OS** (Tier 6) — AI Content System + Marketing OS

This represents the progression from basic AI-assisted copywriting to a fully autonomous AI-driven marketing operation.

---

## Business Concept Departments

The 102 elements cover these core business domains:

| Department | Key Elements | Count |
|-----------|-------------|-------|
| Content & Publishing | Article, Blog, Content Strategy, Content Calendar, Editorial Plan, Content Machine, AI Content System, Podcast, Video, Video Channel | ~10 |
| Email Marketing | Newsletter, Email Capture, Email List, Subscriber, Nurture Sequence, Email Funnel, Lead Generation, Lead Magnet | ~8 |
| Marketing & Ads | Social Media, SEO, Keyword Research, Rank Tracker, Organic Traffic, Ad Copy, Ad Campaign, Analytics, Dashboard, A/B Test, Retargeting, Marketing Stack, Performance Marketing | ~13 |
| Sales | Offer, Sales Page, Sales Copy, Sales Funnel, Checkout Page, Discovery Call, Tripwire, Inbound Sales, High-Ticket Offer, Upsell | ~10 |
| Branding | Value Proposition, Niche, Persona, Brand Guide, Brand Voice, Brand Identity, Design System, Headline, Social Brand, Premium Brand, Personal Brand, Portfolio | ~12 |
| Products | Digital Product, Online Course, SaaS Product, Product Design, Product Launch | 5 |
| Revenue & Growth | Revenue Engine, Automated Sales, Sales Machine, Passive Income, Recurring Revenue, Growth System, Market Leader, Financial Freedom, Digital Empire | ~9 |
| AI & Automation | AI Writing, AI Automation, AI Content System, AI Marketing OS | 4 |

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
            v  (repeat until all 102 found)
[Congratulations Screen]
      |
      ├── "Play again" → reset to intro
      └── "Visit glossary" → serenichron.com/glossary
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

- `window.unlockAll()` — Discover all 102 elements at once
- `showCongrats()` — Preview the congratulations screen
- All state is in global variables: `discovered`, `tried`, `owned`, `unlockedAch`
- Console: `discovered.size` to check progress count

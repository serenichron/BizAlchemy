# BizAlchemy — Game Documentation

## Overview

**BizAlchemy** is a single-page browser-based crafting/combination game inspired by "Little Alchemy" but themed entirely around **digital marketing and business concepts**. Players start with four basic elements and combine them to discover increasingly advanced marketing strategies, tools, and business outcomes — ultimately building a "Digital Empire."

The game is educational: every element maps to a real digital marketing concept, and each card links to the Serenichron glossary for deeper learning.

**Tech stack:** Pure HTML/CSS/JavaScript — no frameworks, no dependencies, no build step. The entire game is a single self-contained HTML file.

---

## Game Concept

- **Genre:** Crafting / Combination puzzle (similar to Little Alchemy, Doodle God)
- **Theme:** Digital marketing & online business building
- **Goal:** Discover all 96 elements across 7 tiers by combining pairs of elements
- **Educational purpose:** Each element represents a real digital marketing concept with descriptions explaining what it is and why it matters

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

The game organizes all 96 elements into 7 tiers, each with a unique color palette:

| Tier | Name                | Color   | Elements | Description |
|------|---------------------|---------|----------|-------------|
| 0    | Raw Ingredients     | Gold    | 4        | Starting elements |
| 1    | Core Assets         | Blue    | 6        | First combinations from base elements |
| 2    | Digital Foundations  | Green   | 22       | Building blocks of digital marketing |
| 3    | Marketing Channels  | Orange  | 23       | Active marketing tools and channels |
| 4    | Growth Strategy     | Purple  | 17       | Scaling and optimization systems |
| 5    | Advanced Systems    | Pink    | 12       | Automated and advanced business systems |
| 6    | Endgame             | Lime    | 8        | Ultimate business outcomes |

**Total: 96 elements, 80 unique recipes**

---

## All Elements by Tier

### Tier 0 — Raw Ingredients (4)
| Element | Emoji |
|---------|-------|
| Idea | 💡 |
| Audience | 👥 |
| Content | 📝 |
| Tool | 🔧 |

### Tier 1 — Core Assets (6)
| Element | Emoji | Recipe |
|---------|-------|--------|
| Niche | 🎯 | Idea + Audience |
| Article | ✍️ | Idea + Content |
| Website | 🌐 | Idea + Tool |
| Newsletter | 📧 | Audience + Content |
| CRM | 🗃️ | Audience + Tool |
| Template | 📋 | Content + Tool |

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
| Drip Campaign | 💧 | Newsletter + Template |
| Automation | 🤖 | CRM + Template |
| Web Design | 🌈 | Idea + Website |
| Headline | 🏷️ | Idea + Niche |
| Brand Guide | 🎨 | Niche + Web Design |
| Subscriber | 🔔 | Audience + Newsletter |
| Script | 🎬 | Idea + Template |
| Hosting | ☁️ | Tool + Website |
| Workflow | ⚙️ | Tool + Template |

### Tier 3 — Marketing Channels (23)
| Element | Emoji | Recipe |
|---------|-------|--------|
| SEO | 🔍 | Keyword Research + Blog |
| Rank Tracker | 📈 | Keyword Research + Analytics |
| Squeeze Page | 🤏 | Landing Page + Lead Magnet |
| Sales Page | 💰 | Landing Page + Offer |
| Lead Generation | 🔮 | Lead Magnet + Email List |
| Brand Voice | 🗣️ | Persona + Copywriting |
| Design System | 🏗️ | Brand Guide + Web Design |
| Prototype | 🔬 | Wireframe + Web Design |
| Editorial Plan | 📅 | Content Strategy + Content Calendar |
| Email Funnel | 📨 | Email List + Drip Campaign |
| Marketing Stack | 🛠️ | Automation + Workflow |
| Webinar | 🎥 | Script + Subscriber |
| Video | 📹 | Script + Hosting |
| Ad Copy | 📣 | Headline + Copywriting |
| Dashboard | 📉 | Analytics + Workflow |
| Brand Identity | ⭐ | Design System + Brand Voice |
| Opt-in Page | 📮 | Email Capture + Lead Magnet |
| Social Media | 📱 | Content Calendar + Subscriber |
| Sales Copy | 💬 | Copywriting + Offer |
| Nurture Sequence | 💌 | Subscriber + Email Funnel |
| Organic Traffic | 🌱 | SEO + Content Strategy |
| Optin Funnel | 🔽 | Opt-in Page + Email List |
| AI Writing | ✨ | Automation + Copywriting |

### Tier 4 — Growth Strategy (17)
| Element | Emoji | Recipe(s) |
|---------|-------|-----------|
| Sales Funnel | 💸 | Squeeze Page + Email Funnel |
| Launch Sequence | 🏁 | Sales Page + Email Funnel |
| Inbound Sales | 🤝 | Organic Traffic + Sales Page _or_ Lead Generation + Sales Page |
| Webinar Funnel | 🎞️ | Webinar + Email Funnel |
| High-Ticket Offer | 👑 | Offer + Authority Site |
| Authority Site | 🏆 | Rank Tracker + Organic Traffic |
| Product Design | 🎁 | Prototype + Brand Identity |
| Marketing OS | 💻 | Optin Funnel + Marketing Stack |
| Conversion | ✅ | Nurture Sequence + Offer |
| Social Brand | 🌟 | Social Media + Brand Identity |
| Content Machine | 🏭 | Editorial Plan + Social Media |
| Performance Report | 📑 | Dashboard + Marketing Stack |
| Ad Campaign | 📢 | Ad Copy + Audience |
| Video Channel | 📺 | Video + Subscriber |
| Checkout Page | 💳 | Sales Page + Automation |
| Retargeting | 🔁 | Ad Campaign + Analytics |
| AI Automation | 🦿 | Marketing Stack + AI Writing |

### Tier 5 — Advanced Systems (12)
| Element | Emoji | Recipe |
|---------|-------|--------|
| Automated Sales | 🦾 | Sales Funnel + Marketing OS |
| Thought Leadership | 🧠 | Authority Site + Content Machine |
| Product Launch | 🚀 | Product Design + Launch Sequence |
| Automated Webinar | 🖥️ | Webinar Funnel + Marketing OS |
| Revenue Engine | 💹 | Inbound Sales + Conversion |
| Premium Brand | 🏅 | High-Ticket Offer + Authority Site |
| Influence | 🌠 | Video Channel + Social Brand |
| Growth System | 🌊 | Performance Report + Revenue Engine |
| Sales Machine | ⚡ | Launch Sequence + Marketing OS |
| SaaS Product | 💾 | Product Design + Automation |
| Performance Marketing | 🏹 | Retargeting + Conversion |
| AI Content System | 🧬 | AI Writing + Content Machine |

### Tier 6 — Endgame (8)
| Element | Emoji | Recipe |
|---------|-------|--------|
| Passive Income | 💤 | Sales Machine + Revenue Engine |
| Recurring Revenue | ♾️ | SaaS Product + Automated Sales |
| Viral Growth | 🦠 | Growth System + Influence |
| Personal Brand | 🦋 | Thought Leadership + Influence |
| Market Leader | 🥇 | Premium Brand + Performance Marketing |
| Financial Freedom | 🏖️ | Passive Income + Recurring Revenue |
| Digital Empire | 🌎 | Market Leader + Viral Growth |
| AI Marketing OS | 🌌 | AI Content System + Marketing OS |

---

## Features

### 1. Intro Screen
- Displays on first load and after reset
- Shows the game logo, title, and tagline
- Four-step tutorial explaining how to play
- Card indicator legend (★ pending, ✓ done, ≠ no match)
- "Start discovering" button to begin

### 2. Card Grid
- Scrollable area displaying all elements organized by tier
- Each tier has a header showing tier name, color dot, and progress (e.g., "2 / 6")
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

### 5. Combination Tray
- Fixed at the bottom of the game area
- Layout: `[Slot A] + [Slot B] = [Result]`
- Each slot can be cleared individually via an "✕" button
- Color-coded to match the tier of the element in each slot

### 6. Result States
- **NEW** — Green badge, shows emoji + name, "tap to add" prompt
- **FOUND** — Blue badge, element already discovered, "tap to cancel" prompt
- **NO MATCH** — Red badge, shows "✗", "tap to cancel" prompt

### 7. Discovery Animation
- Newly discovered elements appear with a "pop" animation (scale from 0 with rotation)
- The grid auto-scrolls to the newly discovered card
- A green toast notification appears: "Discovered: [emoji] [name]!"
- Toast auto-dismisses after 2.4 seconds

### 8. Tooltips
- **Desktop:** Hover over any card to see a tooltip
- **Mobile:** Long-press (600ms) a card to trigger the tooltip
- Tooltip contents:
  - Element name with emoji
  - Recipe(s) that create this element (if any)
  - Two-line description explaining the concept
  - "Read more →" link to the Serenichron glossary page for that element
- Tooltip intelligently positions itself above or below the card, staying within the game bounds
- Tooltip stays visible while hovered (mouseenter/mouseleave handling)

### 9. Hint System
- "Hint" button in the header
- Shows a popup suggesting a valid undiscovered combination (prioritizes lowest tier)
- Format: `[emoji] Name + [emoji] Name = ???`
- **15-second cooldown** after each use (countdown displayed on the button)
- Popup auto-dismisses after 4 seconds or can be manually closed
- If all elements are found, shows "You found everything!" message

### 10. Progress Counter
- Displayed in the header as a pill badge: `X / 96 found`
- Updates in real-time as elements are discovered

### 11. Reset Game
- "Reset" button in the header
- Resets all state: discovered elements back to 4 starters, clears tried combinations
- Clears all slots, timers, and hint cooldowns
- Returns to the intro screen

### 12. Win / Congratulations Screen
- Triggers automatically when all 96 elements are discovered (600ms delay)
- Animated trophy emoji burst
- Title: "Digital Empire achieved."
- Stats display: elements discovered + combinations tried
- Message linking to the Serenichron glossary
- Confetti-style emoji row with fade-in animation
- Two buttons: "Play again" (resets) and "Visit glossary" (external link)
- Debug: `showCongrats()` can be called from the browser console to preview

### 13. Glossary Integration
- Every element tooltip includes a "Read more →" link
- Links follow the pattern: `https://serenichron.com/glossary/[slug]`
- Slugs are auto-generated from element names (lowercase, hyphens, alphanumeric only)
- Congrats screen also links to the glossary

### 14. Color Palette System
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

### 15. Mobile-First Design
- Max width: 390px (iPhone-sized)
- Fixed height: 720px
- Touch-optimized: tap to select, long-press for tooltips
- Scrollable grid area with padding for the fixed tray
- Rounded corners (20px game container, 13px cards, 14px slots)

### 16. Animations & Transitions
- **Card selection:** Scale to 1.06 with border color transition
- **Card tap:** Scale to 0.92 on `:active`
- **Discovery pop:** Keyframe animation scaling from 0 with rotation
- **Congrats burst:** Trophy scales in with rotation
- **Confetti row:** Fade-in with upward slide (0.4s delay)
- **Tooltip:** Opacity fade (0.12s)
- **Slot border:** Color transition (0.15s)

---

## Recipe Tree Summary

The game contains **80 unique recipes** producing 92 non-starting elements (some elements like Persona and Inbound Sales have 2 recipes each).

### Recipe Structure
- **Tier 0 → Tier 1:** All 6 combinations of the 4 starters (4 choose 2)
- **Tier 1 → Tier 2:** Combinations of Tier 1 pairs (15 recipes) + Tier 0 × Tier 1 cross-tier (7 recipes)
- **Tier 2 → Tier 3:** Combinations of Tier 2 pairs and cross-tier (23 recipes)
- **Tier 3 → Tier 4:** 17 recipes
- **Tier 4 → Tier 5:** 12 recipes
- **Tier 5 → Tier 6:** 8 recipes

### Multi-Recipe Elements
Two elements can be created via multiple recipes:
- **Persona:** Niche + CRM _or_ Audience + Niche
- **Inbound Sales:** Organic Traffic + Sales Page _or_ Lead Generation + Sales Page

---

## Technical Architecture

### State Management
All game state is held in JavaScript variables (no localStorage or external storage):
- `discovered` — `Set` of discovered element names
- `tried` — `Set` of attempted combination keys (sorted pair joined by `||`)
- `slotA`, `slotB` — Currently selected element names (or null)
- `resultName`, `resultState` — Current result in the tray
- `domCards` — `Map` from element name to its DOM node

### Data Structures
- `ALL` — Object mapping element names to `{emoji, tier}`
- `R` — Object mapping sorted pair keys to result names (recipe lookup)
- `REV` — Object mapping result names to arrays of `[ingredientA, ingredientB]` (reverse lookup for tooltips)
- `INFO` — Object mapping element names to `{description}` for tooltips
- `PAL` — Array of 7 color palette objects

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
| `showHint()` | Finds and displays a hint for the lowest-tier undiscovered element |
| `resetGame()` | Resets all state to initial |
| `checkWin()` | Checks if all elements are discovered; triggers congrats |
| `showCongrats()` | Displays the win screen with stats |

### No External Dependencies
- No frameworks (React, Vue, etc.)
- No CSS preprocessors
- No build tools
- No external fonts or CDN resources
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- All emojis are native system emoji

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
      [Card unlocked for future combinations]
            |
            v  (repeat until all 96 found)
[Congratulations Screen]
      |
      ├── "Play again" → reset to intro
      └── "Visit glossary" → serenichron.com/glossary
```

---

## AI / Automation Theme Track

The game includes a dedicated AI/automation discovery path:
1. **AI Writing** (Tier 3) — Automation + Copywriting
2. **AI Automation** (Tier 4) — Marketing Stack + AI Writing
3. **AI Content System** (Tier 5) — AI Writing + Content Machine
4. **AI Marketing OS** (Tier 6) — AI Content System + Marketing OS

This represents the progression from basic AI-assisted copywriting to a fully autonomous AI-driven marketing operation.

---

## Branding & External Links

- **Game name:** BizAlchemy
- **Associated brand:** Serenichron
- **Glossary URL pattern:** `https://serenichron.com/glossary/[element-slug]`
- **Main glossary:** `https://serenichron.com/glossary`

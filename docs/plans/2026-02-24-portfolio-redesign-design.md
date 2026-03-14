# Portfolio Redesign — The Archmaester's Study

## Overview

Complete redesign of achilleasleivadiotis.com as an interactive 2.5D Byzantine study room with a page-turning book portfolio. The user lands in an atmospheric scene, interacts with objects and the character, and opens a book containing all portfolio content.

## Design Decisions

- **Theme:** Byzantine archmaester/scholar study room
- **Art style:** AI-generated painterly, Byzantine aesthetic, warm candlelight
- **Rendering:** 2.5D parallax (3 depth layers, mouse-driven)
- **Site structure:** Single page — book IS the entire site, scene is the wrapper
- **Book sections:** Cover, Chronicle (timeline), Great Works (projects), Arcane Arts (skills), Contact

## Architecture

### Scene Layer (Landing)

Three parallax layers that shift with mouse movement:

| Layer | Content | Parallax Factor |
|---|---|---|
| Back | Stone wall, arched window, bookshelves, Byzantine mosaics | 2-3% |
| Mid | Wooden desk, THE BOOK (closed), candles, scrolls, astrolabe | 5-7% |
| Front | Archmaester character, foreground objects | 10-12% |

### Interactive Hotspots

| Object | Action | Result |
|---|---|---|
| Character (You) | Click | Dialog: "Who goes there?" with options (Recruiter / Scholar / Browsing) |
| The Book | Click | Book opens — transitions to full-screen book UI |
| Scroll | Click/Hover | "Download CV" — links to resume PDF |
| Astrolabe/Globe | Click/Hover | "Explore Skills" — tooltip or opens Arcane Arts page directly |
| Candles | Passive | CSS flicker animation, ambient atmosphere |

### Dialog System

Simple state machine:
- IDLE → character clicked → GREETING ("Who goes there?")
- GREETING → option selected → RESPONSE (personalized quip per choice)
- RESPONSE → auto-dismiss after 3s or click → IDLE

### Book Component

Improved version of current ByzantineBook. Changes:
- Better page-turn animation (CSS perspective transform, not rotateY hack)
- Scrollable content within pages (for projects/timeline)
- Close button to return to scene
- Page indicator dots
- Keyboard navigation (arrow keys)
- Mobile: swipe gesture support

### Book Pages

| # | Page | Title | Content |
|---|---|---|---|
| 0 | Cover | "Achilleas Leivadiotis — Chronicles of the Archmaester" | Name, ornate border, cross icon, A.D. MMXXVI |
| 1 | Chronicle | "The Scholar's Chronicle" | Interactive timeline: 4 experience entries + 3 education entries, medieval chronicle style |
| 2-3 | Great Works | "The Great Works" | All projects from PDR (excluding removed ones). Cards with title, description, tech badges, links. Scrollable. |
| 4 | Arcane Arts | "Arcane Arts & Mastery" | Skills by category (4 categories), themed as schools of knowledge. Tech badges. |
| 5 | Contact | "Send a Missive" | Contact links (email, GitHub, LinkedIn) + contact form |

### Art Assets Strategy

1. Build with CSS placeholder art (gradients, SVG, atmospheric overlays)
2. Placeholder character silhouette
3. All assets go in `/public/assets/scene/` — back.png, mid.png, front.png, character.png
4. User generates real art with ComfyUI/Midjourney later and drops in

### Image Specs for AI Generation (future)

- back.png: 1920x1080, stone walls, arched window, bookshelves, warm light
- mid.png: 1920x1080, transparent bg, desk with book + candles + scrolls
- front.png: 1920x1080, transparent bg, foreground objects
- character.png: ~400x600, transparent bg, Byzantine archmaester seated

## Tech Stack

- Next.js 15 (existing)
- React 18 (existing)
- TypeScript (existing)
- Tailwind CSS 4 (existing)
- Framer Motion (existing) — parallax, page turns, dialog animations
- Lucide React (existing) — icons
- No new dependencies needed

## File Structure (new/modified)

```
src/
├── app/
│   ├── page.tsx                    # Scene wrapper (REWRITE)
│   ├── layout.tsx                  # Update fonts, metadata (MODIFY)
│   └── globals.css                 # Update theme vars (MODIFY)
├── components/
│   ├── scene/
│   │   ├── ParallaxScene.tsx       # 2.5D parallax container (NEW)
│   │   ├── SceneHotspot.tsx        # Clickable hotspot component (NEW)
│   │   ├── CharacterDialog.tsx     # Dialog system (NEW)
│   │   └── SceneLayer.tsx          # Individual parallax layer (NEW)
│   ├── book/
│   │   ├── Book.tsx                # Main book component (NEW, replaces ByzantineBook)
│   │   ├── BookPage.tsx            # Single page wrapper (NEW)
│   │   ├── CoverPage.tsx           # Cover (REWRITE)
│   │   ├── ChroniclePage.tsx       # Timeline (NEW)
│   │   ├── GreatWorksPage.tsx      # Projects (NEW)
│   │   ├── ArcaneArtsPage.tsx      # Skills (NEW)
│   │   └── MissivePage.tsx         # Contact (NEW)
│   └── ui/
│       └── (existing components kept for /about, /projects, /contact fallback)
```

## Pages to Keep vs Remove

- **Keep:** /about, /projects, /contact as fallback routes (SEO, direct links)
- **Remove:** Old AltarBackground.tsx, old ByzantineBook.tsx, old Pages/ directory (after new components are done)
- **Keep:** /api/contact/route.ts (email functionality)

## Performance Considerations

- Parallax: CSS transforms only (GPU accelerated), no JS scroll handler
- Images: Next.js Image component with lazy loading
- Book: Only render current page + adjacent pages
- Animations: Framer Motion with `will-change` hints
- Mobile: Disable parallax on touch devices, use tap instead of hover

## Mobile Strategy

- Parallax: disabled (static layered scene, gyroscope tilt optional)
- Book: single page view with swipe navigation
- Dialog: tap character, bottom sheet style
- Hotspots: larger touch targets (min 48x48px)

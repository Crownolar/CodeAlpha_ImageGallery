# Cornerstone — Image Gallery

> An ARCHKODE Project · Foundation first.

A curated, dark-editorial image gallery built with vanilla HTML, CSS, and JavaScript. No frameworks. No shortcuts. Just clean, intentional front-end craft.

Built as part of the **CodeAlpha Frontend Development Internship**.

---

## Live Demo

[archkode-cornerstone.vercel.app](https://archkode-cornerstone.vercel.app)

---

## Features

- **Category filtering** — filter images by Lunar or Deep Space collections, with animated transitions between states
- **Flexbox layout** — responsive grid built entirely with flexbox, scaling from 4 columns down to 2 on mobile
- **Lightbox viewer** — full-screen image viewer with smooth open/close transitions and blur backdrop
- **Thumbnail filmstrip** — scrollable strip at the bottom of the lightbox for quick navigation
- **Keyboard navigation** — Arrow Left / Arrow Right to navigate, Escape to close
- **Touch/swipe support** — swipe left or right on mobile to navigate between images
- **Scroll-in animation** — images fade up on load with staggered delays
- **Hover overlay** — image title and category revealed on hover with a gradient overlay
- **Live image counter** — updates dynamically based on the active filter
- **Empty state** — graceful message when a filtered category has no results

---

## Folder Structure

```
CODEALPHA_IMAGEGALLERY/
├── assests/
│   ├── icon/
│   └── images/
│       ├── moon-image 1.jpg
│       ├── moon-image 2.jpg
│       ├── moon-image 3.jpg
│       ├── moon-image 4.jpg
│       ├── moon-image 5.jpg
│       ├── space-image 1.avif
│       ├── space-image 2.avif
│       ├── space-image 3.jpg
│       ├── space-image 4.jpg
│       ├── space-image 5.jpg
│       ├── space-image 6.jpg
│       └── space-image 7.jpg
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
└── README.md
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 — Flexbox, CSS Variables, Keyframe Animations |
| Logic | Vanilla JavaScript (ES6+) |
| Icons | Font Awesome 7 |
| Fonts | Playfair Display · DM Mono (Google Fonts) |

No libraries. No build tools. No frameworks.

---

## Design System

This project uses the **ARCHKODE** brand token system — a consistent set of CSS variables shared across all ARCHKODE projects:

```css
:root {
  --ak-arch:  #f0ece4;  /* primary text — cream */
  --ak-kode:  #c9a96e;  /* accent — gold        */
  --ak-bg:    #0a0a0a;  /* background — deep black */
  --ak-muted: #7a7570;  /* secondary text — warm grey */
}
```

Typography follows the same split: **Playfair Display** for display/titles (the craft), **DM Mono** for UI text (the code).

---

## Image Collections

| Category | Filter | Count |
|----------|--------|-------|
| Lunar | `lunar` | 5 images |
| Deep Space | `deep-space` | 7 images |
| All | `all` | 12 images |

---

## How It Works

**Gallery rendering** — `createImageGallery()` filters the `galleryImages` array against `currentFilter`, builds DOM elements dynamically, and simultaneously populates the lightbox thumbnail strip.

**Lightbox** — `openLightbox(ind)` sets the current index and adds the `.open` class. `updateLightbox()` handles image switching with a brief opacity/scale animation (220ms) to smooth the transition. The thumbnail strip auto-scrolls to keep the active thumb in view.

**Navigation** — `navigate(dir)` wraps the index using modulo arithmetic so navigation loops from the last image back to the first (and vice versa).

**Filtering** — each filter button updates `currentFilter` and calls `createImageGallery()`, which rebuilds the gallery and strip from scratch to ensure the lightbox index always maps correctly to visible items.

---

## Getting Started

No installation or build step required.

```bash
# Clone the repository
git clone https://github.com/your-username/codealpha-imagegallery.git

# Open in browser
open index.html
```

Or simply open `index.html` directly in any modern browser.

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` Arrow Right | Next image |
| `←` Arrow Left | Previous image |
| `Escape` | Close lightbox |

---

## Responsive Behaviour

| Breakpoint | Columns |
|------------|---------|
| > 900px | 4 columns |
| 600px – 900px | 3 columns |
| < 600px | 2 columns |

Navigation buttons are hidden on mobile — swipe gestures take over.

---

## Author

**Oriade Yusuf** · [ARCHKODE](https://archkode.dev)

Frontend Engineer · CodeAlpha Intern · Building with intention, not shortcuts.

---

*An ARCHKODE Project · Foundation first.*
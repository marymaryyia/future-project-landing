# FUTURE — Editorial Digital Architecture Landing Page

An original, art-directed editorial landing page crafted using pure semantic HTML5, CSS3, and Vanilla JavaScript with zero external frameworks or dependencies.

## ✦ Project Purpose

Most web templates have converged into identical dark neon aesthetics, glowing glassmorphic cards, and stock illustrations. **FUTURE** breaks away from conventional landing page formulas to showcase an avant-garde editorial visual identity inspired by print publications, architectural drawing specs, high-contrast typography, and raw spatial layout.

---

## ✦ Key Features

- **Original Editorial Visual Identity**: Warm off-white/ivory background canvas, near-black high-contrast typography, hairline grid borders, and a single International Vermilion accent color.
- **Asymmetric Hero Composition**: Oversized typographic headline (*Syne* + *Instrument Serif*), metadata tags, and an interactive CSS/SVG kinetic vector visual that reacts to mouse position.
- **Section 01 — About**: Philosophical manifesto break, editorial quote box, and animated statistical counters (`10+ Projects`, `24/7 Innovation`, `100% Focus`).
- **Section 02 — 3 Unique Feature Treatments**:
  - *Feature 01 (Modern Design)*: Hero card layout with typographic specification preview canvas.
  - *Feature 02 (Fast Performance)*: 2-column offset split with dynamic system benchmark graph indicator.
  - *Feature 03 (Fully Responsive)*: Full-width architectural banner with live viewport preview switcher (Desktop / Tablet / Mobile).
- **Section 03 — Contact & Form Validation**: Real-time Vanilla JavaScript input validation (email format, field lengths), accessible error state management, and animated submit response feedback.
- **System Clock & Accessible Controls**: Live UTC system clock in footer, accessible hamburger drawer navigation, scroll reveals via `IntersectionObserver`, keyboard focus indicators (`:focus-visible`), and `prefers-reduced-motion` compliance.

---

## ✦ Technologies Used

- **HTML5**: 100% Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<form>`).
- **CSS3**: Native CSS custom properties, CSS Grid, Flexbox, `clamp()` fluid typography, and `@media (prefers-reduced-motion)`.
- **Vanilla JavaScript (ES6+)**: Zero external libraries. Uses `IntersectionObserver`, DOM event delegation, real-time validation, and `requestAnimationFrame`.
- **Typography**: Google Fonts (*Syne*, *Instrument Serif*, *Space Grotesk*).

---

## ✦ Project File Structure

```text
Landing Page/
├── index.html      # Primary semantic HTML5 layout & ARIA accessibility
├── style.css       # Custom design system, typography, grid, responsive rules
├── script.js       # Navigation, scroll reveals, stats counter, form validation & clock
└── README.md       # Project documentation & deployment guide
```

---

## ✦ How to Run Locally

Since this project relies purely on standard web technologies:

1. Clone or download this repository.
2. Open `index.html` directly in any standard browser (Chrome, Firefox, Safari, Edge).
3. Alternatively, serve using any local static HTTP server, such as:
   ```bash
   npx serve .
   ```
   or using Python:
   ```bash
   python -m http.server 8000
   ```
## ✦ Live Demo Placeholder

- **Live URL**: `https://YOUR_USERNAME.github.io/FUTURE-landing-page/` *(Replace with your deployed GitHub Pages URL)*

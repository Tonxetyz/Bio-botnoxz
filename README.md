# Botnoxz

A single-page, animated "link in bio" landing page — a starfield-themed hub for all of Botnoxz's socials.

![Static HTML5](https://img.shields.io/badge/Static-HTML5-e34f26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/Styled_with-CSS3-1572b6?logo=css3&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-f7df1e?logo=javascript&logoColor=black)
![License MIT](https://img.shields.io/badge/License-MIT-green.svg)

[Live Demo](#getting-started) · [Key Features](#key-features) · [Quick Start](#getting-started) · [Project Structure](#project-structure)

---

<div align="center">
  <img src=".github/hero.png" alt="Botnoxz bio page preview" width="480">
</div>

---

## Key Features

- 🌌 **Animated starfield background** — a full-screen `<canvas>` with twinkling stars and randomly-spawning falling stars, rendered every frame with `requestAnimationFrame`.
- 🖱️ **Cursor-reactive parallax** — the starfield subtly shifts with mouse movement, and each link button tracks the cursor to drive a soft radial glow via CSS custom properties (`--mx` / `--my`).
- 🔗 **One-tap social links** — direct, `target="_blank"` links to Telegram and GitHub, opening straight to the real profile.
- 📋 **Copy-to-clipboard handles** — Instagram and X buttons copy the handle with the Clipboard API (with a `document.execCommand` fallback for older browsers) and flash a "скопировано ✓" confirmation.
- 📱 **Responsive layout** — a dedicated `mobile.css` breakpoint tightens spacing and type size for screens under 480px.
- ♿ **Motion-safe by default** — all animations are disabled under `prefers-reduced-motion: reduce`.

## Tech Stack

| Technology | Used for |
|---|---|
| HTML5 | Page structure and content (`Botnoxz.html`) |
| CSS3 | Layout, theming, and animations (`styles.css`) |
| CSS3 (media query) | Mobile-specific responsive tweaks (`mobile.css`) |
| Vanilla JavaScript | Canvas starfield animation, clipboard copy, cursor glow (`script.js`) |

No framework, no build step, no dependencies.

## Getting Started

The entry file is **`Botnoxz.html`** (not `index.html`), so open it directly or serve the folder statically:

```bash
# 1. Clone the repository
git clone https://github.com/Tonxetyz/Bio-botnoxz.git
cd Bio-botnoxz

# 2. Option A — just open it in a browser
start Botnoxz.html      # Windows
open Botnoxz.html       # macOS
xdg-open Botnoxz.html   # Linux

# 2. Option B — serve it locally (recommended for clipboard/HTTPS-dependent APIs)
npx serve .
# then open the served URL and navigate to /Botnoxz.html
```

## Project Structure

```
Bio-botnoxz/
├── Botnoxz.html      # Main page — markup for the bio card and social links (entry point, not index.html)
├── styles.css         # Core styles — starfield, card layout, buttons, animations
├── mobile.css         # Responsive overrides for small screens (<480px)
├── script.js          # Canvas starfield animation, clipboard copy, cursor-glow logic
├── LICENSE            # MIT license
└── README.md          # This file
```

---

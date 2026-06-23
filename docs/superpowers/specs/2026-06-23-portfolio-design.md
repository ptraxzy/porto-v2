# Design Specification: Retro/Zine Portfolio Website for Putra (ultramaxo)

**Date:** 2026-06-23
**Author:** Antigravity (AI Assistant)
**Status:** Under Review

---

## 1. Overview & Goal

The goal of this project is to build a premium, highly-personalized portfolio website for **Putra (ultramaxo)**, a Full-Stack Developer & Security Enthusiast. The design is heavily inspired by [toddsgotapen.com](https://toddsgotapen.com/), utilizing a character-driven, retro/zine aesthetic with textured layouts, organic hand-drawn accents, and bold typography.

The site is built as a React Single Page Application (SPA) using **Vite** and styled with **Vanilla CSS** to allow maximum control over the custom animations, tilt offsets, and SVG divider waves.

---

## 2. Target Audience & Brand Voice

*   **Audience:** Technical recruiters, open-source maintainers, and security teams looking for developers who understand both frontend systems and deep security engineering.
*   **Tone & Voice:** Bold, direct, and slightly cynical towards boilerplate corporate buzzwords. It emphasizes real-world functionality ("words backed by a human brain, secured by a hacker's eye").
*   **Aesthetics:** High-contrast retro zine combined with the intellectual, premium layout of the Claude AI chat interface. Warm dark charcoal mode by default, support for an eggshell warm white light mode, clean borders, custom asterisk brand icons, and embedded monospace elements.

---

## 3. Visual Identity & Color System

The system defines semantic custom properties mapped to light and dark modes:

### Shared Accent
*   `--my-orange` (`#d9775f`): Claude Terracotta Orange (brand sunburst accent).

### Default Theme: Dark Claude Mode
*   `--bg-color` (`#191919`): Deep warm dark charcoal.
*   `--text-color` (`#e8e6e3`): Soft warm cream text.
*   `--text-secondary` (`#b0adab`): Muted warm gray.
*   `--card-bg` (`#22221f`): Slightly lighter warm dark gray.
*   `--border-color` (`#383835`): Thin dark warm border line.
*   `--highlight-bg` (`rgba(217, 119, 95, 0.2)`): Terracotta tint.

### Alternate Theme: Light Claude Mode
*   `--bg-color` (`#f9f8f6`): Warm eggshell off-white paper.
*   `--text-color` (`#191919`): Dark charcoal.
*   `--text-secondary` (`#6b6866`): Muted dark slate.
*   `--card-bg` (`#ffffff`): Pure white paper.
*   `--border-color` (`#e5e2dd`): Subtle warm gray border line.
*   `--highlight-bg` (`rgba(217, 119, 95, 0.1)`): Light terracotta tint.

### Typography
*   **Serif Font:** `Newsreader` (weights `400`, `500` for greetings, h1, h2 headers). Elegant, editorial feel.
*   **Sans Font:** `Inter` (weights `300`, `400`, `500`, `600` for UI text and paragraphs).
*   **Typewriter Font:** `Special Elite` (for badges and terminal outputs).
*   **Handwritten Font:** `Covered By Your Grace` (for inline side comments).

---

## 4. Page Architecture & Content Sections

The page flows vertically as a single page with alternating high-contrast section backgrounds:

### Section 1: Hero Section (Cream Theme)
*   **Badge (Top Left):** Tilted badge rotated at `-10deg` using `Special Elite` font. Text: `CODE & SHIELD / build • audit • secure`.
*   **Profile Tag:** `PUTRA — FULL-STACK DEVELOPER & SECURITY ENTHUSIAST`.
*   **Main Headline:** Styled with a tilted rotation (`transform: rotate(-2deg)`). Tilted card in dark gray text on a white box shadow block. Text: *“Code backed by a **human brain**, secured by a **hacker's eye**.”*
    *   Highlight markers around key words using stylized background curves.
*   **CTA Button:** Bold, sketch-bordered button that triggers scroll-to-projects.
*   **Graphic Asset:** A vector/sketch-like hand holding a floppy disk or typing on a keyboard.

### Section 2: Bento Credibility Grid (Cream Theme)
A responsive grid of cards with heavy offset box-shadows (`box-shadow: 5px 5px 0px #333333`):
*   **Card 1 (Full-Stack Developer):** Highlights `2` complete monorepos (Danao Wallet and AniStream) with responsive frontends and active backends.
*   **Card 2 (Security Auditing):** Highlights `100%` security-first mindset, referencing scripts built to audit API vulnerabilities (brute-force, lockout recovery).
*   **Card 3 (Community/GitHub):** Interlinks to GitHub account `ultramaxo`.

### Section 3: "Blah Blah Blah" Philosophy (Charcoal Theme / `.reverse`)
*   **Content:** Discusses how modern tech portfolios are filled with abstract, empty corporate jargon.
*   **Philosophy:** Focuses on clean code and robust authentication. No buzzwords, just code that performs.
*   **Decoration:** Handwritten cursive side comments (`Covered By Your Grace`) offset dynamically.
*   **Transition:** Top and bottom SVG waves (`.wave.top` and `.wave.bottom`) mask the background into a wave pattern.

### Section 4: Projects Showcase (Cream Theme)
Features the two selected portfolio projects:
1.  **Danao Wallet (E-Wallet & Payments)**
    *   *Stack:* Vite React + Express Node.js + MySQL.
    *   *Features:* Bento grid layout, responsive sidebar, transfer endpoint security, live transactions.
    *   *Action:* "Open Source Details" opens a retro IDE-themed React modal displaying database schema, monorepo tree structure, and security considerations.
2.  **AniStream Premium Platform (Anime Streaming)**
    *   *Stack:* Vite React + Express + TMDb.
    *   *Features:* Gamified leaderboards, release schedule calendar, watch limits.
    *   *Action:* Modal details showing premium validation checks and TMDB API cache setup.

### Section 5: Security Tools Corner (Charcoal Theme / `.reverse`)
Styled as a terminal screen card embedded on a beige zine page:
*   **Console Header:** `bash - ultramaxo@portofolio`
*   **Auditing Scripts:**
    *   `login_rate_limit_tester.py`: Python CLI tool testing brute force resistance, lockout thresholds, and recovery timing.
    *   `otp_bruteforce.py`: Python script simulating verification bypass.
*   Shows interactive pseudo-output of the Rate Limit Tester with custom colors (Red/Green terminal text).

### Section 6: Matchmaking & Contact (Cream Theme)
*   **Are We a Match?** Side-by-side comparison of ideal collab requirements:
    *   *Yes if:* You want high-fidelity web apps and bulletproof code.
    *   *No if:* You think security is an afterthought.
*   **Contact Form:** Sketch-like form requesting Name, Email, and Website/Idea.
*   **Footer:** Retro floppy disk vector with tagline: `"LIFE'S TOO SHORT TO BUILD VULNERABLE CODE."`

---

## 5. Security & Technical Architecture (React Codebase)

*   **Vite React Setup:** Organized into clean component files (e.g., `Hero.tsx`, `BentoGrid.tsx`, `Philosophy.tsx`, `Projects.tsx`, `SecurityCorner.tsx`, `Contact.tsx`, `ProjectModal.tsx`).
*   **State Management:** Standard React hooks (`useState`, `useEffect`) for managing details modal popups, terminal output simulations, and form validations.
*   **Styling:** Single semantic CSS sheet (`index.css`) containing color variables, layout rules, and responsive media queries. Fully responsive from mobile devices (320px) up to wide screens (1440px).

---

## 6. Verification & Testing

*   **Lighthouse Performance:** Targets >90 score in SEO, accessibility, and performance.
*   **Responsive Review:** Explicit verification across Mobile, Tablet, and Desktop breakpoints.
*   **Interaction Verification:** Modals, code tabs, and terminal simulators tested for smooth state changes and transition animations.

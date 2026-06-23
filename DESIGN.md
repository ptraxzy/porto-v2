# Design System: Putra (ultramaxo) Zine Portfolio
**Project ID:** projects/putra-portfolio-2026

## 1. Visual Theme & Atmosphere
The design system is inspired by the **Claude AI interface** (clean, intellectual, premium zine layout) combined with a retro developer aesthetic.
It supports two primary modes with a theme toggle in the header:
1.  **Dark Claude Mode (Default Theme):** Deep warm dark charcoal canvas with cream-colored text and soft, premium rounded border containers.
2.  **Light Claude Mode:** Soft warm off-white eggshell paper canvas with dark charcoal text.

Both modes share the characteristic warm terracotta orange branding, elegant serif typography, clean card lines, and subtle micro-animations.

## 2. Color Palette & Roles

### Shared Accent
*   **Claude Terracotta Orange (#d9775f):** The signature brand accent. Used for the asterisk/starburst icon logo, primary action links, cursor highlights, and key decorative markings.

### Dark Claude Mode (Default)
*   **Canvas Background (--bg-color):** `#191919` (Warm dark charcoal).
*   **Primary Text (--text-color):** `#e8e6e3` (Soft warm cream-white).
*   **Secondary Text (--text-secondary):** `#b0adab` (Muted warm gray).
*   **Card Background (--card-bg):** `#22221f` (Slightly lighter warm dark gray).
*   **Card Border (--border-color):** `#383835` (Thin dark warm gray border).
*   **Highlight Background (--highlight-bg):** `rgba(217, 119, 95, 0.2)` (Terracotta tint overlay).

### Light Claude Mode
*   **Canvas Background (--bg-color):** `#f9f8f6` (Warm eggshell off-white).
*   **Primary Text (--text-color):** `#191919` (Warm dark charcoal).
*   **Secondary Text (--text-secondary):** `#6b6866` (Muted dark slate).
*   **Card Background (--card-bg):** `#ffffff` (Pure white).
*   **Card Border (--border-color):** `#e5e2dd` (Subtle warm gray border).
*   **Highlight Background (--highlight-bg):** `rgba(217, 119, 95, 0.1)` (Soft terracotta tint).

## 3. Typography Rules
*   **Serif Font (Greetings & Core Headers):** `Newsreader` (Serif Google Font)
    *   *Usage:* Hello/Greeting headers, main section headings (h1, h2).
    *   *Weights:* `400` (Regular), `500` (Medium).
    *   *Character:* Sophisticated, editorial, editorial-grade slab-like serif resembling classic printing presses.
*   **Sans Font (UI & Body Text):** `Inter` (Sans-serif Google Font)
    *   *Usage:* Default body paragraphs, buttons, tags, navigation.
    *   *Weights:* `300` (Light), `400` (Regular), `500` (Medium), `600` (Semi-bold).
    *   *Character:* Extremely clean, highly readable, matches Claude's UI text styling.
*   **Typewriter Font (Terminal & Monospace):** `Special Elite` (Slab Typewriter)
    *   *Usage:* Security terminal output, CLI script variables, code badges.
    *   *Character:* Distressed ink typewriter face.
*   **Handwritten Font (Inline notes):** `Covered By Your Grace`
    *   *Usage:* Micro scribbles, notes, and custom callouts.

## 4. Component Stylings
*   **Theme Toggle:**
    *   A custom button displaying the Claude asterisk logo. Clicking it toggles the HTML `.light-mode` class.
*   **Buttons:**
    *   *Shape:* Lighter rounded corner inputs (`border-radius: 9999px` for pill styles, or `12px` for normal action buttons).
    *   *Borders:* `1px solid var(--border-color)`.
    *   *Behavior:* Subtle background transition on hover to `var(--highlight-bg)`.
*   **Cards/Containers (Bento Grid):**
    *   *Shape:* Generously rounded corners (`border-radius: 16px` to `20px` like Claude's UI chat panel).
    *   *Borders:* `1px solid var(--border-color)`.
    *   *Shadow:* Whisper-soft diffused shadow or flat clean lines.
*   **Inputs/Forms:**
    *   *Style:* Fully enclosed input boxes with rounded corners (`border-radius: 12px`).
    *   *Behavior:* Turns amber/terracotta border on active focus.

## 5. Layout Principles
*   **Zine Layout:** Alternates section boundaries using soft wave dividers or clean offsets.
*   **Margin Strategy:** Tight but breathing page margins centered at `max-width: 800px` for a focused reading view resembling a chat assistant frame.


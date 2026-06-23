# Design Specification: Project Details Modal Redesign

**Date:** 2026-06-23
**Author:** Antigravity (AI Assistant)
**Status:** Approved (Based on user request)

---

## 1. Goal & Context
The user requested:
1. The removal of the simulated workspace file tree / tab layout inside the project details modal to eliminate "AI slop".
2. The removal of any local laptop filesystem paths (e.g. `/home/putra/Projects/...`) for privacy reasons.
3. The replacement of the private **Danao Wallet** project with a public project (**Video Downloader Bot**).

---

## 2. Redesigned Layout
The modal content area is simplified to a single vertical scroll container, completely omitting the directory workspace tree sidebar, files lists, tab buttons, and local paths.

### Visual Elements
*   **Header Section**: 
    *   An elegant, large Newsreader serif header for the Project Title.
    *   A prominent subtitle with the project's tagline in italicised, muted text.
    *   An elegant Close (`X`) button that uses standard hover styling.
*   **Core Content Sections**:
    *   **Project Overview**: A clean paragraph detailing the project's purpose and functionality.
    *   **Key Features**: A bulleted list using simple check icons (`CheckCircle2`) to represent features.
    *   **System Workflow**: A narrative explanation in clean prose describing how the service or app operates.
    *   **Tech Stack**: Minimalist tag pills displaying the technologies used.
*   **Links & Access Details**:
    *   **Open GitHub Repository**: A dedicated link button featuring a GitHub icon.
    *   **Open Live Demo**: A dedicated link button (rendered only when `demoUrl` is provided).
    *   *Note: Absolute local laptop workspace paths have been completely removed.*

---

## 3. Projects list adjustments
*   **Video Downloader Bot (`bot-downloader`)** has replaced the private Danao Wallet.
*   The project displays its features, tech stack (`Python`, `Asyncio`, `yt-dlp`, `Telegram Bot API`), and links to its public GitHub repository (`https://github.com/ptraxzy/bot-downloader`).

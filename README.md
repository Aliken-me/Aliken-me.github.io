# Ali Moradi — Personal Engineering Portfolio 🛰️

[![Website Status](https://img.shields.io/badge/Live%20Site-Aliken--me.github.io-0284c7?style=flat-square&logo=github)](https://Aliken-me.github.io)
[![Built with Astro](https://img.shields.io/badge/Framework-Astro_v5-ff5d01?style=flat-square&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS_v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Deployment](https://img.shields.io/badge/Deployed%20via-GitHub%20Pages-181717?style=flat-square&logo=githubactions)](https://github.com/Aliken-me/Aliken-me.github.io/actions)

Welcome to the source repository of my personal engineering portfolio. This site showcases my academic research in space systems engineering, satellite mission modeling, scientific payload instrumentation, and embedded flight avionics.

---

## 👨‍🚀 About Me

* **Identity:** Ali Moradi (Aliken)
* **Affiliation:** M.Sc. Candidate in Space Systems Engineering at **Sharif University of Technology (SUT)**, Tehran, Iran
* **Research Focus:** Non-linear optimal trajectory control, continuous-thrust debris deorbiting (Koopman / HJB frameworks), CubeSat systems architecture, and embedded systems.
* **Connect:** [LinkedIn](https://linkedin.com/in/Aliken) • [Academic Email](mailto:ali.morad@sharif.edu)

---

## 🛠️ Tech Stack & Architecture

* **Framework:** [Astro](https://astro.build/) (Static Site Generation / Zero-JS by default)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) with a custom dark aerospace/HUD color palette
* **Design Features:**
  * Animated satellite and telemetry orbit HUD radar
  * Floating glassmorphic navigation dock for mobile devices
  * Interactive contact transmission form integration

---

## 📂 Project Structure

* **`public/`** — Static assets (vector brand logo, high-contrast orbital favicon, profile portrait)
* **`src/layouts/`** — Global responsive layout (`MainLayout.astro` with ambient glow and navigation dock)
* **`src/pages/`** — Core routing pages (`index.astro`, `skills.astro`, `projects.astro`, `about.astro`, `contact.astro`, `404.astro`)
* **`src/styles/`** — Tailwind CSS v4 styling rules (`global.css`)
* **`astro.config.mjs`** — Astro and GitHub Pages deployment configuration

---

## 🚀 Local Development Setup

To preview and develop locally:

1. Clone the repository:
   ```bash
   git clone [https://github.com/Aliken-me/Aliken-me.github.io.git](https://github.com/Aliken-me/Aliken-me.github.io.git)
   cd Aliken-me.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm run dev
   ```

---

## 📂 Project Structure

```text
Aliken-me.github.io/
├── public/              # Static assets (images, icons, etc.)
├── src/                 # Source code
│   ├── assets/          # Styles and media files
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application views / routes
│   └── App.jsx          # Main application component
├── .gitignore           # Git ignore rules
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```
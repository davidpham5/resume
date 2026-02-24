# davidpham5.github.io

My resume as a statically generated site. Built with AstroJS and Tailwind CSS.

Live at [davidpham5.github.io](https://davidpham5.github.io)

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [GitHub Pages](https://pages.github.com) — hosting via GitHub Actions

## Structure

```
src/
  layouts/Layout.astro      # Base HTML wrapper
  components/               # Astro components (Hero, WorkExp, Skills, etc.)
  pages/
    index.astro             # Home / about page
    resume.astro            # Resume page
    lab.astro               # Lab / experiments
  styles/global.css

components/
  Work-Experience/
    resume-data.js          # Single source of truth for all resume content
```

## Getting Started

```bash
npm install
npm run dev       # localhost:4321
```

## Build & Deploy

```bash
npm run build     # outputs to dist/
npm run preview   # preview the build locally
```

Deployments are automated via GitHub Actions on every push to `master`.

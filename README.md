# Portfolio

A minimalist one-page portfolio built with React + Vite, deployed to GitHub Pages.

## Editing content

All personal content (name, bio, journey, projects, resume, contact links) lives
in [`src/content.js`](src/content.js). Edit that file — no need to touch the
components.

To add your resume, place a PDF at `public/resume.pdf` (the "Download resume"
button links to it).

## Development

```bash
npm install
npm run dev
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages automatically.

One-time setup on GitHub: **Settings → Pages → Source → GitHub Actions**.

The site is configured to be served from `/YatinPortfolio/` (see `base` in
`vite.config.js`). If you rename the repo, update that path to match.

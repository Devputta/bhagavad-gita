# Bhagavad Gita — website

[![Live Site](https://img.shields.io/badge/live-bhagavad--gita--pelk.onrender.com-E6B85C?style=for-the-badge)](https://bhagavad-gita-pelk.onrender.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE)

A static landing page for the app: what it is, how it's built, and a direct
APK download (no Play Store / App Store).

```
gita-website/
├── index.html          the whole site (one page)
├── style.css
├── script.js            checks the APK is actually uploaded, nothing else
├── assets/               icons, reused from the app
└── downloads/
    └── bhagavad-gita.apk   ← you need to add this yourself, see below
```

## 1. Add your APK

Put your built Android APK in `downloads/`, named exactly `bhagavad-gita.apk`.
See `downloads/PUT-YOUR-APK-HERE.txt` for exactly how to build one from the
`combined-gita` project if you don't have it handy. The download button
breaks silently (well — it 404s) if this file is missing, so `script.js`
checks for it on page load and shows a warning in the download panel if it's
not there, as a safety net for you, not visitors.

## 2. Preview it locally

No build step — just open `index.html` in a browser, or serve it properly
so relative paths behave the same as they will in production:

```bash
cd gita-website
python3 -m http.server 8080
# or: npx serve .
```

Visit `http://localhost:8080`.

## 3. Deploy on Render.com

**Option A — Blueprint (fastest):**
1. Push this `gita-website` folder to a GitHub/GitLab repo.
2. In the Render dashboard: **New → Blueprint**, point it at the repo.
   Render reads `render.yaml` automatically and sets everything up as a
   Static Site.
3. Deploy. Render gives you a URL like `bhagavad-gita-website.onrender.com`.

**Option B — Manual (just as easy):**
1. Push the repo.
2. Render dashboard: **New → Static Site**.
3. Connect the repo.
4. Build command: leave blank (or `echo "no build"`).
5. Publish directory: `.` (this folder itself — there's no `dist`/`build`
   output, it's already static).
6. Deploy.

Either way, once it's deployed the download button just works — it's a
relative link to `downloads/bhagavad-gita.apk`, which Render serves like any
other static file.

## 4. Custom domain (optional)

Render → your static site → **Settings → Custom Domains** → add yours and
follow the DNS instructions Render gives you (usually a CNAME record).

## Editing the content

Everything is in `index.html` — sections are labeled with comments
(`<!-- HERO -->`, `<!-- DOWNLOAD -->`, etc.). Colors and fonts are all in
`style.css` under the `:root` block at the top if you want to adjust the
palette.

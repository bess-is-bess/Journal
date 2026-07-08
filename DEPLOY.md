# Journal — deploy guide

This folder is a **complete, self-contained static website**. No build step, no server, no database server — just files. Storage is the browser's own **IndexedDB** (free, offline, private to each device).

## What's inside
- `index.html` — the app
- `journal-parts.jsx`, `journal-main.jsx`, `db.js` — the app code
- `_ds_bundle.js`, `styles.css`, `tokens/`, `assets/` — the Animal Island UI design system it's built on

## Storage — how your data is kept
- Every category, item and **photo** is saved in **IndexedDB** inside your browser. It stays after you close the tab, is free forever, works offline, and never leaves your device.
- Because it is per-browser, data does **not** sync across devices. That's the trade-off for zero-setup and zero-cost. (Want cross-device sync? See "Upgrade path" below.)

## Deploy — pick one (all free)

**A. Netlify Drop — easiest, ~30 seconds, no account to start**
1. Go to https://app.netlify.com/drop
2. Drag this whole `journal-app` folder onto the page.
3. You get a live URL instantly (e.g. `your-name.netlify.app`). Done.

**B. GitHub Pages**
1. Create a new GitHub repo and upload the contents of this folder.
2. Repo → Settings → Pages → Source: `main` branch, `/root` → Save.
3. Your site appears at `https://<user>.github.io/<repo>/`.

**C. Vercel or Cloudflare Pages**
- Import the repo (or drag the folder) — framework preset "Other / static", no build command, output = this folder.

## Notes
- On first load the page fetches React + Babel from a public CDN (unpkg), so the very first visit needs internet; after that IndexedDB works offline. For a fully self-hosted/offline build you could download those three `<script>` files locally — optional.
- If you ever change the design system, re-copy `_ds_bundle.js` + `styles.css` + `tokens/` + `assets/` into this folder to refresh it.

## Upgrade path — cloud sync (optional, still free)
If you later want your Journal on multiple devices, the easiest free database is **Supabase** (free tier: Postgres + file Storage for photos + auth). Swap `db.js` for Supabase client calls — the UI stays exactly the same. Ask and I'll wire it up.

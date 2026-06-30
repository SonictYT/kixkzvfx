# Kixkz VFX — Portfolio

Freelance VFX editor portfolio for **Kixkz VFX**, built with Next.js (App Router),
TypeScript, Tailwind CSS v4, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding a new montage

Open `data/projects.ts` and copy/paste one of the existing objects in the
`projects` array, then edit the fields:

```ts
{
  id: "my-new-edit",
  title: "My New Edit",
  category: "Fortnite / Gaming VFX",
  filterTag: "Fortnite",      // must be one of the values in FILTERS
  youtubeId: "VIDEO_ID_HERE", // the part after youtu.be/ or v=
  description: "One or two sentences about the edit.",
  featured: false,            // true = shows in the top "Featured Work" row (max 3)
}
```

That's it — the thumbnail, modal player, and filter chip update automatically.
No other file needs to be touched.

## Editing social links

Open `data/socials.ts`:

```ts
export const SOCIALS = {
  youtube: "https://youtube.com/@ItsKixkz",
  tiktok: "https://www.tiktok.com/@itzkixkzfr",
  twitter: "",   // see note below
  twitch: "https://www.twitch.tv/kixkzfn",
  discordUsername: "kixkzfn",
};
```

**Twitter/X is currently blank.** The value sent for Twitter/X
(`<@566457776696459276>`) is a Discord mention/user-ID format, not an X handle,
so it can't be turned into a working profile link. Drop your real handle in as
`"https://x.com/yourhandle"` and the icon will light up automatically in the
navbar and footer — until then it's hidden rather than linking somewhere wrong.

## How "Hire Me" and the Discord chip work

Discord doesn't support deep-linking to a DM by username from the web, so
both the **Hire Me** button and the Discord chip in the contact section:

1. Copy `kixkzfn` to the clipboard
2. Open discord.com in a new tab
3. Show a small confirmation so the visitor knows to paste/search the
   username once Discord is open

If you'd rather link straight to a Discord **server invite**
(e.g. `https://discord.gg/yourcode`), swap the `window.open("https://discord.com/", ...)`
call in `components/HireMeButton.tsx` for that invite URL.

## Deploying to Vercel

```bash
npm install -g vercel   # if you don't already have it
vercel
```

Or push this folder to a GitHub repo and import it at vercel.com/new — no
extra configuration needed, it's a stock Next.js app.

## Project structure

```
app/
  layout.tsx      → fonts + page metadata
  page.tsx        → assembles all sections
  globals.css     → design tokens (colors, fonts, glass effect)
components/
  Navbar.tsx
  Hero.tsx
  Portfolio.tsx    → featured row + filterable grid
  ProjectCard.tsx
  VideoModal.tsx   → click-to-play YouTube modal
  About.tsx
  Contact.tsx      → contact CTA + footer with socials
  HireMeButton.tsx
  DiscordCopyChip.tsx
  SocialRow.tsx
  icons.tsx        → hand-drawn social icon SVGs
data/
  projects.ts      → edit this to add/remove montages
  socials.ts       → edit this to update social links
```

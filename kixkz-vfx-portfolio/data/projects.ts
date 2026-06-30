// ─────────────────────────────────────────────────────────────────────────
// PROJECTS DATA FILE
// Add a new montage by copying an existing object below and editing it.
// You do NOT need to touch any other file in the site to add new work.
//
// Fields:
//  id          – unique slug, lowercase, no spaces
//  title       – project title shown on the card + modal
//  category    – full label shown on the card (e.g. "Fortnite / Gaming VFX")
//  filterTag   – which filter chip this project belongs to. Must match one
//                of the values in FILTERS below ("All" is automatic).
//  youtubeId   – the part of the YouTube URL after "youtu.be/" or "v="
//  description – 1–2 sentence description shown on the card + modal
//  featured    – true = appears in the "Featured Work" row up top
// ─────────────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  category: string;
  filterTag: string;
  youtubeId: string;
  description: string;
  featured: boolean;
}

// The filter chips shown above the grid, in order. "All" is added automatically.
export const FILTERS = ["Fortnite", "Player Content", "Gaming"] as const;

export const projects: Project[] = [
  {
    id: "fortnite-cinematic-montage",
    title: "Fortnite Cinematic Montage",
    category: "Fortnite / Gaming VFX",
    filterTag: "Fortnite",
    youtubeId: "tKbvn4r4KHA",
    description:
      "High-energy Fortnite montage featuring synced effects, cinematic pacing, and custom visual effects.",
    featured: true,
  },
  {
    id: "fortnite-competitive-montage",
    title: "Fortnite Competitive Montage",
    category: "Fortnite / Esports Editing",
    filterTag: "Fortnite",
    youtubeId: "nnxS3LYHiwk",
    description:
      "Competitive-style montage edit focused on clean transitions, impact effects, and gameplay flow.",
    featured: true,
  },
  {
    id: "player-highlight-edit",
    title: "Player Highlight Edit",
    category: "Player / Team Content",
    filterTag: "Player Content",
    youtubeId: "ayupdHKa9lQ",
    description:
      "Player showcase edit with motion graphics, effects, and esports-style presentation.",
    featured: true,
  },
  {
    id: "gaming-montage-edit",
    title: "Gaming Montage Edit",
    category: "Gaming / VFX",
    filterTag: "Gaming",
    youtubeId: "fpnOpzyfi6A",
    description:
      "Fast-paced gaming edit showcasing transitions, effects, and cinematic editing.",
    featured: false,
  },
  {
    id: "fortnite-vfx-showcase",
    title: "Fortnite VFX Showcase",
    category: "Fortnite / Visual Effects",
    filterTag: "Fortnite",
    youtubeId: "Iyvw1V9PBMY",
    description: "A showcase of my editing style, VFX work, and creative effects.",
    featured: false,
  },
];

// Returns the YouTube thumbnail URL for a given video id.
export function thumbnailUrl(youtubeId: string) {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

export function watchUrl(youtubeId: string) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export function embedUrl(youtubeId: string) {
  return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
}

"use client";

import { SOCIALS } from "@/data/socials";
import { YouTubeIcon, TikTokIcon, XIcon, TwitchIcon } from "./icons";

const links = [
  { key: "youtube", href: SOCIALS.youtube, label: "YouTube", Icon: YouTubeIcon },
  { key: "tiktok", href: SOCIALS.tiktok, label: "TikTok", Icon: TikTokIcon },
  { key: "twitter", href: SOCIALS.twitter, label: "X / Twitter", Icon: XIcon },
  { key: "twitch", href: SOCIALS.twitch, label: "Twitch", Icon: TwitchIcon },
];

export default function SocialRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links
        .filter((l) => l.href)
        .map(({ key, href, label, Icon }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="focus-ring glass flex h-10 w-10 items-center justify-center rounded-full text-ink-muted transition-all hover:-translate-y-0.5 hover:text-ink hover:border-violet/50"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
    </div>
  );
}

// Hand-drawn SVG icons for the social platforms we need.
// Using explicit paths (rather than a generic icon pack) so each mark is accurate.

export function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.6a3 3 0 0 0-2.1-2.1C19.4 4 12 4 12 4s-7.4 0-9.4.5A3 3 0 0 0 .5 6.6 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.4 3 3 0 0 0 2.1 2.1C4.6 20 12 20 12 20s7.4 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.4ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.8a4.4 4.4 0 0 1-3.1-1.3V14a5.1 5.1 0 1 1-4.4-5v2.4a2.7 2.7 0 1 0 1.9 2.6V2h2.5a4.4 4.4 0 0 0 3.1 4v-.2Z" />
    </svg>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.9 2H22l-7.2 8.2L23.3 22H17l-4.9-6.4L6.5 22H3.4l7.7-8.8L2.7 2H9.2l4.4 5.9L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
    </svg>
  );
}

export function TwitchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.3 2 2 7.1v13h5v2h3l2-2h3.1L20.5 15V2H4.3Zm14.2 12.1-2.8 2.8h-3.4l-2 2v-2H6.5V3.9h12v10.2Z" />
      <path d="M16.4 6.7h-1.6v4.7h1.6V6.7Zm-4.4 0h-1.6v4.7H12V6.7Z" />
    </svg>
  );
}

export function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.3 4.4A19.7 19.7 0 0 0 15.4 3a13 13 0 0 0-.6 1.2 18.3 18.3 0 0 0-5.6 0A13 13 0 0 0 8.6 3a19.7 19.7 0 0 0-4.9 1.5C1 9 .3 13.5.6 18a19.8 19.8 0 0 0 6 3 14.6 14.6 0 0 0 1.3-2.1 12.8 12.8 0 0 1-2-1c.2-.1.3-.3.5-.4a14.1 14.1 0 0 0 11.9 0l.5.4c-.6.4-1.3.7-2 1a14.6 14.6 0 0 0 1.3 2.1 19.7 19.7 0 0 0 6-3c.4-5.2-1-9.6-3.8-13.6ZM8.5 15.3c-1.1 0-2-1-2-2.3 0-1.2.9-2.3 2-2.3s2.1 1 2 2.3c0 1.3-.9 2.3-2 2.3Zm7 0c-1.1 0-2-1-2-2.3 0-1.2.9-2.3 2-2.3s2 1 2 2.3c0 1.3-.9 2.3-2 2.3Z" />
    </svg>
  );
}

export function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

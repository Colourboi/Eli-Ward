"use client";

import { useEffect, useState } from "react";

const socials = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/0erJlFRhCVjYRHm5Zv5o2l",
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/us/artist/eli-ward/1668022790",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Eli.Ward02",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/eli.ward02/",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@eli_ward02",
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/eliward02",
  },
];

export function SiteFooter() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-16 border-t border-zinc-800 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Follow Eli Ward</h2>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="retro-social-link"
            >
              {social.label}
            </a>
          ))}
        </div>
        <p className="text-center text-[11px] uppercase tracking-[0.16em] text-zinc-500">
          {year ? `© ${year} Eli Ward. All rights reserved.` : "© Eli Ward. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}

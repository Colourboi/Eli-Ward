import Link from "next/link";

export default function MusicPage() {
  return (
    <main>
      <section className="retro-panel">
        <h1 className="retro-title">Music</h1>

        <div className="grid gap-5">
          <article className="retro-card retro-music-hero">
            <h2 className="text-2xl font-semibold md:text-3xl">Eli Ward Artist Profiles</h2>
            <p className="mt-2 text-sm text-zinc-300">Spotify and Apple Music all in one place.</p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="retro-embed-shell mb-4">
                <iframe
                  title="Eli Ward Spotify artist page"
                  src="https://open.spotify.com/embed/artist/0erJlFRhCVjYRHm5Zv5o2l?utm_source=generator&theme=0"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  className="retro-spotify-embed"
                />
              </div>

              <div className="retro-embed-shell mb-4">
                <iframe
                  title="Eli Ward Apple Music artist page"
                  src="https://embed.music.apple.com/us/artist/eli-ward/1668022790"
                  loading="lazy"
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  className="retro-spotify-embed"
                />
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              <a
                className="retro-btn w-fit"
                href="https://open.spotify.com/artist/0erJlFRhCVjYRHm5Zv5o2l"
                target="_blank"
                rel="noreferrer"
              >
                Spotify
              </a>
              <a
                className="retro-btn w-fit"
                href="https://music.apple.com/us/artist/eli-ward/1668022790"
                target="_blank"
                rel="noreferrer"
              >
                Apple Music
              </a>
            </div>
          </article>

          <article className="retro-card retro-music-card">
            <div className="retro-embed-shell mb-4">
              <iframe
                title="Most recent release Spotify album"
                src="https://open.spotify.com/embed/album/0l8hJze8hmbytFuiDCxYxp?utm_source=generator&theme=0"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="retro-spotify-embed"
              />
            </div>
            <h2 className="text-xl font-semibold">Most Recent Release</h2>
            <p className="mt-2 text-sm text-zinc-300">Latest release from Eli Ward.</p>
            <a
              className="retro-btn mt-4 w-fit"
              href="https://open.spotify.com/album/0l8hJze8hmbytFuiDCxYxp"
              target="_blank"
              rel="noreferrer"
            >
              Open in Spotify
            </a>
          </article>

          <article className="retro-card retro-music-card">
            <div className="retro-embed-shell mb-4">
              <iframe
                title="New York City Trip YouTube video"
                src="https://www.youtube.com/embed/vUAMP4Zah9U"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="retro-youtube-embed"
              />
            </div>
            <h2 className="text-xl font-semibold">New York City Trip!</h2>
            <p className="mt-2 text-sm text-zinc-300">Video highlight.</p>
            <a
              className="retro-btn mt-4 w-fit"
              href="https://www.youtube.com/watch?v=vUAMP4Zah9U"
              target="_blank"
              rel="noreferrer"
            >
              Watch on YouTube
            </a>
          </article>

          <article className="retro-card retro-music-card">
            <div className="retro-embed-shell mb-4">
              <iframe
                title="My production Spotify playlist"
                src="https://open.spotify.com/embed/playlist/5o88KhxRzrcZYJkQksAqVp?utm_source=generator&theme=0"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="retro-spotify-embed"
              />
            </div>
            <h2 className="text-xl font-semibold">My Production</h2>
            <p className="mt-2 text-sm text-zinc-300">A taste of what I have worked on.</p>
            <a
              className="retro-btn mt-4 w-fit"
              href="https://open.spotify.com/playlist/5o88KhxRzrcZYJkQksAqVp"
              target="_blank"
              rel="noreferrer"
            >
              Open in Spotify
            </a>
          </article>
        </div>
      </section>

      <section className="retro-panel mt-6">
        <p className="text-xl font-semibold text-zinc-200">Are you looking for production?</p>
        <p className="retro-copy mt-2">
          Mixing, mastering, and full production — from sketch to release-ready. Reach out and let&apos;s talk about your project.
        </p>
        <div className="mt-5">
          <Link href="/contact" className="retro-btn retro-btn-primary">
            Get a quote
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function MusicPage() {
  return (
    <main>
      <section className="section section-music">
        <div className="container">
          <header className="page-header">
            <h1 className="section-title">Music</h1>
            <p className="section-intro">Releases and selected tracks.</p>
          </header>

          <div className="music-grid">
            <article className="music-card">
              <iframe
                title="Keep Yourself — Eli Ward"
                src="https://open.spotify.com/embed/album/0l8hJze8hmbytFuiDCxYxp?utm_source=generator&theme=0"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="music-card-embed"
                style={{ height: 352 }}
              />
              <div className="music-card-body">
                <h3 className="music-card-title">Keep Yourself</h3>
                <p className="music-card-meta">2025 · EP</p>
                <a className="btn btn-secondary" href="https://open.spotify.com/album/0l8hJze8hmbytFuiDCxYxp" target="_blank" rel="noreferrer" style={{ fontSize: "0.8rem", padding: "0.6rem 1.2rem" }}>
                  Open in Spotify
                </a>
              </div>
            </article>

            <article className="music-card">
              <iframe
                title="Eli Ward — Artist Profile"
                src="https://open.spotify.com/embed/artist/0erJlFRhCVjYRHm5Zv5o2l?utm_source=generator&theme=0"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="music-card-embed"
                style={{ height: 352 }}
              />
              <div className="music-card-body">
                <h3 className="music-card-title">Artist Profile</h3>
                <p className="music-card-meta">All releases · Spotify</p>
                <a className="btn btn-secondary" href="https://open.spotify.com/artist/0erJlFRhCVjYRHm5Zv5o2l" target="_blank" rel="noreferrer" style={{ fontSize: "0.8rem", padding: "0.6rem 1.2rem" }}>
                  Open in Spotify
                </a>
              </div>
            </article>

            <article className="music-card">
              <iframe
                title="Eli Ward — Apple Music"
                src="https://embed.music.apple.com/us/artist/eli-ward/1668022790"
                loading="lazy"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                className="music-card-embed"
                style={{ height: 352 }}
              />
              <div className="music-card-body">
                <h3 className="music-card-title">Apple Music</h3>
                <p className="music-card-meta">All releases · Apple Music</p>
                <a className="btn btn-secondary" href="https://music.apple.com/us/artist/eli-ward/1668022790" target="_blank" rel="noreferrer" style={{ fontSize: "0.8rem", padding: "0.6rem 1.2rem" }}>
                  Open in Apple Music
                </a>
              </div>
            </article>

            <article className="music-card" style={{ gridColumn: "1 / -1" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                <iframe
                  title="NYC '25 — Eli Ward"
                  src="https://www.youtube.com/embed/vUAMP4Zah9U"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, display: "block" }}
                />
              </div>
              <div className="music-card-body">
                <h3 className="music-card-title">NYC &apos;25 — Short Film</h3>
                <p className="music-card-meta">2025 · Video</p>
                <a className="btn btn-secondary" href="https://www.youtube.com/watch?v=vUAMP4Zah9U" target="_blank" rel="noreferrer" style={{ fontSize: "0.8rem", padding: "0.6rem 1.2rem" }}>
                  Watch on YouTube
                </a>
              </div>
            </article>
          </div>

        </div>
      </section>
    </main>
  );
}

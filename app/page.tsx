import Image from "next/image";
import Link from "next/link";
import { BioPattern } from "@/components/bio-pattern";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        {[
          // Spread watermarks — originate just below hero boundary
          { left: "4%",  rot: -14, size: 44, delay: "0s",   bottom: "-72px" },
          { left: "14%", rot:  18, size: 50, delay: "2.8s",  bottom: "-72px" },
          { left: "24%", rot:   9, size: 52, delay: "1.4s",  bottom: "-72px" },
          { left: "35%", rot:  -6, size: 46, delay: "3.5s",  bottom: "-72px" },
          { left: "46%", rot: -21, size: 40, delay: "0.7s",  bottom: "-72px" },
          { left: "57%", rot:  12, size: 54, delay: "1.0s",  bottom: "-72px" },
          { left: "67%", rot:  16, size: 56, delay: "2.1s",  bottom: "-72px" },
          { left: "76%", rot: -25, size: 48, delay: "3.2s",  bottom: "-72px" },
          { left: "86%", rot:  -9, size: 46, delay: "1.8s",  bottom: "-72px" },
          { left: "94%", rot:  20, size: 42, delay: "0.4s",  bottom: "-72px" },
          // Lift-offs — exact match to BioPattern logos near top of About section
          { left: "4%",  rot: -15, size: 54, delay: "3.0s",  bottom: "-16px" },
          { left: "24%", rot:  22, size: 48, delay: "2.4s",  bottom: "-16px" },
          { left: "72%", rot:  30, size: 50, delay: "1.6s",  bottom: "-16px" },
        ].map((wm, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={{ position: "absolute", left: wm.left, bottom: wm.bottom, transform: `rotate(${wm.rot}deg)`, zIndex: 0 }}
          >
            <Image src="/logo-ew.png" alt="" width={wm.size} height={wm.size} className="hero-wm" style={{ animationDelay: wm.delay }} />
          </span>
        ))}
        <div className="hero-bottom-fade" aria-hidden="true" />
        <div className="hero-content">
          <Image
            src="/logo-eli-ward.png"
            alt="Eli Ward"
            width={320}
            height={120}
            sizes="(max-width: 600px) 80vw, 320px"
            className="hero-signature"
            priority
          />
        </div>
      </section>

      {/* Bio */}
      <section className="section section-bio" id="bio">
        <BioPattern />
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="bio-grid">
            <div className="bio-content">
              <p className="lead">Eli Ward is a Nashville-based singer-songwriter and producer.</p>
              <p>
                Originally from Waterloo, Illinois, Ward built his style by blending intimate lyric writing with modern
                acoustic-forward production. National audiences first met him on Season 24 of The Voice, where his{" "}
                <a
                  href="https://www.youtube.com/watch?v=7Bs-xWTPMTI"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  blind audition
                </a>{" "}
                earned two chair turns from Gwen Stefani and Reba McEntire.
              </p>
              <p>
                Since launching with &quot;Catalyst&quot; in 2023, Ward has released singles including &quot;Text When
                You Leave,&quot; &quot;Wildfire,&quot; &quot;FOMO,&quot; &quot;Relic,&quot; &quot;Haunt,&quot; and
                &quot;rich when you&apos;re young.&quot; In November 2025, he released his debut EP,{" "}
                <a
                  href="https://open.spotify.com/album/0l8hJze8hmbytFuiDCxYxp"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Keep Yourself
                </a>
                , a six-song project spanning singer-songwriter, folk, pop, and alternative textures.
              </p>
            </div>
            <div className="bio-image">
              <div className="bio-image-placeholder">
                <span>Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section-video" id="video">
        <div className="video-glow-wrap">
          <div className="video-embed">
            <iframe
              src="https://www.youtube.com/embed/vUAMP4Zah9U"
              title="Eli Ward — NYC '25"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Music */}
      <section className="section section-music" id="music">
        <div className="container">
          <h2 className="section-title">Music</h2>
          <p className="section-intro">Latest releases and selected tracks.</p>
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
              </div>
            </article>
            <article className="music-card">
              <iframe
                title="Eli Ward on Spotify"
                src="https://open.spotify.com/embed/artist/0erJlFRhCVjYRHm5Zv5o2l?utm_source=generator&theme=0"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="music-card-embed"
                style={{ height: 352 }}
              />
              <div className="music-card-body">
                <h3 className="music-card-title">Artist Profile</h3>
                <p className="music-card-meta">All releases on Spotify</p>
              </div>
            </article>
          </div>
          <p className="pricing-cta" style={{ marginTop: "var(--space-xl)" }}>
            <Link href="/music" className="btn btn-secondary">See all music</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

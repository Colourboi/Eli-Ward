import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid gap-6">
      <section className="mb-2 flex justify-center py-12 sm:py-16">
        <Image
          src="/logo-eli-ward.png"
          alt="Eli Ward"
          width={520}
          height={180}
          sizes="(max-width: 768px) 92vw, 520px"
          className="h-auto w-[min(92%,520px)]"
          priority
        />
      </section>

      <section className="retro-panel mb-2">
        <h2 className="retro-title">About</h2>
        <p className="retro-copy">
          Eli Ward is a Nashville-based singer-songwriter, producer, and session musician originally from Waterloo,
          Illinois. A pianist from childhood and a guitarist/songwriter since his teens, Ward built his style by
          blending intimate lyric writing with modern acoustic-forward production. National audiences first met him on
          Season 24 of The Voice, where his{" "}
          <a
            href="https://www.youtube.com/watch?v=7Bs-xWTPMTI"
            target="_blank"
            rel="noreferrer noopener"
            className="underline decoration-zinc-400 underline-offset-2 hover:decoration-zinc-200"
          >
            blind audition
          </a>{" "}
          earned two chair turns from Gwen Stefani and Niall Horan.
        </p>
        <p className="retro-copy mt-4">
          Since launching with &quot;Catalyst&quot; in 2023, Ward has released a steady run of singles including
          &quot;Text When You Leave,&quot; &quot;Wildfire,&quot; &quot;FOMO,&quot; &quot;Relic,&quot;
          &quot;Haunt,&quot; &quot;5 '/ 3 ONE,&quot; and &quot;rich when you&apos;re young.&quot; In November 2025, he
          released his debut EP,{" "}
          <a
            href="https://open.spotify.com/album/0l8hJze8hmbytFuiDCxYxp"
            target="_blank"
            rel="noreferrer noopener"
            className="underline decoration-zinc-400 underline-offset-2 hover:decoration-zinc-200"
          >
            Keep Yourself
          </a>
          , a six-song project spanning singer-songwriter, folk, pop, and alternative textures.
        </p>
      </section>

      <section className="retro-card mb-2">
        <div className="retro-embed-shell">
          <iframe
            src="https://www.youtube.com/embed/vUAMP4Zah9U"
            title="Eli Ward — Latest Video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="retro-youtube-embed"
          />
        </div>
      </section>

      <section className="retro-panel">
        <h2 className="retro-title">Music</h2>
        <div className="retro-embed-shell mb-4">
          <iframe
            title="Keep Yourself — Eli Ward"
            src="https://open.spotify.com/embed/album/0l8hJze8hmbytFuiDCxYxp?utm_source=generator&theme=0"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="retro-spotify-embed"
          />
        </div>
        <Link href="/music" className="retro-btn">
          See all music
        </Link>
      </section>
    </main>
  );
}

import Image from "next/image";

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

      <section className="retro-panel mb-8">
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
          &quot;Haunt,&quot; &quot;5 '/ 3 ONE,&quot; and &quot;rich when you're young.&quot; In November 2025, he
          released his debut EP,{" "}
          <a
            href="https://open.spotify.com/album/0l8hJze8hmbytFuiDCxYxp"
            target="_blank"
            rel="noreferrer noopener"
            className="underline decoration-zinc-400 underline-offset-2 hover:decoration-zinc-200"
          >
            Keep Yourself
          </a>
          , a six-song project spanning singer-songwriter, folk, pop, and alternative textures. Alongside his own
          artist releases, Ward continues to write and produce for collaborators in Nashville and beyond.
        </p>
      </section>
    </main>
  );
}

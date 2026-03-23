import Link from "next/link";

const packages = [
  {
    name: "Mixing",
    desc: "Full mix per song. Stems or tracks delivered with revision rounds.",
  },
  {
    name: "Production",
    desc: "Beat, arrangement, and full production from sketch to release-ready final.",
  },
  {
    name: "Mastering",
    desc: "Stereo mastering for distribution with reference matching.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="retro-panel mb-6">
        <h1 className="retro-title">Services</h1>
        <p className="retro-copy mb-8">
          Based in Nashville, Eli works with artists at every stage — from bedroom demos to label-ready releases.
          Whether you need a beat, a full production, or a polished mix, the goal is always the same: a sound that
          feels like you.
        </p>

        {/* Studio / proof-of-work image grid — swap in real photos when ready */}
        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="retro-card flex min-h-40 items-center justify-center text-xs uppercase tracking-[0.12em] text-zinc-500"
            >
              Studio photo {n}
            </div>
          ))}
        </div>

        <div className="mb-8 h-px bg-zinc-700/70" />

        <h2 className="mb-1 text-xs uppercase tracking-[0.18em] text-zinc-400">Production Pricing</h2>
        <p className="retro-copy mb-6">Rates are customized by scope, timeline, and revision needs.</p>

        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.name} className="retro-card">
              <h3 className="text-2xl font-semibold">{pkg.name}</h3>
              <p className="mt-3 text-sm text-zinc-300">{pkg.desc}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.13em] text-zinc-400">Price on request</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/contact" className="retro-btn retro-btn-primary">
            Request a quote
          </Link>
        </div>
      </section>
    </main>
  );
}

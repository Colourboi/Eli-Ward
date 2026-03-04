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

export default function PricingPage() {
  return (
    <main>
      <section className="retro-panel">
        <h1 className="retro-title">Production Pricing</h1>
        <p className="retro-copy mb-6">Rates are customized by scope, timeline, and revision needs.</p>

        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.name} className="retro-card">
              <h2 className="text-2xl font-semibold">{pkg.name}</h2>
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

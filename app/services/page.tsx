import Link from "next/link";

const packages = [
  {
    name: "Mixing",
    desc: "Full mix per song. Stems or tracks delivered. Up to two rounds of revisions included.",
    featured: false,
  },
  {
    name: "Production",
    desc: "Beat, arrangement, and full production. From idea to finished track. Includes stems and session file.",
    featured: true,
  },
  {
    name: "Mastering",
    desc: "Stereo master, ready for distribution. Reference track and one revision round included.",
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="section section-pricing">
        <div className="container">
          <header className="page-header">
            <h1 className="section-title">Production Pricing</h1>
            <p className="section-intro">
              Rates and packages for mixing, mastering, and full production. Custom quotes for larger projects or
              bundles.
            </p>
          </header>

          <div className="studio-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="studio-photo-placeholder">
                Studio photo {n}
              </div>
            ))}
          </div>

          <div className="production-playlist">
            <h2 className="production-playlist-title">Production Work</h2>
            <p className="production-playlist-desc">A selection of tracks produced, mixed, or co-written by Eli Ward.</p>
            <iframe
              title="My Production — Spotify Playlist"
              src="https://open.spotify.com/embed/playlist/5o88KhxRzrcZYJkQksAqVp?utm_source=generator&theme=0"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              style={{ width: "100%", height: 352, border: 0, borderRadius: 8, display: "block" }}
            />
          </div>

          <div className="pricing-grid">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`pricing-card${pkg.featured ? " pricing-card-featured" : ""}`}
              >
                {pkg.featured && <span className="badge">Popular</span>}
                <h3>{pkg.name}</h3>
                <p className="pricing-desc">{pkg.desc}</p>
                <p className="pricing-price">—</p>
                <p className="pricing-note">Price on request</p>
              </div>
            ))}
          </div>

          <p className="pricing-cta">
            <Link href="/contact" className="btn btn-primary">Request a quote</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

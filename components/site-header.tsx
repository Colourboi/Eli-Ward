import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/pricing", label: "Pricing" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-700/80 bg-black/90 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="-ml-2 inline-flex w-fit items-center sm:-ml-3">
          <Image src="/logo-ew.png" alt="Eli Ward" width={170} height={68} sizes="170px" className="h-10 w-auto" />
        </Link>
        <nav className="no-scrollbar flex w-full items-center gap-2 overflow-x-auto pb-1 sm:w-auto sm:justify-end sm:pb-0">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="retro-btn shrink-0 text-xs tracking-[0.14em] uppercase">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

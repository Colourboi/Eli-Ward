"use client";

import { useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/pricing", label: "Pricing" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

type WizState = "off" | "greeting" | "flying" | "returning";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [wizState, setWizState] = useState<WizState>("off");
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [bubbleText, setBubbleText] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoClick = useCallback(() => {
    if (wizState === "greeting" || wizState === "returning") return;
    if (timer.current) { clearTimeout(timer.current); timer.current = null; }

    if (wizState === "off") {
      setWizState("greeting");
      timer.current = setTimeout(() => {
        setBubbleText("thanks for being here ♥");
        setBubbleVisible(true);
        timer.current = setTimeout(() => {
          setBubbleVisible(false);
          timer.current = setTimeout(() => {
            setWizState("flying");
            timer.current = null;
          }, 400);
        }, 2200);
      }, 350);
    } else if (wizState === "flying") {
      setWizState("returning");
      timer.current = setTimeout(() => {
        const msgs = ["goodbye!", "adios!", "see you later!", "love you!"];
        setBubbleText(msgs[Math.floor(Math.random() * msgs.length)]);
        setBubbleVisible(true);
        timer.current = setTimeout(() => {
          setBubbleVisible(false);
          setWizState("off");
          timer.current = null;
        }, 2200);
      }, 1000);
    }
  }, [wizState]);

  const wizClass = [
    "wizard-egg",
    wizState === "greeting" || wizState === "returning" ? "wiz-visible" : "",
    wizState === "flying" ? "wiz-flying" : "",
    wizState === "returning" ? "wiz-returning" : "",
  ].filter(Boolean).join(" ");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-700/80 bg-black/90 px-4 py-3 backdrop-blur">
      <span className={wizClass} aria-hidden="true">🧙‍♂️</span>
      <span className={`wizard-bubble${bubbleVisible ? " visible" : ""}`} aria-hidden="true">
        {bubbleText}
      </span>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        {isHome ? (
          <button
            onClick={handleLogoClick}
            className="-ml-2 inline-flex w-fit cursor-pointer items-center sm:-ml-3"
            aria-label="Eli Ward"
          >
            <Image src="/logo-ew.png" alt="Eli Ward" width={170} height={68} sizes="170px" className="h-10 w-auto" />
          </button>
        ) : (
          <Link href="/" className="-ml-2 inline-flex w-fit items-center sm:-ml-3">
            <Image src="/logo-ew.png" alt="Eli Ward" width={170} height={68} sizes="170px" className="h-10 w-auto" />
          </Link>
        )}

        <nav className="no-scrollbar flex w-full items-center gap-2 overflow-x-auto pb-1 sm:w-auto sm:justify-end sm:pb-0">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`retro-btn shrink-0 text-xs tracking-[0.14em] uppercase${pathname === link.href ? " retro-btn-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

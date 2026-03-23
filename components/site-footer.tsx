"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const TOP_LOGOS = [
  { style: { left: "1%",  top: "8%",  width: 40, transform: "rotate(-10deg)", opacity: 0.19 } },
  { style: { left: "9%",  top: "12%", width: 44, transform: "rotate(6deg)",   opacity: 0.18 } },
  { style: { left: "17%", top: "8%",  width: 38, transform: "rotate(-4deg)",  opacity: 0.20 } },
  { style: { left: "25%", top: "14%", width: 42, transform: "rotate(12deg)",  opacity: 0.18 } },
  { style: { left: "33%", top: "8%",  width: 44, transform: "rotate(-8deg)",  opacity: 0.19 } },
  { style: { left: "41%", top: "12%", width: 40, transform: "rotate(5deg)",   opacity: 0.18 } },
  { style: { left: "50%", top: "8%",  width: 42, transform: "rotate(-12deg)", opacity: 0.20 } },
  { style: { left: "58%", top: "14%", width: 38, transform: "rotate(8deg)",   opacity: 0.19 } },
  { style: { left: "66%", top: "8%",  width: 44, transform: "rotate(-5deg)",  opacity: 0.18 } },
  { style: { left: "74%", top: "12%", width: 42, transform: "rotate(10deg)",  opacity: 0.20 } },
  { style: { left: "82%", top: "8%",  width: 40, transform: "rotate(-8deg)",  opacity: 0.19 } },
  { style: { left: "90%", top: "14%", width: 44, transform: "rotate(6deg)",   opacity: 0.18 } },
];

const BOTTOM_LOGOS = [
  { style: { left: "5%",  bottom: "8%",  width: 42, transform: "rotate(8deg)",   opacity: 0.18 } },
  { style: { left: "13%", bottom: "12%", width: 40, transform: "rotate(-6deg)",  opacity: 0.19 } },
  { style: { left: "21%", bottom: "8%",  width: 44, transform: "rotate(12deg)",  opacity: 0.18 } },
  { style: { left: "29%", bottom: "14%", width: 38, transform: "rotate(-10deg)", opacity: 0.20 } },
  { style: { left: "37%", bottom: "8%",  width: 42, transform: "rotate(4deg)",   opacity: 0.19 } },
  { style: { left: "45%", bottom: "12%", width: 44, transform: "rotate(-12deg)", opacity: 0.18 } },
  { style: { left: "54%", bottom: "8%",  width: 40, transform: "rotate(8deg)",   opacity: 0.20 } },
  { style: { left: "62%", bottom: "14%", width: 42, transform: "rotate(-5deg)",  opacity: 0.19 } },
  { style: { left: "70%", bottom: "8%",  width: 38, transform: "rotate(10deg)",  opacity: 0.18 } },
  { style: { left: "78%", bottom: "12%", width: 44, transform: "rotate(-8deg)",  opacity: 0.20 } },
  { style: { left: "86%", bottom: "8%",  width: 42, transform: "rotate(6deg)",   opacity: 0.19 } },
  { style: { left: "93%", bottom: "14%", width: 40, transform: "rotate(-4deg)",  opacity: 0.18 } },
];

export function SiteFooter() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="bio-pattern" aria-hidden="true">
        {TOP_LOGOS.map((item, i) => (
          <Image
            key={`top-${i}`}
            src="/logo-ew.png"
            alt=""
            width={item.style.width}
            height={item.style.width}
            className="bp-item"
            style={{
              left: item.style.left,
              top: item.style.top,
              width: item.style.width,
              transform: item.style.transform,
              opacity: item.style.opacity,
            }}
          />
        ))}
        {BOTTOM_LOGOS.map((item, i) => (
          <Image
            key={`bottom-${i}`}
            src="/logo-ew.png"
            alt=""
            width={item.style.width}
            height={item.style.width}
            className="bp-item"
            style={{
              left: item.style.left,
              bottom: item.style.bottom,
              width: item.style.width,
              transform: item.style.transform,
              opacity: item.style.opacity,
            }}
          />
        ))}
      </div>
      <div className="container">
        <p>&copy; {year ?? new Date().getFullYear()} Eli Ward. All rights reserved.</p>
      </div>
    </footer>
  );
}

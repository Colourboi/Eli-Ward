import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Eli Ward",
  description: "Music, production, and artist services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <div className="mx-auto w-full max-w-6xl px-4 pt-36 sm:pt-24">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}

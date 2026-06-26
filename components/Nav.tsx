"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center border border-amber/60 text-xs font-mono text-amber">
            N
          </span>
          Nexara Labs
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-text ${
                pathname === l.href ? "text-text" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/government"
            className="label flex items-center gap-2 border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-amber/60 hover:text-amber"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Government
          </Link>
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-px w-6 bg-text transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-text transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-text transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-border px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-sm text-muted last:border-none hover:text-text"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/government"
            onClick={() => setOpen(false)}
            className="label flex items-center gap-2 py-3 text-xs text-amber"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Government &amp; Procurement
          </Link>
        </nav>
      )}
    </header>
  );
}

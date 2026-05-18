"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/protractor", label: "Protractor" },
  { href: "/calculator", label: "Calculator" },
  { href: "/image", label: "Image" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-af-surface border-b border-af-outline-variant">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="12" stroke="#012d1d" strokeWidth="2" fill="none" />
            <line x1="14" y1="14" x2="24" y2="6" stroke="#E63946" strokeWidth="2" strokeLinecap="round" />
            <circle cx="14" cy="14" r="2" fill="#012d1d" />
          </svg>
          <span className="font-[family-name:var(--font-display)] text-xl font-bold text-af-primary">AngleFinder</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-af-primary border-b-2 border-af-primary pb-1"
                    : "text-af-on-surface-variant hover:text-af-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/protractor"
            className="bg-af-primary-container text-af-on-primary px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Start Measuring — Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-af-outline-variant bg-af-surface px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-af-on-surface-variant hover:text-af-primary py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/protractor"
            className="block bg-af-primary-container text-af-on-primary px-6 py-2 rounded-full text-sm font-bold text-center"
            onClick={() => setMobileOpen(false)}
          >
            Start Measuring — Free
          </Link>
        </div>
      )}
    </header>
  );
}

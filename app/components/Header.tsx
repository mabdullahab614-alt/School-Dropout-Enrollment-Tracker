"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.7)" : "var(--bg)",
        backdropFilter: scrolled ? "blur(12px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px) saturate(180%)" : "none",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        className={"hidden sm:block border-b text-xs overflow-hidden transition-all duration-300 " + (scrolled ? "max-h-0 opacity-0 border-transparent" : "max-h-9 opacity-100")}
        style={{ borderColor: "var(--line)", background: "transparent" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-9 flex items-center justify-between">
          <span style={{ color: "var(--ink-soft)" }}>
            Powered by UNICEF and Pakistan Bureau of Statistics data
          </span>
          <div className="flex items-center gap-4" style={{ color: "var(--ink-soft)" }}>
            <a href="mailto:hello@rollcall.pk" className="hover:opacity-70 transition-opacity">
              hello@rollcall.pk
            </a>
            
              href="https://github.com/mabdullahab614-alt/School-Dropout-Enrollment-Tracker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="hover:opacity-70 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.91-1.32 2.75-1.05 2.75-1.05.54 1.41.2 2.46.1 2.72.63.72 1.02 1.63 1.02 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .28.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        className="border-b transition-colors duration-300"
        style={{ borderColor: scrolled ? "transparent" : "var(--line)", background: "transparent" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--trust)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
                <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
              </svg>
            </span>
            <div>
              <span
                className="font-display font-bold block leading-none tracking-tight"
                style={{ fontSize: "1.65rem" }}
              >
                Roll Call
              </span>
              <span
                className="block mt-1 italic tracking-wide"
                style={{ color: "var(--ink-soft)", fontSize: "0.7rem" }}
              >
                Every child counted
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/lookup" className="nav-link">Explore Data</Link>
            <Link href="/lookup#flag" className="nav-link">Flag a Child</Link>
            <Link href="/about" className="nav-link">About</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/#join-movement"
              className="btn px-5 py-2.5 rounded-full text-sm font-medium"
              style={{ background: "transparent", color: "var(--trust)", border: "1.5px solid var(--trust)" }}
            >
              Join the Movement
            </Link>
            <Link
              href="/lookup"
              className="btn px-5 py-2.5 rounded-full text-sm font-medium"
              style={{ background: "var(--primary)", color: "#ffffff" }}
            >
              Find a district
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="btn w-9 h-9 flex items-center justify-center rounded-full"
              style={{ background: "var(--bg-alt)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div
            className="md:hidden border-t px-6 py-4 flex flex-col gap-4 text-sm font-medium"
            style={{ borderColor: "var(--line)", background: "var(--bg)" }}
          >
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/lookup" onClick={() => setOpen(false)}>Explore Data</Link>
            <Link href="/lookup#flag" onClick={() => setOpen(false)}>Flag a Child</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/#join-movement" onClick={() => setOpen(false)}>Join the Movement</Link>
            <Link
              href="/lookup"
              onClick={() => setOpen(false)}
              className="btn px-5 py-2.5 rounded-full text-center font-medium"
              style={{ background: "var(--primary)", color: "#ffffff" }}
            >
              Find a district
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-20 relative overflow-hidden"
      style={{ background: "var(--bg-alt)", color: "var(--ink)" }}
    >
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "var(--accent)" }}
      />

      <div className="max-w-5xl mx-auto px-6 py-16 relative">
        <div className="grid sm:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--primary)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--bg)" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
                  <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
                </svg>
              </span>
              <div>
                <span className="font-display font-bold block leading-none tracking-tight" style={{ fontSize: "1.7rem" }}>
                  Roll Call
                </span>
                <span className="block mt-1 italic tracking-wide" style={{ color: "var(--ink-soft)", fontSize: "0.72rem" }}>
                  Every child counted
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-5" style={{ color: "var(--ink-soft)" }}>
              Helping parents, teachers, and community workers see the real
              out-of-school numbers for their district and find a nearby
              school to enroll a child.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#join-movement"
                className="btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
                style={{ background: "var(--primary)", color: "var(--bg)" }}
              >
                Join the Movement
              </Link>
              <a
                href="https://github.com/mabdullahab614-alt/School-Dropout-Enrollment-Tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
                style={{ borderWidth: "1.5px", borderStyle: "solid", borderColor: "var(--line)", color: "var(--ink)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.91-1.32 2.75-1.05 2.75-1.05.54 1.41.2 2.46.1 2.72.63.72 1.02 1.63 1.02 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .28.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
                </svg>
                View source
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: "var(--ink)" }}>
              Quick links
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: "var(--ink-soft)" }}>
              <li><Link href="/" className="hover:opacity-80 transition-opacity">Home</Link></li>
              <li><Link href="/lookup" className="hover:opacity-80 transition-opacity">Explore Data</Link></li>
              <li><Link href="/lookup#flag" className="hover:opacity-80 transition-opacity">Flag a Child</Link></li>
              <li><Link href="/about" className="hover:opacity-80 transition-opacity">About</Link></li>
              <li><Link href="/#sources" className="hover:opacity-80 transition-opacity">Data sources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: "var(--ink)" }}>
              About this project
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Figures sourced from{" "}
              <a
                href="https://data.unicef.org/country/pak/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 transition-opacity"
                style={{ color: "var(--primary)" }}
              >
                UNICEF Pakistan
              </a>{" "}
              and the{" "}
              <a
                href="https://www.pbs.gov.pk/content/household-integrated-economic-survey-hies"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 transition-opacity"
                style={{ color: "var(--primary)" }}
              >
                Pakistan Bureau of Statistics (HIES 2024-25)
              </a>
              . School listings are sourced from Punjab, Sindh, KP,
              Balochistan, and Federal EMIS records where publicly
              available.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t relative" style={{ borderColor: "var(--line)" }}>
        <div
          className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "var(--ink-soft)" }}
        >
          <span>© 2026 Roll Call - Built for AI Seekho, Assignment 4</span>
          <span>Built by Abdullah Javid - Next.js + Supabase</span>
        </div>
      </div>
    </footer>
  );
}

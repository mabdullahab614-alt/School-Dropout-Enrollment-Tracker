import Link from "next/link";

export const metadata = {
  title: "About — Roll Call",
  description: "Learn about Roll Call's mission, data sources, and methodology.",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "var(--trust)" }}>
        About Roll Call
      </p>
      <h1 className="font-display text-3xl sm:text-4xl font-bold mb-6">
        Every child counted, one district at a time.
      </h1>
      <p className="text-base leading-relaxed mb-6" style={{ color: "var(--ink-soft)" }}>
        Roll Call exists because national averages hide local reality. An
        estimated 25.2 million children in Pakistan are out of school —
        but that number means nothing to a parent trying to understand
        why the nearest school feels out of reach. We break the crisis
        down to the province and district level, so the people closest
        to the problem can actually act on it.
      </p>

      <div className="card p-6 mb-6" style={{ borderLeft: "4px solid var(--trust)" }}>
        <h2 className="font-display font-semibold text-lg mb-2">Our mission</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          To turn scattered national education statistics into a number a
          parent, teacher, or community worker can use — and to connect
          them with nearby schools and local initiatives that can help a
          child get enrolled.
        </p>
      </div>

      <div className="card p-6 mb-6" style={{ borderLeft: "4px solid var(--primary)" }}>
        <h2 className="font-display font-semibold text-lg mb-2">Data methodology</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          Figures are sourced from UNICEF Pakistan&apos;s education
          overview and the Pakistan Bureau of Statistics (HIES 2024–25).
          School listings are illustrative for this MVP and will be
          replaced with verified EMIS (Education Management Information
          System) data as we scale.
        </p>
      </div>

      <div className="card p-6 mb-10" style={{ borderLeft: "4px solid var(--accent)" }}>
        <h2 className="font-display font-semibold text-lg mb-2">Get in touch</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          Questions, corrections, or want to bring Roll Call to your
          district?{" "}
          <a href="mailto:hello@rollcall.pk" className="underline hover:opacity-80 transition-opacity">
            hello@rollcall.pk
          </a>
        </p>
      </div>

      <Link
        href="/#join-movement"
        className="btn inline-block px-6 py-3 rounded-full font-medium"
        style={{ background: "var(--primary)", color: "#ffffff" }}
      >
        Join the movement &rarr;
      </Link>
    </div>
  );
}

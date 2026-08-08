import Link from "next/link";

export default function Hero({ totalOutOfSchool }: { totalOutOfSchool: number }) {
  const millions = (totalOutOfSchool / 1_000_000).toFixed(1);
  return (
    <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
      <p className="text-sm uppercase tracking-wide mb-3" style={{ color: "var(--primary)" }}>
        Pakistan &middot; education access
      </p>
      <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
        <span className="font-mono" style={{ color: "var(--alert)" }}>
          {millions}M
        </span>{" "}
        children are out of school today.
      </h1>
      <p className="mt-4 max-w-xl" style={{ color: "var(--ink-soft)" }}>
        Roll Call helps parents, teachers, and community workers see the real
        numbers for their district and find a nearby school to enroll a
        child, backed by UNICEF and PBS data.
      </p>
      <Link
        href="/lookup"
        className="inline-block mt-6 px-6 py-3 rounded-full font-medium"
        style={{ background: "var(--primary)", color: "#ffffff" }}
      >
        Check your district &rarr;
      </Link>
    </section>
  );
}

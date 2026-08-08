export default function Footer() {
  return (
    <footer
      className="mt-16 border-t"
      style={{ borderColor: "var(--line)" }}
    >
      <div
        className="max-w-5xl mx-auto px-6 py-8 text-sm"
        style={{ color: "var(--ink-soft)" }}
      >
        <p>
          Figures sourced from UNICEF Pakistan and the Pakistan Bureau of
          Statistics (HIES 2024–25). School listings are illustrative for
          this MVP and will be replaced with verified EMIS data.
        </p>
        <p className="mt-2">Built for AI Seekho — Assignment 4.</p>
      </div>
    </footer>
  );
}

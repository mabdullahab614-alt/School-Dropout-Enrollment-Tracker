import Link from "next/link";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Header() {
  return (
    <header className="border-b" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold">
          Roll Call
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:opacity-70">
            Home
          </Link>
          <ThemeToggle />
          <Link
            href="/lookup"
            className="px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: "var(--primary)", color: "#ffffff" }}
          >
            Find a district
          </Link>
        </nav>
      </div>
    </header>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Province } from "@/app/lib/types";
function rateColor(rate: number) {
  if (rate >= 50) return "var(--alert)";
  if (rate >= 30) return "var(--accent)";
  return "var(--primary)";
}
export default function ProvinceBar({ provinces }: { provinces: Province[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="card p-5"
    >
      <div
        className="flex justify-between text-xs uppercase tracking-wide mb-3 pb-2 divider"
        style={{ color: "var(--ink-soft)" }}
      >
        <span>Province</span>
        <span>Out-of-school rate</span>
      </div>
      <ul className="flex flex-col gap-1">
        {provinces.map((p, i) => (
          <motion.li
            key={p.id}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/lookup"
              className="group block rounded-lg px-2 py-3 -mx-2 transition-colors"
              style={{ background: "transparent" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <div className="flex justify-between items-baseline text-sm mb-1">
                <span className="font-medium flex items-center gap-1.5">
                  {p.name}
                  <span
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--trust)" }}
                  >
                    &rarr;
                  </span>
                </span>
                <span className="font-mono" style={{ color: rateColor(p.outOfSchoolRate) }}>
                  {p.outOfSchoolRate}% &middot; {(p.outOfSchoolChildren / 1_000_000).toFixed(1)}M children
                </span>
              </div>
              <div
                className={`h-2 rounded-full overflow-hidden ${p.outOfSchoolRate >= 50 ? "pulse-alert" : ""}`}
                style={{ background: "var(--bg-alt)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: rateColor(p.outOfSchoolRate) }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${p.outOfSchoolRate}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.08 }}
                />
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

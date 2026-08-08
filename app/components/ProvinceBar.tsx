"use client";

import { motion } from "framer-motion";
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
      <ul className="flex flex-col gap-4">
        {provinces.map((p, i) => (
          <li key={p.id}>
            <div className="flex justify-between items-baseline text-sm mb-1">
              <span className="font-medium">{p.name}</span>
              <span className="font-mono" style={{ color: rateColor(p.outOfSchoolRate) }}>
                {p.outOfSchoolRate}% &middot; {(p.outOfSchoolChildren / 1_000_000).toFixed(1)}M children
              </span>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: "var(--bg-alt)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: rateColor(p.outOfSchoolRate) }}
                initial={{ width: 0 }}
                animate={{ width: `${p.outOfSchoolRate}%` }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.08 }}
              />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

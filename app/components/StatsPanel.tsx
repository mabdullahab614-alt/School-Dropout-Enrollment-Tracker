"use client";

import { motion } from "framer-motion";
import { Province, District } from "@/app/lib/types";

export default function StatsPanel({
  province,
  district,
}: {
  province: Province;
  district: District;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="card card-stats p-5"
    >
      <p className="text-xs uppercase tracking-wide" style={{ color: "var(--ink-soft)" }}>
        {province.name} &middot; {district.name}
      </p>
      <div className="flex items-end gap-3 mt-2">
        <span className="font-mono font-bold text-4xl" style={{ color: "var(--alert)" }}>
          {province.outOfSchoolRate}%
        </span>
        <span className="text-sm mb-1" style={{ color: "var(--ink-soft)" }}>
          of school-age children are out of school in {province.name}
        </span>
      </div>
      <p className="text-sm mt-3" style={{ color: "var(--ink-soft)" }}>
        {district.note} &middot; province total:{" "}
        <span className="font-mono">
          {(province.outOfSchoolChildren / 1_000_000).toFixed(1)}M children
        </span>
      </p>
    </motion.div>
  );
}

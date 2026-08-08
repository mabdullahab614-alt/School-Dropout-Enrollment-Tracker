"use client";

import { motion } from "framer-motion";
import { School } from "@/app/lib/types";

export default function SchoolList({ schools }: { schools: School[] }) {
  if (schools.length === 0) {
    return (
      <div className="card p-5 text-sm" style={{ color: "var(--ink-soft)" }}>
        No listed schools yet for this district in our sample dataset.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="card p-5"
    >
      <p className="text-xs uppercase tracking-wide mb-3" style={{ color: "var(--ink-soft)" }}>
        Nearby schools
      </p>
      <ul className="flex flex-col divider">
        {schools.map((s) => (
          <li
            key={s.id}
            className="py-3 flex justify-between items-center border-t first:border-t-0"
            style={{ borderColor: "var(--line)" }}
          >
            <div>
              <p className="text-sm font-medium">{s.name}</p>
              <p className="text-xs" style={{ color: "var(--ink-soft)" }}>
                {s.level}
              </p>
            </div>
            <span
              className="text-xs px-2 py-1 rounded-full"
              style={{
                background: s.type === "Government" ? "var(--bg-alt)" : "#fbeccd",
                color: s.type === "Government" ? "var(--primary-dark)" : "var(--accent)",
              }}
            >
              {s.type}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

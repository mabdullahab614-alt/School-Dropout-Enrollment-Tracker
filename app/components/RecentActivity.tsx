"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RecentActivity() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchCount() {
      try {
        const res = await fetch("/api/recent-activity", { cache: "no-store" });
        const data = await res.json();
        if (!cancelled) setCount(data.count);
      } catch {
        // silently ignore — non-critical widget
      }
    }

    fetchCount();
    const interval = setInterval(fetchCount, 15000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (count === null) return null;

  return (
    <div className="max-w-5xl mx-auto px-6 -mt-2 mb-8">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
        style={{ background: "var(--bg-alt)", border: "1px solid var(--line)", color: "var(--ink-soft)" }}
      >
        <span
          className="w-2 h-2 rounded-full pulse-live"
          style={{ background: "var(--primary)" }}
        />
        <AnimatePresence mode="wait">
          <motion.span
            key={count}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-mono font-semibold" style={{ color: "var(--ink)" }}>
              {count}
            </span>{" "}
            {count === 1 ? "child" : "children"} flagged for follow-up in the
            last 24 hours
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

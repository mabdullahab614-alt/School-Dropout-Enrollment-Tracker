"use client";
import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
export default function Hero({ totalOutOfSchool }: { totalOutOfSchool: number }) {
  const target = totalOutOfSchool / 1_000_000;
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame: number;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-5xl mx-auto px-6 pt-14 pb-6"
    >
      <motion.div variants={item} className="flex items-center gap-2 mb-3">
        <span
          className="w-2 h-2 rounded-full pulse-live"
          style={{ background: "var(--primary)" }}
        />
        <p className="text-sm uppercase tracking-wide" style={{ color: "var(--trust)" }}>
          Pakistan &middot; education access
        </p>
      </motion.div>
      <motion.h1
        variants={item}
        className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-2xl"
      >
        <motion.span
          className="font-mono inline-block"
          style={{ color: "var(--alert)" }}
          animate={{ scale: count >= target * 0.999 ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 0.4 }}
        >
          {count.toFixed(1)}M
        </motion.span>{" "}
        children are out of school today.
      </motion.h1>
      <motion.p variants={item} className="mt-4 max-w-xl" style={{ color: "var(--ink-soft)" }}>
        Roll Call helps parents, teachers, and community workers see the real
        numbers for their district and find a nearby school to enroll a
        child, backed by UNICEF and PBS data.
      </motion.p>
      <motion.div variants={item}>
        <Link
          href="/lookup"
          className="btn inline-block mt-6 px-6 py-3 rounded-full font-medium"
          style={{ background: "var(--primary)", color: "#ffffff" }}
        >
          Check your district &rarr;
        </Link>
      </motion.div>
    </motion.section>
  );
}

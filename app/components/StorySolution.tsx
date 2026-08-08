"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const steps = [
  {
    title: "Find your district",
    desc: "Pick a province and district to see the real, sourced out-of-school rate for that area — not a national average that hides local reality.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21c-4.5-4-7-7.5-7-11a7 7 0 1 1 14 0c0 3.5-2.5 7-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: "See verified numbers",
    desc: "Every figure is backed by UNICEF Pakistan and the Pakistan Bureau of Statistics — no guesswork, no inflated claims.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19V9M12 19V5M20 19v-7" />
      </svg>
    ),
  },
  {
    title: "Flag a child, find a school",
    desc: "Know a child who isn't enrolled? Flag them for follow-up and browse nearby schools so a community worker can act.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 21V4a1 1 0 0 1 1-1h8l6 6v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
        <path d="M13 3v6h6" />
      </svg>
    ),
  },
];

export default function StorySolution() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="card p-6 sm:p-8 mb-8"
        style={{ borderLeft: "4px solid var(--trust)" }}
      >
        <p className="text-xs uppercase tracking-wide mb-2" style={{ color: "var(--trust)" }}>
          Why this matters
        </p>
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--ink)" }}>
          In parts of rural Balochistan, more than two out of three school-age
          children have never sat in a classroom. Not because their parents
          don&apos;t care — but because no one nearby could tell them how bad
          it really is, or where the closest school even is. Roll Call turns
          scattered national statistics into a number a parent, a teacher, or
          a community worker can actually act on for their own district.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p
          variants={item}
          className="text-xs uppercase tracking-wide mb-4"
          style={{ color: "var(--ink-soft)" }}
        >
          How Roll Call helps
        </motion.p>
        <div className="grid sm:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div key={s.title} variants={item} className="card p-5 h-full">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ background: "var(--bg)", color: "var(--trust)" }}
              >
                {s.icon}
              </div>
              <p className="text-xs mb-1" style={{ color: "var(--ink-soft)" }}>
                Step {i + 1}
              </p>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

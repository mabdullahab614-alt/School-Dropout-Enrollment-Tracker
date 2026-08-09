"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cards = [
  {
    title: "National Overview",
    desc: "Review the overarching statistics and identify the regions most severely impacted by educational absenteeism.",
    visual: (
      <div className="relative w-full h-32 rounded-lg overflow-hidden">
        <Image
          src="/images/national-overview.jpg"
          alt="Map showing national out-of-school children distribution"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "Provincial Data",
    desc: "Drill down into specific provinces to understand local challenges, resource allocation, and demographic trends.",
    visual: (
      <div
        className="w-full h-32 rounded-lg flex items-end justify-center gap-2 px-6 pb-4"
        style={{ background: "var(--bg-alt)" }}
      >
        {[65, 44, 34, 27, 15].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            className="w-6 rounded-t-sm"
            style={{
              background: `linear-gradient(180deg, var(--trust), var(--primary))`,
            }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Community Action",
    desc: "Connect with local initiatives, report out-of-school children, and contribute to targeted intervention programs.",
    visual: (
      <div
        className="w-full h-32 rounded-lg flex items-center justify-center"
        style={{ background: "var(--bg-alt)" }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="26" stroke="var(--trust)" strokeWidth="2" opacity="0.5" />
          <path
            d="M14 40h52M40 14c8 7 12 16 12 26s-4 19-12 26c-8-7-12-16-12-26s4-19 12-26z"
            stroke="var(--trust)"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <circle cx="40" cy="40" r="4" fill="var(--primary)" />
          <circle cx="26" cy="30" r="3" fill="var(--accent)" />
          <circle cx="54" cy="48" r="3" fill="var(--primary)" />
          <circle cx="30" cy="54" r="3" fill="var(--trust)" />
          <path d="M40 40L26 30M40 40l14 8M40 40l-10 14" stroke="var(--ink-soft)" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>
    ),
  },
];

export default function Overview() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
          From National Crisis to Local Reality
        </h2>
        <p className="max-w-xl mx-auto text-sm" style={{ color: "var(--ink-soft)" }}>
          Understanding the scope requires looking closer. See how the numbers translate to your province and community.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid sm:grid-cols-3 gap-5"
      >
        {cards.map((c) => (
          <motion.div
            key={c.title}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="card p-5 h-full"
          >
            <div className="mb-4">{c.visual}</div>
            <h3 className="font-display font-semibold mb-2">{c.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              {c.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

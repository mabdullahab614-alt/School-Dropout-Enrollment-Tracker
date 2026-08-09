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
      <div className="relative w-full h-32 rounded-lg overflow-hidden">
        <Image
          src="/images/provincial-data.jpg"
          alt="Children in a rural Pakistani province"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "Community Action",
    desc: "Connect with local initiatives, report out-of-school children, and contribute to targeted intervention programs.",
    visual: (
      <div className="relative w-full h-32 rounded-lg overflow-hidden">
        <Image
          src="/images/community-action.jpg"
          alt="Community members gathering in Pakistan"
          fill
          className="object-cover"
        />
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

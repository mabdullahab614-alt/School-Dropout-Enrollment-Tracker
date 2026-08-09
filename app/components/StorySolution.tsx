"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function StorySolution() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="card p-6 sm:p-8 mb-10"
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

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-wide mb-6"
        style={{ color: "var(--ink-soft)" }}
      >
        How Roll Call helps
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative"
      >
        {/* Connecting path line (desktop only) */}
        <div
          className="hidden sm:block absolute top-11 left-0 right-0 h-px"
          style={{
            background:
              "repeating-linear-gradient(to right, var(--line) 0, var(--line) 6px, transparent 6px, transparent 12px)",
          }}
        />

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 relative">
          {/* Step 1 */}
          <motion.div variants={item} className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm relative z-10"
                style={{ background: "var(--bg)", border: "2px solid var(--trust)", color: "var(--trust)" }}
              >
                1
              </span>
              <div className="h-px flex-1 sm:hidden" style={{ background: "var(--line)" }} />
            </div>
            <div
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4"
              style={{ border: "1px solid var(--line)" }}
            >
              <Image
                src="/images/community-kids.jpg"
                alt="Children in a rural Pakistani community"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="font-display font-semibold text-base mb-2">Find your district</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Pick a province and district to see the real, sourced
              out-of-school rate for that area — not a national average that
              hides local reality.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={item} className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm relative z-10"
                style={{ background: "var(--bg)", border: "2px solid var(--primary)", color: "var(--primary)" }}
              >
                2
              </span>
              <div className="h-px flex-1 sm:hidden" style={{ background: "var(--line)" }} />
            </div>
            <div
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4"
              style={{ border: "1px solid var(--line)" }}
            >
              <Image
                src="/images/classroom.jpg"
                alt="Students in a Pakistani classroom"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="font-display font-semibold text-base mb-2">See verified numbers</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Every figure is backed by UNICEF Pakistan and the Pakistan
              Bureau of Statistics — no guesswork, no inflated claims.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={item} className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm relative z-10"
                style={{ background: "var(--bg)", border: "2px solid var(--accent)", color: "var(--accent)" }}
              >
                3
              </span>
              <div className="h-px flex-1 sm:hidden" style={{ background: "var(--line)" }} />
            </div>
            <div
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4"
              style={{ border: "1px solid var(--line)" }}
            >
              <Image
                src="/images/flag-boy.jpg"
                alt="A boy on his way to school"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="font-display font-semibold text-base mb-2">
              Flag a child, find a school
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Know a child who isn&apos;t enrolled? Flag them for follow-up
              and browse nearby schools so a community worker can act.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

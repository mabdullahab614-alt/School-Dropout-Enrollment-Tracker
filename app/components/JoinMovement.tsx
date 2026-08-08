"use client";
import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { joinMovement } from "@/app/actions";

const roles = ["Parent", "Teacher", "Community worker", "Volunteer", "Other"];

export default function JoinMovement() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(roles[0]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <section className="max-w-5xl mx-auto px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="card p-6 sm:p-10 text-center"
        style={{ borderTop: "4px solid var(--primary)" }}
      >
        <p className="text-xs uppercase tracking-wide mb-2" style={{ color: "var(--primary-dark)" }}>
          Be part of the solution
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
          Join the movement
        </h2>
        <p className="max-w-xl mx-auto mb-8" style={{ color: "var(--ink-soft)" }}>
          Every district needs local eyes. Sign up to get updates on your
          area, volunteer opportunities, and ways to help a child get
          enrolled.
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-sm max-w-md mx-auto"
              style={{ color: "var(--primary-dark)" }}
            >
              You&apos;re in! We&apos;ll be in touch with ways to help in your
              area.
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                setError(null);
                startTransition(async () => {
                  try {
                    await joinMovement(name, email, role);
                    setSubmitted(true);
                  } catch {
                    setError("Couldn't sign you up just now — please try again.");
                  }
                });
              }}
            >
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="flex-1 border rounded-md px-3 py-2 text-sm"
                style={{ borderColor: "var(--line)", background: "var(--bg)" }}
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 border rounded-md px-3 py-2 text-sm"
                style={{ borderColor: "var(--line)", background: "var(--bg)" }}
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm"
                style={{ borderColor: "var(--line)", background: "var(--bg)" }}
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                type="submit"
                disabled={isPending}
                className="btn px-6 py-2 rounded-full text-sm font-medium disabled:opacity-60 whitespace-nowrap"
                style={{ background: "var(--primary)", color: "#ffffff" }}
              >
                {isPending ? "Joining..." : "Join now"}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
        {error && (
          <p className="text-xs mt-3" style={{ color: "var(--alert)" }}>
            {error}
          </p>
        )}
      </motion.div>
    </section>
  );
}

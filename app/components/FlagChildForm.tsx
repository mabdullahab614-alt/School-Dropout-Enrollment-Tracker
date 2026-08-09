"use client";
import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flagChild } from "@/app/actions";
import SuccessCard from "@/app/components/SuccessCard";
export default function FlagChildForm({
  districtId,
  districtName,
}: {
  districtId: string;
  districtName: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div key="thanks">
          <SuccessCard
            title="Thank you."
            message={`Your report for ${districtName} has been logged. This information helps us map the reality of the situation and allocate resources where they are needed most.`}
            primaryLabel="Explore More Data"
            primaryHref="/lookup"
            secondaryLabel="Return Home"
            secondaryHref="/"
          />
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="card card-flag p-5"
          onSubmit={(e) => {
            e.preventDefault();
            setError(null);
            startTransition(async () => {
              try {
                await flagChild(districtId, note);
                setSubmitted(true);
              } catch {
                setError("Couldn't save that just now — please try again.");
              }
            });
          }}
        >
          <p className="text-xs uppercase tracking-wide mb-3" style={{ color: "var(--ink-soft)" }}>
            Know a child who isn&apos;t enrolled?
          </p>
          <textarea
            required
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={`Age, gender, and nearest area in ${districtName}...`}
            className="w-full border rounded-md px-3 py-2 text-sm min-h-20"
            style={{ borderColor: "var(--line)" }}
          />
          {error && (
            <p className="text-xs mt-2" style={{ color: "var(--alert)" }}>
              {error}
            </p>
          )}
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            disabled={isPending}
            className="mt-3 px-5 py-2 rounded-full text-sm font-medium disabled:opacity-60"
            style={{ background: "var(--accent)", color: "#ffffff" }}
          >
            {isPending ? "Saving..." : "Flag for follow-up"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

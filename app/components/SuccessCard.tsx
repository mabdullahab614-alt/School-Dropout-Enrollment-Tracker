"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SuccessCard({
  title = "Thank you.",
  message,
  primaryLabel = "Explore More Data",
  primaryHref = "/lookup",
  secondaryLabel = "Return Home",
  secondaryHref = "/",
}: {
  title?: string;
  message: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card p-8 sm:p-12 text-center flex flex-col items-center"
    >
      <div className="relative w-24 h-24 flex items-center justify-center mb-6">
        <svg className="success-checkmark absolute inset-0 m-auto" viewBox="0 0 52 52">
          <circle className="success-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
          <path className="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
        <div className="success-ripple" />
        <div className="success-ripple success-ripple-2" />
      </div>
      <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">{title}</h2>
      <p
        className="max-w-md mx-auto mb-8 text-sm sm:text-base"
        style={{ color: "var(--ink-soft)" }}
      >
        {message}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        <Link
          href={primaryHref}
          className="btn flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium"
          style={{ background: "var(--primary)", color: "#ffffff" }}
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="btn flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium"
          style={{ background: "var(--ink)", color: "var(--bg)" }}
        >
          {secondaryLabel}
        </Link>
      </div>
    </motion.div>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Province, District, School } from "@/app/lib/types";
import SchoolList from "@/app/components/SchoolList";
import FlagChildForm from "@/app/components/FlagChildForm";

export default function LookupClient({
  provinces,
  districts,
  schools,
}: {
  provinces: Province[];
  districts: District[];
  schools: School[];
}) {
  const [provinceId, setProvinceId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [revealed, setRevealed] = useState(false);

  const filteredDistricts = districts.filter((d) => d.provinceId === provinceId);
  const province = provinces.find((p) => p.id === provinceId);
  const district = districts.find((d) => d.id === districtId);
  const districtSchools = district ? schools.filter((s) => s.district === district.id) : [];

  function handleProvinceChange(id: string) {
    setProvinceId(id);
    setDistrictId("");
    setRevealed(false);
  }

  function handleViewData() {
    if (province && district) setRevealed(true);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="font-display font-bold text-3xl sm:text-4xl">
          Find education options in your area.
        </h1>
        <p className="max-w-xl mx-auto text-base" style={{ color: "var(--ink-soft)" }}>
          Select a province and district to explore localized data regarding
          school attendance and community resources.
        </p>
      </div>

      {/* Selector card */}
      <div className="card p-8 flex flex-col gap-8">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label
              className="text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5"
              style={{ color: "var(--ink-soft)" }}
            >
              Province
            </label>
            <select
              value={provinceId}
              onChange={(e) => handleProvinceChange(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 h-12"
              style={{ borderColor: "var(--line)", background: "var(--bg)" }}
            >
              <option value="" disabled>Select a province</option>
              {provinces.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5"
              style={{ color: provinceId ? "var(--ink-soft)" : "var(--ink-soft)", opacity: provinceId ? 1 : 0.5 }}
            >
              District
            </label>
            <select
              value={districtId}
              disabled={!provinceId}
              onChange={(e) => { setDistrictId(e.target.value); setRevealed(false); }}
              className="w-full border rounded-lg px-4 py-3 h-12 disabled:cursor-not-allowed disabled:opacity-50"
              style={{ borderColor: "var(--line)", background: provinceId ? "var(--bg)" : "var(--bg-alt)" }}
            >
              <option value="" disabled>
                {provinceId ? "Select a district" : "Select province first"}
              </option>
              {filteredDistricts.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end pt-4" style={{ borderTop: "1px solid var(--line)" }}>
          <button
            onClick={handleViewData}
            disabled={!province || !district}
            className="btn px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: "var(--primary)", color: "#ffffff" }}
          >
            View Area Data &rarr;
          </button>
        </div>
      </div>

      {/* Data honesty disclosure */}
      <div className="flex items-start gap-4 p-6 rounded-lg card">
        <div className="flex-shrink-0 pt-0.5" style={{ color: "var(--trust)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" opacity="0.15" />
            <circle cx="12" cy="8" r="1.3" />
            <rect x="11" y="11" width="2" height="7" rx="1" />
          </svg>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "var(--ink)" }}>
            Data honesty
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            Province-level data is sourced from UNICEF Pakistan and PBS reports.
            District-level data may contain illustrative projections where
            localized reporting is sparse.
          </p>
        </div>
      </div>

      {/* Empty state graphic (shown before reveal) */}
      {!revealed && (
        <div className="w-full flex justify-center opacity-40 py-6">
          <div
            className="relative w-56 h-56 rounded-full flex items-center justify-center"
            style={{ background: "var(--bg-alt)" }}
          >
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="var(--ink-soft)" strokeWidth="1.2">
              <path d="M9 20l-5.5 2V6L9 4m0 16l6 2m-6-2V4m6 18l5.5-2V4L15 6m0 16V6m0 0L9 4" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--trust)" className="absolute top-8 right-8">
              <path d="M20 6L9 17l-5-5" stroke="var(--trust)" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--trust)" className="absolute bottom-10 left-8">
              <path d="M20 6L9 17l-5-5" stroke="var(--trust)" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      )}

      {/* Revealed data */}
      <AnimatePresence>
        {revealed && province && district && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold block mb-2" style={{ color: "var(--ink-soft)" }}>
                Region focus
              </span>
              <h2 className="font-display font-bold text-3xl mb-2">{province.name}</h2>
              <p style={{ color: "var(--ink-soft)" }}>{district.note}</p>
            </div>

            <div className="card p-1 w-full h-[340px] sm:h-[400px] overflow-hidden relative">
              <iframe
                key={district.id}
                title={"Map of " + district.name + ", " + province.name}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
                loading="lazy"
                src={"https://www.google.com/maps?q=" + encodeURIComponent(district.name + ", " + province.name + ", Pakistan") + "&output=embed"}
              />
              <div
                className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full text-xs font-medium pointer-events-none"
                style={{ background: "rgba(255,255,255,0.9)", color: "var(--ink)" }}
              >
                {district.name}, {province.name}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="card p-6">
                <span className="text-xs uppercase tracking-widest font-semibold block mb-2" style={{ color: "var(--alert)" }}>
                  Critical alert
                </span>
                <div className="font-mono font-bold text-3xl mb-1">
                  {(province.outOfSchoolChildren / 1_000_000).toFixed(1)}M
                </div>
                <p className="text-sm" style={{ color: "var(--ink-soft)" }}>Children out of school</p>
              </div>
              <div className="card p-6">
                <span className="text-xs uppercase tracking-widest font-semibold block mb-2" style={{ color: "var(--ink-soft)" }}>
                  School-age population
                </span>
                <div className="font-display font-semibold text-2xl">
                  {(province.ageCohort / 1_000_000).toFixed(1)}M
                </div>
              </div>
              <div className="card p-6">
                <span className="text-xs uppercase tracking-widest font-semibold block mb-2" style={{ color: "var(--ink-soft)" }}>
                  Out-of-school rate
                </span>
                <div className="font-display font-semibold text-2xl" style={{ color: "var(--alert)" }}>
                  {province.outOfSchoolRate}%
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <SchoolList schools={districtSchools} />
              <FlagChildForm districtId={district.id} districtName={district.name} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

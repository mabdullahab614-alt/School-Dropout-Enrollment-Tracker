"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
  const [provinceId, setProvinceId] = useState(provinces[0].id);
  const firstDistrict = districts.find((d) => d.provinceId === provinceId)!;
  const [districtId, setDistrictId] = useState(firstDistrict.id);

  const province = provinces.find((p) => p.id === provinceId)!;
  const district = districts.find((d) => d.id === districtId) ?? firstDistrict;
  const filteredDistricts = districts.filter((d) => d.provinceId === provinceId);
  const districtSchools = schools.filter((s) => s.district === district.id);

  function handleProvinceChange(id: string) {
    setProvinceId(id);
    const next = districts.find((d) => d.provinceId === id);
    if (next) setDistrictId(next.id);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="grid md:grid-cols-12 gap-8">

        {/* Context column */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div>
            <span
              className="text-xs uppercase tracking-widest font-semibold block mb-2"
              style={{ color: "var(--ink-soft)" }}
            >
              Region focus
            </span>
            <motion.h1
              key={province.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="font-display font-bold leading-none"
              style={{ fontSize: "3rem" }}
            >
              {province.name}
            </motion.h1>
            <p className="mt-4 text-base leading-relaxed max-w-md" style={{ color: "var(--ink-soft)" }}>
              {district.note}
            </p>
          </div>

          <motion.div
            key={province.id + "-stat"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card p-7 relative overflow-hidden"
          >
            <svg
              className="absolute -right-4 -top-4 opacity-5"
              width="140"
              height="140"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
              <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
            </svg>
            <span
              className="text-xs uppercase tracking-widest font-semibold block mb-3"
              style={{ color: "var(--alert)" }}
            >
              Critical alert
            </span>
            <div
              className="font-mono font-bold leading-none mb-2"
              style={{ fontSize: "3rem", letterSpacing: "-0.02em" }}
            >
              {(province.outOfSchoolChildren / 1_000_000).toFixed(1)}M
            </div>
            <h2 className="font-display font-semibold text-lg mb-2">Children out of school</h2>
            <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
              Across the province of {province.name}, requiring immediate targeted interventions.
            </p>
          </motion.div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide block mb-2" style={{ color: "var(--ink)" }}>
              Select a province
            </label>
            <select
              value={provinceId}
              onChange={(e) => handleProvinceChange(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 text-base mb-4"
              style={{ borderColor: "var(--line)", background: "var(--bg)" }}
            >
              {provinces.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>

            <label className="text-xs font-semibold uppercase tracking-wide block mb-2" style={{ color: "var(--ink)" }}>
              Select a district to view local data
            </label>
            <select
              value={districtId}
              onChange={(e) => setDistrictId(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 text-base"
              style={{ borderColor: "var(--line)", background: "var(--bg)" }}
            >
              {filteredDistricts.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Visualization column */}
        <div className="md:col-span-7 flex flex-col gap-5">
          <motion.div
            key={district.id + "-map"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="card p-1 w-full h-[340px] sm:h-[420px] flex items-center justify-center relative overflow-hidden"
            style={{ background: "var(--bg-alt)" }}
          >
            <svg width="100%" height="100%" viewBox="0 0 600 400" className="absolute inset-0 opacity-40">
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="var(--line)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="600" height="400" fill="url(#grid)" />
            </svg>
            <span
              className="font-display font-semibold text-xl sm:text-2xl relative"
              style={{ color: "var(--ink-soft)" }}
            >
              Interactive regional map &mdash; {district.name}
            </span>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              key={province.id + "-cohort"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="card p-6"
            >
              <span className="text-xs uppercase tracking-widest font-semibold block mb-2" style={{ color: "var(--ink-soft)" }}>
                School-age population
              </span>
              <div className="font-display font-semibold text-2xl">
                {(province.ageCohort / 1_000_000).toFixed(1)}M
              </div>
            </motion.div>
            <motion.div
              key={district.id + "-rate"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="card p-6"
            >
              <span className="text-xs uppercase tracking-widest font-semibold block mb-2" style={{ color: "var(--ink-soft)" }}>
                Out-of-school rate
              </span>
              <div className="font-display font-semibold text-2xl" style={{ color: "var(--alert)" }}>
                {province.outOfSchoolRate}%
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-1">
            <SchoolList schools={districtSchools} />
            <FlagChildForm districtId={district.id} districtName={district.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

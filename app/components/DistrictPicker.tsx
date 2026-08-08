"use client";

import { Province, District } from "@/app/lib/types";

export default function DistrictPicker({
  provinces,
  districts,
  provinceId,
  districtId,
  onProvinceChange,
  onDistrictChange,
}: {
  provinces: Province[];
  districts: District[];
  provinceId: string;
  districtId: string;
  onProvinceChange: (id: string) => void;
  onDistrictChange: (id: string) => void;
}) {
  const filtered = districts.filter((d) => d.provinceId === provinceId);

  return (
    <div className="card card-picker p-5 flex flex-col sm:flex-row gap-4">
      <label className="flex-1 text-sm">
        <span className="block mb-1" style={{ color: "var(--ink-soft)" }}>
          Province
        </span>
        <select
          value={provinceId}
          onChange={(e) => onProvinceChange(e.target.value)}
          className="w-full border rounded-md px-3 py-2"
          style={{ borderColor: "var(--line)" }}
        >
          {provinces.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </label>
      <label className="flex-1 text-sm">
        <span className="block mb-1" style={{ color: "var(--ink-soft)" }}>
          District
        </span>
        <select
          value={districtId}
          onChange={(e) => onDistrictChange(e.target.value)}
          className="w-full border rounded-md px-3 py-2"
          style={{ borderColor: "var(--line)" }}
        >
          {filtered.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

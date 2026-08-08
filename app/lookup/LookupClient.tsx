"use client";

import { useState } from "react";
import { Province, District, School } from "@/app/lib/types";
import DistrictPicker from "@/app/components/DistrictPicker";
import StatsPanel from "@/app/components/StatsPanel";
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
  const districtSchools = schools.filter((s) => s.district === district.id);

  function handleProvinceChange(id: string) {
    setProvinceId(id);
    const next = districts.find((d) => d.provinceId === id);
    if (next) setDistrictId(next.id);
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-6">
      <div>
        <h1 className="font-display text-3xl font-bold">Find your district</h1>
        <p className="mt-1" style={{ color: "var(--ink-soft)" }}>
          See verified enrollment stats and nearby schools.
        </p>
      </div>

      <DistrictPicker
        provinces={provinces}
        districts={districts}
        provinceId={provinceId}
        districtId={districtId}
        onProvinceChange={handleProvinceChange}
        onDistrictChange={setDistrictId}
      />

      <StatsPanel province={province} district={district} />

      <div className="grid md:grid-cols-2 gap-6">
        <SchoolList schools={districtSchools} />
        <FlagChildForm districtId={district.id} districtName={district.name} />
      </div>
    </div>
  );
}

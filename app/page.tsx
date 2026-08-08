import Hero from "@/app/components/Hero";
import ProvinceBar from "@/app/components/ProvinceBar";
import { getProvinces } from "@/app/lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const provinces = await getProvinces();
  const total = provinces.reduce((s, p) => s + p.outOfSchoolChildren, 0);

  return (
    <div>
      <Hero totalOutOfSchool={total} />
      <section id="sources" className="max-w-5xl mx-auto px-6 pb-16">
        <ProvinceBar provinces={provinces} />
        <p className="text-xs mt-3" style={{ color: "var(--ink-soft)" }}>
          Source: UNICEF Pakistan, Education overview, 2026
        </p>
      </section>
    </div>
  );
}

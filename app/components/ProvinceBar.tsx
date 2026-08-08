import { Province } from "@/app/lib/types";

function rateColor(rate: number) {
  if (rate >= 50) return "var(--alert)";
  if (rate >= 30) return "var(--accent)";
  return "var(--primary)";
}

export default function ProvinceBar({ provinces }: { provinces: Province[] }) {
  return (
    <div className="card p-5">
      <div
        className="flex justify-between text-xs uppercase tracking-wide mb-3 pb-2 divider"
        style={{ color: "var(--ink-soft)" }}
      >
        <span>Province</span>
        <span>Out-of-school rate</span>
      </div>
      <ul className="flex flex-col gap-4">
        {provinces.map((p) => (
          <li key={p.id}>
            <div className="flex justify-between items-baseline text-sm mb-1">
              <span className="font-medium">{p.name}</span>
              <span className="font-mono" style={{ color: rateColor(p.outOfSchoolRate) }}>
                {p.outOfSchoolRate}% &middot; {(p.outOfSchoolChildren / 1_000_000).toFixed(1)}M children
              </span>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: "var(--bg-alt)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${p.outOfSchoolRate}%`,
                  background: rateColor(p.outOfSchoolRate),
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

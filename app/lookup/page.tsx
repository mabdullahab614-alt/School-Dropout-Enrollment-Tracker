import { getProvinces, getDistricts, getSchools } from "@/app/lib/data";
import LookupClient from "@/app/lookup/LookupClient";

export const dynamic = "force-dynamic";

export default async function LookupPage() {
  const [provinces, districts, schools] = await Promise.all([
    getProvinces(),
    getDistricts(),
    getSchools(),
  ]);

  return (
    <LookupClient provinces={provinces} districts={districts} schools={schools} />
  );
}

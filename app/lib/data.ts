import { supabase } from "@/app/lib/supabase";
import { Province, District, School } from "@/app/lib/types";

export async function getProvinces(): Promise<Province[]> {
  const { data, error } = await supabase
    .from("provinces")
    .select("*")
    .order("out_of_school_rate", { ascending: false });
  if (error) throw error;
  return data.map((r) => ({
    id: r.id,
    name: r.name,
    outOfSchoolChildren: r.out_of_school_children,
    outOfSchoolRate: r.out_of_school_rate,
    ageCohort: r.age_cohort,
  }));
}

export async function getDistricts(): Promise<District[]> {
  const { data, error } = await supabase.from("districts").select("*");
  if (error) throw error;
  return data.map((r) => ({
    id: r.id,
    name: r.name,
    provinceId: r.province_id,
    note: r.note,
  }));
}

export async function getSchools(): Promise<School[]> {
  const { data, error } = await supabase.from("schools").select("*");
  if (error) throw error;
  return data.map((r) => ({
    id: r.id,
    name: r.name,
    district: r.district_id,
    province: r.province_id,
    level: r.level,
    type: r.type,
  }));
}

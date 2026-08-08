"use server";
import { supabase } from "@/app/lib/supabase";
export async function flagChild(districtId: string, note: string) {
  const { error } = await supabase
    .from("flagged_children")
    .insert({ district_id: districtId, note });
  if (error) throw error;
  return { ok: true };
}
export async function joinMovement(name: string, email: string, role: string) {
  const { error } = await supabase
    .from("movement_signups")
    .insert({ name, email, role });
  if (error) throw error;
  return { ok: true };
}

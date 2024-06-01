"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function createFixture(formData: FormData) {
  const supabase = createClient();

  const location = formData.get("location");
  const date = formData.get("date");

  if (!location || !date) {
    throw new Error("Please fill in all the fields");
  }

  const { data, error } = await supabase.from("Matches").insert([
    {
      location,
      date,
    },
  ]);

  revalidatePath("/fixtures");
}

export async function getFixtures() {
  const supabase = createClient();

  const { data, error } = await supabase.from("Matches").select("*");

  if (error) {
    throw error;
  }

  return data;
}

'use server';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function getPlayers() {
  const supabase = createClient();

  const { data, error } = await supabase.from('Players').select('*');

  if (error) {
    throw error;
  }

  return data;
}

export const getUnselectedPlayers = async () => {
  const supabase = createClient();
};

export async function createPlayer(formData: FormData) {
  const supabase = createClient();

  const name = formData.get('name');
  const position = formData.get('position');
  const profileUrlEntry = formData.get('profileUrl');

  let profileUrl = '';
  if (profileUrlEntry instanceof File) {
    profileUrl = profileUrlEntry.name;
  } else if (typeof profileUrlEntry === 'string') {
    profileUrl = profileUrlEntry;
  }

  const { data, error } = await supabase.from('Players').insert({
    name,
    position,
    profileUrl,
  });

  if (error) {
    throw error;
  }

  revalidatePath('/players');
  return data;
}

'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function createFixture(formData: FormData) {
  const supabase = createClient();

  const location = formData.get('location');
  const date = formData.get('date');

  if (!location || !date) {
    throw new Error('Please fill in all the fields');
  }

  const { data, error } = await supabase.from('Matches').insert([
    {
      location,
      date,
    },
  ]);

  revalidatePath('/fixtures');
}

export async function getFixtures() {
  const supabase = createClient();

  const { data, error } = await supabase.from('Matches').select(`
    id, 
    date,
    location, 
    Teams ( id, name, score )
  `);

  if (error) {
    throw error;
  }

  return data;
}

export const getFixturesById = async (id: number) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('Matches')
    .select(
      `
    id, 
    date,
    location, 
    Teams ( id, name, score )
  `
    )
    .eq('id', id);

  if (error) {
    throw error;
  }

  return data;
};

export const removeFixture = async () => {};

export const getTeamByMatchId = async (id: number) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('Teams')
    .select('*')
    .eq('match_id', id);

  if (error) {
    throw error;
  }

  return {
    team1: data[0],
    team2: data[1],
  };
};

export const editFixture = async (formData: FormData) => {
  console.log(formData);
};

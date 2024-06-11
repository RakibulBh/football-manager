'use server';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { DatabasePlayers } from '../fixtures/[id]/types';

export async function getPlayers() {
  const supabase = createClient();

  const { data, error } = await supabase.from('Players').select('*');

  if (error) {
    throw error;
  }

  return data;
}

export const getUnselectedPlayers = async (
  teamAId: string,
  teamBId: string
) => {
  const supabase = createClient();

  const { data: allPlayers, error } = await supabase
    .from('Players')
    .select('id,name,position,profileUrl');

  if (error) {
    return;
  }

  const {
    data: playersInTeam,
    error: playersInTeamError,
  }: { data: any; error: any } = await supabase
    .from('Team_Player')
    .select('Teams(id), Players(id)');

  if (playersInTeamError) {
    return;
  }

  const selectedPlayers = [];
  const unselectedPlayers: DatabasePlayers[] = [];

  for (let i = 0; i < playersInTeam!.length; i++) {
    const currentTeam = playersInTeam![i];
    const currentTeamId = currentTeam.Teams.id;
    const currentPlayer = currentTeam.Players;
    if (currentTeamId === teamAId || currentTeamId === teamBId) {
      selectedPlayers.push(currentPlayer);
    }
  }

  const setId = new Set(selectedPlayers.map((item) => item.id));

  for (let i = 0; i < allPlayers.length; i++) {
    if (!setId.has(allPlayers[i].id)) {
      unselectedPlayers.push(allPlayers[i]);
    }
  }

  return unselectedPlayers;
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

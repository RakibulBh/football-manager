'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { editFixtureSchema, EditFixtureType } from '@/zod-schemas';
import { DatabasePlayers } from './[id]/types';

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
    .select(
      `
      id,
      match_id,
      name,
      score,
      Players(id, profileUrl, name, position)
      `
    )
    .eq('match_id', id);

  if (error) {
    throw error;
  }

  return {
    teamA: data[0],
    teamB: data[1],
  };
};

type Team = {
  id: any;
  name: any;
};

const createTeamIfNotExist = async (
  team: Team,
  name: string,
  matchId: string
) => {
  const supabase = createClient();

  const createTeam = team;

  if (!createTeam) {
    const { error } = await supabase
      .from('Teams')
      .insert({ name, match_id: matchId });

    return {
      error: error?.message,
      team: null,
    };
  }

  return {
    team: createTeam,
    error: null,
  };
};

const updateTeamsName = async (name: string, teamId: string) => {
  const supabase = createClient();

  return await supabase.from('Teams').update({ name }).eq('id', teamId);
};

const addPlayersToTeam = async (players: DatabasePlayers[], teamId: string) => {
  const supabase = createClient();

  console.log(players);

  for (const player of players) {
    const { error } = await supabase
      .from('Team_Player')
      .insert({ team_id: teamId, player_id: player.id });

    if (error) {
      return {
        error,
      };
    }
  }

  return {
    error: null,
  };
  // supabase.from('Team_Player').update({ name }).eq('id', 'teamId');
};

export const editFixture = async (
  players: any,
  prevData: any,
  formData: FormData
) => {
  const dataEntries = Object.fromEntries(formData);
  const safeParse = editFixtureSchema.safeParse(dataEntries);

  if (!safeParse.success) {
    return {
      message: 'Invalid Data',
      error: safeParse.error.message,
      status: 400,
    };
  }

  const matchId = safeParse.data.matchId;
  const teamAName = safeParse.data.teamA;
  const teamBName = safeParse.data.teamB;

  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from('Matches')
      .select('Teams( id, name )')
      .eq('id', Number(safeParse.data.matchId));

    if (error) {
      return {
        message: 'failed to query matches',
        status: 400,
      };
    }

    const { team: createTeamA, error: createTeamAError } =
      await createTeamIfNotExist(data![0].Teams[0], teamAName, matchId);
    const { team: createTeamB, error: createTeamBError } =
      await createTeamIfNotExist(data![0].Teams[1], teamBName, matchId);

    if (createTeamAError) {
      return {
        message: 'failed to create team A',
        error: createTeamAError,
        status: 400,
      };
    }

    if (createTeamBError) {
      return {
        message: 'failed to create team B',
        error: createTeamBError,
        status: 400,
      };
    }

    const { error: updateTeamANameError } = await updateTeamsName(
      teamAName,
      createTeamA?.id
    );
    const { error: updateTeamBNameError } = await updateTeamsName(
      teamBName,
      createTeamB?.id
    );

    if (updateTeamANameError) {
      return {
        error: updateTeamANameError.message,
        message: 'failed to update team A name',
        status: 404,
      };
    }

    if (updateTeamBNameError) {
      return {
        error: updateTeamBNameError.message,
        message: 'failed to update team A name',
        status: 404,
      };
    }

    const { error: addPlayersToTeamAError } = await addPlayersToTeam(
      players.teamA,
      createTeamA?.id
    );
    const { error: addPlayersToTeamBError } = await addPlayersToTeam(
      players.teamB,
      createTeamB?.id
    );

    if (addPlayersToTeamAError) {
      return {
        error: addPlayersToTeamAError.message,
        message: 'failed to update team A name',
        status: 404,
      };
    }

    if (addPlayersToTeamBError) {
      return {
        error: addPlayersToTeamBError.message,
        message: 'failed to update team A name',
        status: 404,
      };
    }

    return { message: 'updated', error: null, status: 200 };
  } catch (error) {
    return {
      error: error,
      message: 'error occured',
      status: 400,
    };
  }
};

export const removePlayerFromTeam = async (userId: string, teamId: string) => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from('Team_Player')
      .delete()
      .eq('player_id', userId);

    if (error) {
      return {
        message: 'failed to delete player',
        error,
        status: 400,
      };
    }

    return {
      message: 'removed player from team',
      error: null,
      status: 200,
    };
  } catch (error) {
    return {
      message: 'error occured while deleting player',
      error,
      status: 400,
    };
  }
};

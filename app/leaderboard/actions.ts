"use server";

import { createClient } from "@/utils/supabase/server";
import Error from "next/error";

export const getLeaderboardPlayers = async () => {
  const supabase = createClient();

  const playerStatsQuery = await supabase.from("Players").select(
    `
    id, 
    name, 
    position,
    Goals (id, Role)
  `
  );

  const { data, error } = await playerStatsQuery;
  if (error) throw error;

  if (error) {
    console.log(error);
  }

  const playersWithGoalCount = data.map((player) => ({
    id: player.id,
    name: player.name,
    position: player.position,
    goalCount: player.Goals.length,
  }));

  // Sorting players by the number of goals in descending order
  const sortedPlayers = playersWithGoalCount.sort(
    (a, b) => b.goalCount - a.goalCount
  );

  return playersWithGoalCount;
};

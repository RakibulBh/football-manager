import { createClient } from "@/utils/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { getPlayers } from "../players/actions";
import PlayerLeaderboardCard from "./player-leaderboard-card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getLeaderboardPlayers } from "./actions";

function LeaderboardTable({ players }: { players: any }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Player</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Assists</TableHead>
          <TableHead className="text-right">Goals</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {players.map((player: any, index: any) => (
          <TableRow key={player.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{player.name}</TableCell>
            <TableCell>{player.position}</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-right">{player.goalCount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default async function Leaderboard() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  const playerStats = await getLeaderboardPlayers();

  return (
    <div className="w-full h-full">
      <div className="w-full h-[8%] py-4 bg-[#725BF4] px-5 flex items-center justify-between">
        <div className="gap-x-4 flex items-center ">
          <Link href="/">
            <ArrowLeft size={40} />
          </Link>
          <h1 className="text-2xl font-semibold">Leaderboard</h1>
        </div>
      </div>
      <div className="flex flex-col h-[92%] items-center pt-10 space-y-1">
        <div className="bg-[#1C212D] w-[60rem] h-[15rem] p-4 rounded-t-md">
          <div className="flex justify-between">
            <h1>Stats</h1>
            <p>All time overall stats</p>
          </div>
        </div>
        <div className="bg-[#1C212D] md:w-[60rem] md:h-[25rem] overflow-y-auto px-4 py-2 flex flex-col">
          <LeaderboardTable players={playerStats} />
        </div>
      </div>
    </div>
  );
}

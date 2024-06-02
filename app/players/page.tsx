import SubmitButton from "@/components/submitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/utils/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { createPlayer, getPlayers } from "./actions";
import PlayerCard from "./player-card";
import { redirect } from "next/navigation";
import AddPlayerForm from "./addPlayerForm";

export default async function Players() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  const players = await getPlayers();

  return (
    <div className="w-full h-full">
      <div className="w-full h-[8%] py-4 bg-[#725BF4] px-5 flex items-center justify-between">
        <div className="gap-x-4 flex items-center ">
          <Link href="/">
            <ArrowLeft size={40} />
          </Link>
          <h1 className="text-2xl font-semibold">Players</h1>
        </div>
      </div>
      <div className="flex w-full h-[92%]">
        <div className="w-1/2 h-full p-6 space-y-4">
          {players &&
            players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
        </div>
        <div className="w-1/2 h-full flex justify-center pt-14 px-4">
          <AddPlayerForm />
        </div>
      </div>
    </div>
  );
}

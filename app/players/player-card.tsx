import { User } from "lucide-react";
import React from "react";

export default function PlayerCard({ player }: { player: any }) {
  return (
    <div className="w-full rounded-md bg-[#725BF4] py-2 px-4 flex items-center justify-between">
      <div className="flex gap-x-2">
        <User />
        <h1>{player.name}</h1>
      </div>
      <p>{player.position}</p>
    </div>
  );
}

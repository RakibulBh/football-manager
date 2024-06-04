import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export default function PlayerLeaderboardCard({ player }: { player: any }) {
  return (
    <div className="w-full px-6 py-4 flex justify-between items-center">
      <div className="flex gap-x-4 items-center">
        <p>1</p>
        <div className="flex gap-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            {player.name}
            <p>{player.position}</p>
          </div>
        </div>
      </div>
      <div>
        <p>200</p>
      </div>
    </div>
  );
}

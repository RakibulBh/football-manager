import { User } from "lucide-react";
import React from "react";

import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function PlayerHoverCard({ player }: { player: any }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="w-full rounded-md bg-[#725BF4] py-2 px-4 flex items-center justify-between">
          <div className="flex gap-x-2">
            <User />
            <h1>{player.name}</h1>
          </div>
          <p>{player.position}</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{player.name}</h4>
            <p className="text-sm">{player.position}</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Date of Birth December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

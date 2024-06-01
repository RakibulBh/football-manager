import React from "react";
import TeamScore from "./team-score";

export default function MatchFixture() {
  return (
    <div className="w-full h-48 bg-[#1B1D37] rounded-md px-1">
      <div className="border-b-[1px] h-[35%] border-[#535360] p-2">
        <p className="text-md">No league</p>
        <p className="text-sm text-[#535360]">Matchday 1</p>
      </div>
      <div className="flex h-[65%] py-2 px-2 w-full">
        <div className="w-1/2 pr-8 flex flex-col justify-between border-r-[1px] border-r-[#535360]">
          <TeamScore />
          <TeamScore />
        </div>
        <div className="w-1/2 flex h-full items-center justify-center">
          <p>20/05/23 20:00</p>
        </div>
      </div>
    </div>
  );
}

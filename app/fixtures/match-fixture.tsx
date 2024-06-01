import React from "react";
import TeamScore from "@/app/fixtures/team-score";
import { Pencil } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export default async function MatchFixture({ match }: { match: any }) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <div className="w-full h-48 bg-[#1B1D37] rounded-md px-1">
      <div className="border-b-[1px] flex items-center justify-between h-[35%] border-[#535360] p-2 pr-6">
        <div>
          <p className="text-md">No league</p>
          <p className="text-sm text-[#535360]">Matchday 1</p>
        </div>
        {!error && data?.user && <Pencil size={20} />}
      </div>
      <div className="flex h-[65%] py-2 px-2 w-full">
        <div className="w-1/2 pr-8 flex flex-col justify-between border-r-[1px] border-r-[#535360]">
          <TeamScore />
          <TeamScore />
        </div>
        <div className="w-1/2 flex h-full items-center justify-center">
          <p>{match.date}</p>
        </div>
      </div>
    </div>
  );
}

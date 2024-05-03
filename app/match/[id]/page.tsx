"use client"

import MatchSummary from "@/components/match-summary";
import ProfileStatistic from "@/components/profile-statistic";
import { ArrowLeft, Info, MapPin } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MatchInfoText } from "./match-info-text";


function MatchInfoPage() {
  const params = useParams();
  const { id } = params;

  return (
    <div className="h-screen w-full flex flex-col gap-y-14">
      <div className="pt-3 px-3 w-full flex-col h-[400px] bg-[#725BF4]">
        <Link href='/'>
          <ArrowLeft width={50} height={50} />
        </Link>
        <MatchSummary/>
        <div className="flex justify-between">
          <p>Overview</p>
          <p>Stats</p>
          <p>Line-up</p>
        </div>
      </div>
      <div className="w-full justify-between h-60 flex flex-col gap-y-10 p-4 bg-[#1B1D37]">
          <div className="w-full">
            <h1>MAN OF THE MATCH</h1>
            <div className="w-full h-[2px] mt-3 bg-[#535360]"/>
          </div>
          <ProfileStatistic/>
          <div/>
      </div>
      <div className="w-full justify-between h-60 flex flex-col gap-y-10 p-4 bg-[#1B1D37]">
          <div className="w-full">
            <h1>MATCH INFO</h1>
            <div className="w-full h-[2px] mt-3 bg-[#535360]"/>
          </div>  
          <div className="flex justify-between">
            <div className="flex gap-x-5 items-center">
              <Info width={50} height={50} />
              <MatchInfoText title="Kick-off" description="20/05/24 20:00" />
            </div>
            <div className="flex gap-x-5 items-center">
              <MapPin width={50} height={50} />
              <MatchInfoText title="Stepney Green" description="E1" />
            </div>
            <div/>
          </div>
          <div/>
      </div>
    </div>
  )


}

export default MatchInfoPage

"use client";

import MatchSummary from "@/components/match-summary";
import ProfileStatistic from "@/components/profile-statistic";
import { ArrowLeft, Info, MapPin } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MatchInfoText } from "./match-info-text";
import Team from "@/components/team-icon";
import { useState } from "react";

type TabsOptions = "overview" | "stats" | "line-up";

const OverviewSection = () => {
  return (
    <>
      <div className="w-full justify-between h-60 flex flex-col gap-y-10 p-4 bg-[#1B1D37]">
        <div className="w-full">
          <h1>MAN OF THE MATCH</h1>
          <div className="w-full h-[2px] mt-3 bg-[#535360]" />
        </div>
        <ProfileStatistic />
        <div />
      </div>
      <div className="w-full justify-between h-60 flex flex-col gap-y-10 p-4 bg-[#1B1D37]">
        <div className="w-full">
          <h1>MATCH INFO</h1>
          <div className="w-full h-[2px] mt-3 bg-[#535360]" />
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
          <div />
        </div>
        <div />
      </div>
    </>
  );
};

const Statistics = () => {
  return (
    <div>
      <h2>STATISTICS</h2>
      <div>
        <div>
          <h3>RAKIBUL BHUIYAN</h3>
        </div>
        <div>
          <h3>WAELL AZIZ</h3>
        </div>
        <div>
          <h3>ANAN MIR</h3>
        </div>
        <div>
          <h3>SALMAN</h3>
        </div>
        <div>
          <h3>MAHDI RAHMAN</h3>
        </div>
        <div>
          <h3>MOHAMMED MUHSIN AHMED</h3>
        </div>
      </div>
    </div>
  );
};

function MatchInfoPage() {
  const params = useParams();
  const { id } = params;
  const [activeTab, setActiveTab] = useState<TabsOptions>("overview");

  console.log(activeTab);

  return (
    <div className="space-y-24 w-full h-full">
      <div className="flex flex-col bg-[#725BF4] h-96">
        <div>
          <button className="px-3">
            <Link href="/">
              <ArrowLeft width={50} height={50} />
            </Link>
          </button>
        </div>
        <div className="flex flex-col items-center h-full">
          <div className="flex w-3/5 flex-col justify-between flex-1">
            <MatchSummary score="1 - 0" />
            <div className="">
              <ul className="flex justify-between w-full">
                <li
                  onClick={() => setActiveTab("overview")}
                  className={`cursor-pointer ${
                    activeTab === "overview" && "border-b-4"
                  }`}
                >
                  Overview
                </li>
                <li
                  onClick={() => setActiveTab("stats")}
                  className={`cursor-pointer ${
                    activeTab === "stats" && "border-b-4"
                  }`}
                >
                  Stats
                </li>
                <li
                  onClick={() => setActiveTab("line-up")}
                  className={`cursor-pointer ${
                    activeTab === "line-up" && "border-b-4"
                  }`}
                >
                  Line Up
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {activeTab === "overview" ? (
        <OverviewSection />
      ) : activeTab === "stats" ? (
        <>
          <Statistics />
        </>
      ) : (
        <>
          <h1>line-up</h1>
        </>
      )}
    </div>
  );
}

export default MatchInfoPage;

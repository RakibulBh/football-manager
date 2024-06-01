import { MatchHistory } from "@/components/match-history";
import MatchSummary from "@/components/match-summary";
import SheetMobile from "@/components/sheet";
import { Sidebar } from "@/components/sidebar";
import Team from "@/app/fixtures/team-icon";
import { Menu } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="hidden lg:block w-[350px]">
        <Sidebar />
      </div>
      <div className="h-full lg:hidden pt-3 px-2 flex flex-col items-center">
        <SheetMobile />
      </div>
      <main className="h-full w-full flex-1 pt-4 px-4 flex flex-col gap-y-4">
        <div className="p-4 flex justify-center w-full h-[200px] lg:h-[400px] bg-[#725BF4] rounded-lg">
          <MatchSummary score="" />
        </div>
        <p className="text-xl font-bold">Match history</p>
        <MatchHistory />
      </main>
    </>
  );
};

export default Home;

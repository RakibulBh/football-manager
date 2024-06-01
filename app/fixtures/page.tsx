import FixtureSection from "@/components/fixture-section";
import MatchFixture from "@/components/match-fixture";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function FixturesPage() {
  return (
    <div className="h-full w-full flex flex-col gap-y-24">
      <div className="w-full gap-x-4 bg-[#725BF4] px-5 flex items-center">
        <Link href="/">
          <ArrowLeft size={40} />
        </Link>
        <h1 className="text-2xl font-semibold">Fixtures</h1>
      </div>
      <div className="px-2 flex flex-col gap-y-8">
        <FixtureSection time="This week" />
        <FixtureSection time="Next week" />
      </div>
    </div>
  );
}

export default FixturesPage;

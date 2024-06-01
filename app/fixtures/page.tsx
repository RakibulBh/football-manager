import { FixtureDialog } from "@/app/fixtures/addFixtureDialog";
import FixtureSection from "@/app/fixtures/fixture-section";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { getFixtures } from "./actions";

async function FixturesPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  const matches = await getFixtures();

  return (
    <div className="h-full w-full flex flex-col gap-y-24">
      <div className="w-full py-4 bg-[#725BF4] px-5 flex items-center justify-between">
        <div className="gap-x-4 flex items-center ">
          <Link href="/">
            <ArrowLeft size={40} />
          </Link>
          <h1 className="text-2xl font-semibold">Fixtures</h1>
        </div>
        {!error && data?.user && <FixtureDialog />}
      </div>
      <div className="px-2 flex flex-col gap-y-8">
        <FixtureSection matches={matches} time="This week" />
        <FixtureSection matches={matches} time="Next week" />
      </div>
    </div>
  );
}

export default FixturesPage;

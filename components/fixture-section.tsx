import React from "react";
import MatchFixture from "./match-fixture";

export default function FixtureSection({ time }: { time: string }) {
  return (
    <div className="space-y-2">
      <p className="font-semibold">{time}</p>
      <div className="flex flex-col gap-y-4">
        <MatchFixture />
        <MatchFixture />
      </div>
    </div>
  );
}

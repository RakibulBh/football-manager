import React from 'react';
import MatchFixture from './match-fixture';

export default function FixtureSection({
  time,
  matches,
}: {
  time: string;
  matches: any[];
}) {
  return (
    <div className='space-y-2'>
      <p className='font-semibold'>{time}</p>
      <div className='flex flex-col gap-y-4'>
        {matches.map((match) => (
          <MatchFixture
            key={match.id}
            id={match.id}
            location={match.location}
            date={match.date}
          />
        ))}
      </div>
    </div>
  );
}

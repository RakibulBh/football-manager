import React from 'react';
import MatchFixture from './match-fixture';
import { Tables } from '@/types/supabase';

type FixtureSectionProps = {
  time: string;
  matches: any[];
};

export default function FixtureSection({ time, matches }: FixtureSectionProps) {
  return (
    <div className='space-y-2 mx-5'>
      <h2 className='font-semibold'>{time}</h2>
      <div className='flex flex-col gap-y-4'>
        {matches.map((match) => (
          <div key={match.id}>
            <MatchFixture
              key={match.id}
              id={match.id}
              location={match.location}
              date={match.date}
              teams={match.Teams}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

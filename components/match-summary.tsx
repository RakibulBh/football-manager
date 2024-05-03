import React from 'react';
import Team from './team-icon';

type MatchSummaryProps = {
  score: string;
};

export default function MatchSummary({ score }: MatchSummaryProps) {
  return (
    <div className='grid grid-rows-2'>
      <Team imageUrl='/inter.png' className='' />
      <div className='gap-y-3 flex flex-col items-center text-center'>
        <h2 className='text-6xl font-bold'>1 : 0</h2>
        <p className='text-sm font-semibold lg:font-bold'>
          last match 07/05/2024
        </p>
      </div>
      <Team imageUrl='/inter.png' />
    </div>
  );
}

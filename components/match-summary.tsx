import React from 'react';
import Team from './team-icon';

type MatchSummaryProps = {
  score: string;
};

export default function MatchSummary({ score }: MatchSummaryProps) {
  return (
    <div className='grid grid-rows-2 grid-cols-2 justify-items-center sm:flex sm:flex-1 sm:justify-between sm:items-center'>
      <Team imageUrl='/inter.png' className='row-start-1 col-start-1 ' />
      <div className='col-start-1 col-end-3 space-y-5 text-center my-5 sm:my-2 md:my-0'>
        <h2 className='text-6xl font-bold'>{score}</h2>
        <p className='text-sm font-semibold lg:font-bold'>
          last match 07/05/2024
        </p>
      </div>
      <Team imageUrl='/inter.png' className='row-start-1 col-start-2' />
    </div>
  );
}

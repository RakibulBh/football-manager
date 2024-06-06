import React from 'react';
import Team from './team-icon';

type MatchSummaryProps = {
  score1: number;
  score2: number;
};

export default function MatchSummary({ score1, score2 }: MatchSummaryProps) {
  return (
    <div className='grid grid-rows-2 grid-cols-2 justify-items-center sm:flex sm:flex-1 sm:justify-between sm:items-center'>
      <Team imageUrl='/inter.png' className='row-start-1 col-start-1 ' />
      <div className='col-start-1 col-end-3 space-y-5 text-center my-5 sm:my-2 md:my-0'>
        <span className='text-6xl font-bold'>
          {score1} : {score2}
        </span>
        <p className='text-sm font-semibold lg:font-bold'>
          last match 07/05/2024
        </p>
      </div>
      <Team imageUrl='/inter.png' className='row-start-1 col-start-2' />
    </div>
  );
}

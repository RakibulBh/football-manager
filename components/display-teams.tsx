import React from 'react';
import Image from 'next/image';

type DisplayTeamProps = {
  name: string;
  score: number;
};

type DisplayTeamsProps = {
  teams: {
    id: number;
    name: string;
    match_id: number;
    score: number;
  }[];
};

export const DisplayTeam = ({ name, score }: DisplayTeamProps) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-x-4'>
        <Image alt='Team logo' width={40} height={40} src='/inter.png' />
        <h2>{name}</h2>
      </div>
      <span>{score}</span>
    </div>
  );
};

export const DisplayTeams = ({ teams }: DisplayTeamsProps) => {
  return (
    <div className='flex flex-col justify-between flex-1 pr-8 space-y-3 border-r-[1px] border-r-[#535360]'>
      {teams.length ? (
        <>
          {teams.map((item) => (
            <DisplayTeam key={item.id} name={item.name} score={item.score} />
          ))}
        </>
      ) : (
        <div>
          <DisplayTeam name='Choose team 1 name' score={0} />
          <DisplayTeam name='Choose team 2 name' score={0} />
        </div>
      )}
    </div>
  );
};

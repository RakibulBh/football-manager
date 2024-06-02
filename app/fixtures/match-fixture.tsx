import React from 'react';
import TeamScore from '@/app/fixtures/team-score';
import { createClient } from '@/utils/supabase/server';
import { EditFixture } from '@/components/edit-fixture';

type MatchFixtureProps = {
  id: number;
  date: string;
  location: string;
};

export default async function MatchFixture({
  id,
  date,
  location,
}: MatchFixtureProps) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <div className='w-full h-48 bg-[#1B1D37] rounded-md px-1'>
      <div className='border-b-[1px] flex items-center justify-between h-[35%] border-[#535360] p-2 pr-6'>
        <div>
          <p className='text-md'>No League</p>
          <p className='text-sm text-[#535360]'>Matchday 1</p>
        </div>
        {!error && data?.user && <EditFixture id={id} />}
      </div>
      <div className='flex h-[65%] py-2 px-2 w-full'>
        <div className='w-1/2 pr-8 flex flex-col justify-between border-r-[1px] border-r-[#535360]'>
          <TeamScore id={id} />
          <TeamScore id={id} />
        </div>
        <div className='w-1/2 flex flex-col h-full items-center justify-center'>
          <h3>{date}</h3>
          <h3>{location}</h3>
        </div>
      </div>
    </div>
  );
}

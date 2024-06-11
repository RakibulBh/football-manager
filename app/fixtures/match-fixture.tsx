import React from 'react';
import { DisplayTeams } from '@/components/display-teams';
import { createClient } from '@/utils/supabase/server';
import { EditFixture } from '@/components/edit-fixture';
import Link from 'next/link';
import { Delete, DeleteIcon, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Teams = {
  id: number;
  name: string;
  match_id: number;
  score: number;
};

type MatchFixtureProps = {
  id: number;
  date: string;
  location: string;
  teams: Teams[];
};

export default async function MatchFixture({
  id,
  date,
  location,
  teams,
}: MatchFixtureProps) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <div className='bg-[#1B1D37] rounded-md'>
      <div className='flex items-center justify-between h-[35%] border-[#535360] border-b-[1px] p-2 pr-6'>
        <div>
          <p className='text-md'>No League</p>
          <p className='text-sm text-[#535360]'>Matchday 1</p>
        </div>
        {!error && data?.user && (
          <div className='flex space-x-5'>
            <Trash2 />
            <button>
              <Link href={`/fixtures/${id}`}>
                <Pencil size={20} />
              </Link>
            </button>
          </div>
        )}
      </div>
      <div className='flex p-2'>
        <DisplayTeams teams={teams} />
        <div className='flex items-center justify-center flex-1 flex-col'>
          <h3>{date}</h3>
          <h3>{location}</h3>
        </div>
      </div>
    </div>
  );
}

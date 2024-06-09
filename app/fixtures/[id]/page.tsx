import MatchSummary from '@/components/match-summary';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getFixturesById, getTeamByMatchId } from '../actions';
import { Tables } from '@/types/supabase';
import Image from 'next/image';
import { EditFixtureForm } from './edit-fixture-form';
import { getPlayers } from '@/app/players/actions';

const FixtureTopBar = async () => {
  return (
    <div className='flex items-center justify-between py-4 px-5 bg-[#725BF4]'>
      <div className='flex items-center gap-x-4'>
        <Link href='/fixtures'>
          <ArrowLeft size={40} />
        </Link>
        <h2 className='text-2xl font-semibold'>Editing Fixtures</h2>
      </div>
      <div>
        <Button variant='outline'>Remove Match</Button>
        <Button type='submit' form='edit-form' variant='outline'>
          Submit Changes
        </Button>
      </div>
    </div>
  );
};

const EditFixture = async ({ params }: { params: { id: string } }) => {
  const { team1, team2 } = await getTeamByMatchId(Number(params.id));
  const allPlayers = await getPlayers();

  return (
    <div>
      <FixtureTopBar />
      <EditFixtureForm
        matchId={Number(params.id)}
        team1={team1}
        team2={team2}
        availablePlayers={allPlayers}
      />
    </div>
  );
};

export default EditFixture;

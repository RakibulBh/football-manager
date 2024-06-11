import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getTeamByMatchId } from '../actions';
import { EditFixtureForm } from './edit-fixture-form';
import { getPlayers, getUnselectedPlayers } from '@/app/players/actions';

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
  const { teamA, teamB } = await getTeamByMatchId(Number(params.id));
  const availablePlayers = await getUnselectedPlayers(teamA.id, teamB.id);

  // console.log(teamA, 'this is team1');
  // console.log(teamB, 'this is team2');
  // console.log(allPlayers, 'this is all players');

  // all players
  // see if players are in team_players
  // append those that are not in an array
  //

  return (
    <div>
      <FixtureTopBar />
      <EditFixtureForm
        matchId={Number(params.id)}
        team1={teamA}
        team2={teamB}
        availablePlayers={availablePlayers!}
      />
    </div>
  );
};

export default EditFixture;

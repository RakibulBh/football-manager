'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';
import { editFixture } from '../actions';
import { Input } from '@/components/ui/input';
import { getPlayers } from '@/app/players/actions';

type TeamType = {
  id: number;
  name: string;
  match_id: string;
  score: number;
};

type EditFixtureFormProps = {
  team1: TeamType;
  team2: TeamType;
};

export const EditFixtureForm = ({ team1, team2 }: EditFixtureFormProps) => {
  const [teamInformation, setTeamInformation] = useState({
    team1: {
      name: '',
      players: [],
    },
    team2: {
      name: '',
      players: [],
    },
  });

  const playersInputs = [];

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('hello world');
  };

  useEffect(() => {
    callPlayers();
  });

  const callPlayers = async () => {
    const res = await getPlayers();
    console.log(res);
  };

  return (
    <form id='edit-form' action={editFixture}>
      <div>
        <div className=''>
          <Image alt='Team logo' width={40} height={40} src='/inter.png' />
          <Input type='text' name='team1Name' />
          <div>
            <h2>Add Players</h2>
            <div className=''>
              <input type='text' name='player1' />
              <input type='text' name='player2' />
              <input type='text' name='player3' />
              <input type='text' name='player4' />
              <input type='text' name='player5' />
            </div>
          </div>
        </div>

        <div>
          <Image alt='Team logo' width={40} height={40} src='/inter.png' />
          <Input type='text' name='team2Name' />
        </div>
      </div>
    </form>
  );
};

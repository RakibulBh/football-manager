'use client';

import { FormEvent, useState } from 'react';
import { editFixture } from '../actions';
import { useFormState } from 'react-dom';
import { DisplayPlayers } from './display-players';
import { DialogAddPlayer } from './add-dialog-player';
import { DatabasePlayers, DatabaseTeam, Players } from './types';
import { DisplayTeams } from './display-teams';

export type EditFixtureFormProps = {
  team1: DatabaseTeam;
  team2: DatabaseTeam;
  players: DatabasePlayers[];
};

export const EditFixtureForm = ({
  team1,
  team2,
  players,
}: EditFixtureFormProps) => {
  const [teamNames, setTeamNames] = useState({
    teamA: team1?.name.length ? team1.name : '',
    teamB: team2?.name.length ? team2.name : '',
  });

  const [teamAPlayers, setTeamAPlayers] = useState<Players[]>([]);
  const [teamBPlayers, setTeamBPlayers] = useState<Players[]>([]);
  const teamInformation = { teamA: teamAPlayers, teamB: teamBPlayers };

  const appendPlayers = editFixture.bind(null, teamInformation);
  const [state, formAction] = useFormState(appendPlayers, {
    message: '',
    status: 200,
  });

  const handleNameChangeInput = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setTeamNames((prevState) => ({ ...prevState, [name]: value }));
  };

  console.log(team1);

  return (
    <form id='edit-form' action={formAction}>
      <input type='hidden' name='matchId' value={team1.match_id} />
      <div>
        <div className='w-11/12 mx-auto'>
          <DisplayTeams
            nameA={teamNames.teamA}
            nameB={teamNames.teamB}
            handleNameChangeInput={handleNameChangeInput}
          />

          <div className='flex justify-between space-x-3'>
            <div className='flex-1'>
              <DisplayPlayers players={teamAPlayers} flipped={false} />
              <DialogAddPlayer
                name={team1.name}
                players={players}
                teamId={team1.id}
                setMyPlayers={setTeamAPlayers}
              />
            </div>

            <div className='flex-1'>
              <DisplayPlayers players={teamBPlayers} flipped={true} />
              <DialogAddPlayer
                name={team2.name}
                players={players}
                teamId={team2.id}
                setMyPlayers={setTeamBPlayers}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

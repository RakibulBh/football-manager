'use client';

import { FormEvent, useEffect, useState } from 'react';
import { editFixture } from '../actions';
import { useFormState } from 'react-dom';
import { DisplayPlayers } from './display-players';
import { DialogAddPlayer } from './add-dialog-player';
import { DatabasePlayers, DatabaseTeam } from './types';
import { DisplayTeams } from './display-teams';

export type EditFixtureFormProps = {
  matchId: number;
  team1?: DatabaseTeam;
  team2?: DatabaseTeam;
  availablePlayers: DatabasePlayers[];
};

export const EditFixtureForm = ({
  matchId,
  team1,
  team2,
  availablePlayers,
}: EditFixtureFormProps) => {
  const [teamNames, setTeamNames] = useState({
    teamA: team1?.name ?? '',
    teamB: team2?.name ?? '',
  });

  const [teamAPlayers, setTeamAPlayers] = useState<DatabasePlayers[]>([]);
  const [teamBPlayers, setTeamBPlayers] = useState<DatabasePlayers[]>([]);
  const teamInformation = { teamA: teamAPlayers, teamB: teamBPlayers };

  const [showTeamAPlayers, setShowTeamAPlayers] = useState<DatabasePlayers[]>(
    []
  );
  const [showTeamBPlayers, setShowTeamBPlayers] = useState<DatabasePlayers[]>(
    []
  );

  const [availablePlayerState, setAvailablePlayersState] = useState<
    DatabasePlayers[]
  >([]);

  useEffect(() => {
    if (team1?.Players) {
      setShowTeamAPlayers([...team1.Players]);
    }
    if (team2?.Players) {
      setShowTeamBPlayers([...team2.Players]);
    }
    if (availablePlayers.length) {
      setAvailablePlayersState([...availablePlayers]);
    }
  }, []);

  const appendPlayers = editFixture.bind(null, teamInformation);
  const [state, formAction] = useFormState(appendPlayers, {
    message: '',
    error: null,
    status: 200,
  });

  const handleNameChangeInput = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setTeamNames((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleMovePlayer = (
    userId: string,
    player: DatabasePlayers,
    teamSide: 'A' | 'B'
  ) => {};

  return (
    <form id='edit-form' action={formAction}>
      <input type='hidden' name='matchId' value={matchId} />
      <div>
        <div className='w-11/12 mx-auto'>
          <DisplayTeams
            nameA={teamNames.teamA}
            nameB={teamNames.teamB}
            handleNameChangeInput={handleNameChangeInput}
          />

          <div className='flex justify-between space-x-3'>
            <div className='flex-1'>
              <DisplayPlayers
                players={showTeamAPlayers}
                flipped={false}
                teamId={team1?.id}
                setPlayer={setTeamAPlayers}
                setShowTeamPlayers={setShowTeamAPlayers}
                handleMovePlayer={handleMovePlayer}
              />
              <DialogAddPlayer
                name={teamNames.teamA}
                players={availablePlayerState}
                setMyPlayers={setTeamAPlayers}
                setShowTeamPlayers={setShowTeamAPlayers}
                setAvailablePlayersState={setAvailablePlayersState}
              />
            </div>

            <div className='flex-1'>
              <DisplayPlayers
                players={showTeamBPlayers}
                flipped={true}
                teamId={team2?.id}
                setPlayer={setTeamBPlayers}
                setShowTeamPlayers={setShowTeamBPlayers}
                handleMovePlayer={handleMovePlayer}
              />
              <DialogAddPlayer
                name={teamNames.teamB}
                players={availablePlayerState}
                setMyPlayers={setTeamBPlayers}
                setShowTeamPlayers={setShowTeamBPlayers}
                setAvailablePlayersState={setAvailablePlayersState}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

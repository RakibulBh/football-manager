'use client';

import { MoveLeft, MoveRight, Trash2 } from 'lucide-react';
import { DatabasePlayers } from './types';
import { removePlayerFromTeam } from '../actions';
import { Dispatch, SetStateAction } from 'react';

type DisplayPlayersProps = {
  players?: DatabasePlayers[];
  flipped?: boolean;
  teamId?: string;
  setShowTeamPlayers: Dispatch<SetStateAction<DatabasePlayers[]>>;
  setPlayer: Dispatch<SetStateAction<DatabasePlayers[]>>;
  handleMovePlayer: (
    id: string,
    team: DatabasePlayers,
    teamSide: 'A' | 'B'
  ) => void;
};

export const DisplayPlayers = ({
  players,
  flipped = false,
  teamId,
  setPlayer,
  setShowTeamPlayers,
  handleMovePlayer,
}: DisplayPlayersProps) => {
  const handleRemovePlayer = async (id: string) => {
    if (teamId) {
      const { error, message, status } = await removePlayerFromTeam(id, teamId);
    }

    setShowTeamPlayers(() => players!.filter((item) => item.id !== id));
    setPlayer(() => players!.filter((item) => item.id !== id));
  };

  return (
    <div className='my-10 space-y-3'>
      {players?.map((item) => (
        <div key={item.name} className='bg-[#1B1D37] p-4 rounded-md'>
          <div className='flex justify-between'>
            {!flipped ? (
              <>
                <h2 className='text-xl'>{item.name}</h2>
                <div className='space-x-3'>
                  <button
                    type='button'
                    onClick={() => handleRemovePlayer(item.id)}
                  >
                    <Trash2 />
                  </button>
                  <button onClick={() => handleMovePlayer(item.id, item, 'A')}>
                    <MoveRight />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className='space-x-3'>
                  <button onClick={() => handleMovePlayer(item.id, item, 'B')}>
                    <MoveLeft />
                  </button>
                  <button
                    type='button'
                    onClick={() => handleRemovePlayer(item.id)}
                  >
                    <Trash2 />
                  </button>
                </div>
                <h2 className='text-xl'>{item.name}</h2>
              </>
            )}
          </div>
          {!flipped ? (
            <p className='text-sm'>{item.position}</p>
          ) : (
            <p className='text-sm text-end'>{item.position}</p>
          )}
        </div>
      ))}
    </div>
  );
};

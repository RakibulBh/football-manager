import { MoveLeft, MoveRight, Trash2 } from 'lucide-react';
import { DatabasePlayers } from './types';
import { removePlayerFromTeam } from '../actions';

type DisplayPlayersProps = {
  players?: DatabasePlayers[];
  flipped?: boolean;
  teamId?: string;
};

export const DisplayPlayers = ({
  players,
  flipped = false,
  teamId,
}: DisplayPlayersProps) => {
  const handleRemovePlayer = async (id: string) => {
    await removePlayerFromTeam(id, teamId!);
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
                  <button onClick={() => handleRemovePlayer(item.id)}>
                    <Trash2 />
                  </button>
                  <button>
                    <MoveRight />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className='space-x-3'>
                  <button>
                    <MoveLeft />
                  </button>
                  <button>
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

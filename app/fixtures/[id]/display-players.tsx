import { MoveLeft, MoveRight, Trash2 } from 'lucide-react';

type ShowTeamProps = {
  teamId: number;
  name: string;
  position: string;
};

export const DisplayPlayers = ({
  players,
  flipped = false,
}: {
  players: ShowTeamProps[];
  flipped?: boolean;
}) => {
  return (
    <div className='my-10 space-y-3'>
      {players.map((item) => (
        <div key={item.name} className='bg-[#1B1D37] p-4 rounded-md'>
          <div className='flex justify-between'>
            {!flipped ? (
              <>
                <h2 className='text-xl'>{item.name}</h2>
                <div className='space-x-3'>
                  <button>
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

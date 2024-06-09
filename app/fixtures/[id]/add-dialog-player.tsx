import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Dispatch, SetStateAction, useState } from 'react';
import { DatabasePlayers } from './types';

type DialogAddPlayerProps = {
  name: string;
  players: DatabasePlayers[];
  setMyPlayers: Dispatch<SetStateAction<DatabasePlayers[]>>;
  setShowTeamPlayers: Dispatch<SetStateAction<DatabasePlayers[]>>;
};

export const DialogAddPlayer = ({
  name,
  players,
  setMyPlayers,
  setShowTeamPlayers,
}: DialogAddPlayerProps) => {
  const [savedPlayers, setSavedPlayers] = useState<DatabasePlayers[]>([]);

  const handleClickPlayers = (id: string, name: string, position: string) => {
    setSavedPlayers((prevState) => [
      ...prevState,
      {
        id,
        name,
        position,
      },
    ]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add player to {name}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-black'>Add Players</DialogTitle>
        </DialogHeader>
        <div className='flex flex-wrap gap-y-2'>
          {players.map((item) => (
            <Button
              key={item.id}
              variant='secondary'
              className='text-black w-1/2 flex justify-between'
              onClick={() =>
                handleClickPlayers(item.id, item.name, item.position)
              }
            >
              <span>{item.name}</span> <span>{item.position}</span>
            </Button>
          ))}
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              setMyPlayers((prevState) => [...prevState, ...savedPlayers]);
              setShowTeamPlayers((prevState) => [
                ...prevState,
                ...savedPlayers,
              ]);

              setSavedPlayers([]);
            }}
          >
            Add Players
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

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

type DatabasePlayers = {
  id: number;
  name: string;
  position: string;
  profileUrl: string;
};

type Players = {
  name: string;
  position: string;
  teamId: number;
};

type DialogAddPlayerProps = {
  teamId: number;
  name: string;
  players: DatabasePlayers[];
  setMyPlayers: Dispatch<SetStateAction<Players[]>>;
};

export const DialogAddPlayer = ({
  name,
  teamId,
  players,
  setMyPlayers,
}: DialogAddPlayerProps) => {
  const [savedPlayers, setSavedPlayers] = useState<Players[]>([]);

  const handleClickPlayers = (name: string, position: string) => {
    setSavedPlayers((prevState) => [
      ...prevState,
      {
        name,
        position,
        teamId,
      },
    ]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='text-center'>
          <Button>Add player to {name}</Button>
        </div>
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
              onClick={() => handleClickPlayers(item.name, item.position)}
            >
              <span>{item.name}</span> <span>{item.position}</span>
            </Button>
          ))}
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              setMyPlayers((prevState) => [...prevState, ...savedPlayers]);
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

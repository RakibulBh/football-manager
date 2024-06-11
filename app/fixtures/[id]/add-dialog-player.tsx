'use client';

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
  players: DatabasePlayers[];
  name: string;
  setMyPlayers: Dispatch<SetStateAction<DatabasePlayers[]>>;
  setShowTeamPlayers: Dispatch<SetStateAction<DatabasePlayers[]>>;
  setAvailablePlayersState: Dispatch<SetStateAction<DatabasePlayers[]>>;
};

export const DialogAddPlayer = ({
  players,
  name,
  setMyPlayers,
  setShowTeamPlayers,
  setAvailablePlayersState,
}: DialogAddPlayerProps) => {
  const [savedPlayers, setSavedPlayers] = useState<DatabasePlayers[]>([]);
  const [activeButton, setActiveButton] = useState<number[]>([]);

  const checkButtonActive = (index: number) => {
    for (let i = 0; i < activeButton.length; i++) {
      if (activeButton[i] === index) {
        return true;
      }
    }

    return false;
  };

  const handleClickPlayers = (
    id: string,
    name: string,
    position: string,
    index: number
  ) => {
    if (!checkButtonActive(index)) {
      setActiveButton([...activeButton, index]);
      setSavedPlayers((prevState) => [
        ...prevState,
        {
          id,
          name,
          position,
        },
      ]);
    } else {
      setActiveButton((prevState) =>
        prevState.filter((item) => item !== index)
      );
      setSavedPlayers((prevState) =>
        prevState.filter((item) => item.id !== id)
      );
    }
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
          {players?.map((item, index) => (
            <Button
              key={item.id}
              variant={checkButtonActive(index) ? 'default' : 'secondary'}
              className={`w-1/2 flex justify-between hover:bg-violet-600 active:bg-violet-700 hover:text-white`}
              onClick={() =>
                handleClickPlayers(item.id, item.name, item.position, index)
              }
            >
              <span>{item.name}</span> <span>{item.position}</span>
            </Button>
          ))}
        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              setMyPlayers((prevState) => [...prevState, ...savedPlayers]);
              setShowTeamPlayers((prevState) => [
                ...prevState,
                ...savedPlayers,
              ]);

              const setId = new Set(savedPlayers.map((item) => item.id));

              setAvailablePlayersState((prevState) => {
                const remainingPlayers = [];
                for (let i = 0; i < prevState.length; i++) {
                  if (!setId.has(prevState[i].id)) {
                    remainingPlayers.push(prevState[i]);
                  }
                }

                return remainingPlayers;
              });

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

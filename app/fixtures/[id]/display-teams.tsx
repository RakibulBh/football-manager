import Image from 'next/image';
import { FormEvent } from 'react';

type DisplayTeamsProps = {
  nameA: string;
  nameB: string;
  handleNameChangeInput: (e: FormEvent<HTMLInputElement>) => void;
};

export const DisplayTeams = ({
  nameA,
  nameB,
  handleNameChangeInput,
}: DisplayTeamsProps) => {
  return (
    <div className='flex bg-[#1B1D37]  h-[450px] m-auto justify-between'>
      <div className='flex items-center mx-3 space-x-3'>
        <div>
          <Image alt='Team logo' width={140} height={40} src='/inter.png' />
        </div>
        <input
          className='bg-[#1B1D37] border-none placeholder:text-white text-2xl w-auto inline'
          type='text'
          name='teamA'
          placeholder={'Set Team name'}
          value={nameA}
          onChange={handleNameChangeInput}
        />
      </div>
      <div className='flex items-center mx-3 '>
        <input
          className='bg-[#1B1D37] border-none placeholder:text-white text-2xl w-auto inline'
          type='text'
          name='teamB'
          placeholder={'Set Team name'}
          value={nameB}
          onChange={handleNameChangeInput}
        />
        <div>
          <Image alt='Team logo' width={140} height={40} src='/inter.png' />
        </div>
      </div>
    </div>
  );
};

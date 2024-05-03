import { MatchHistory } from '@/components/matchHistory';
import SheetMobile from '@/components/sheet';
import { Sidebar } from '@/components/sidebar';
import Team from '@/components/teamIcon';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-full w-full flex'>
      <nav className='hidden lg:block w-[350px]'>
        <Sidebar />
      </nav>
      <div className='h-full lg:hidden pt-3 px-2 flex flex-col items-center'>
        <SheetMobile />
      </div>
      <main className='h-full flex-1 pt-4 px-4 flex flex-col gap-y-4'>
        <div className='p-4 flex justify-center w-full h-[200px] lg:h-[400px] bg-[#725BF4] rounded-lg'>
          <div className='w-full lg:max-w-[560px] h-full flex justify-between items-center'>
            <Team imageUrl='/inter.png' />
            <div className='gap-y-3 flex flex-col items-center text-center'>
              <p className='text-sm font-semibold lg:font-bold'>
                last match 07/05/2024
              </p>
              <p className='text-4xl lg:text-6xl font-bold'>1 : 0</p>
            </div>
            <Team imageUrl='/inter.png' />
          </div>
        </div>
        <p className='text-xl font-bold'>Match history</p>
        <div className='flex-1 overflow-y-auto flex flex-col bg-[#1B1D37] rounded-t-2xl p-6'>
          <MatchHistory/>
          <MatchHistory/>
          <MatchHistory/>
          <MatchHistory/>
          <MatchHistory/>
        </div>
      </main>
    </div>
  );
}

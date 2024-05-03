import { MatchHistory } from '@/components/match-history';
import MatchSummary from '@/components/match-summary';
import SheetMobile from '@/components/sheet';
import { Sidebar } from '@/components/sidebar';
import Team from '@/components/team-icon';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <nav className='hidden lg:block w-[350px]'>
        <Sidebar />
      </nav>
      <div className='h-full lg:hidden pt-3 px-2 flex flex-col items-center'>
        <SheetMobile />
      </div>
      <main className='h-full flex-1 pt-4 px-4 flex flex-col gap-y-4'>
        <div className='p-4 flex justify-center w-full h-[200px] lg:h-[400px] bg-[#725BF4] rounded-lg'>
          <MatchSummary />
        </div>
        <p className='text-xl font-bold'>Match history</p>
        <div className='flex-1 overflow-y-auto flex flex-col bg-[#1B1D37] rounded-t-2xl p-6'>
          <MatchHistory />
          <MatchHistory />
          <MatchHistory />
          <MatchHistory />
          <MatchHistory />
        </div>
      </main>
    </div>
  );
}

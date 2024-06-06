import { MatchHistory } from '@/components/match-history';
import MatchSummary from '@/components/match-summary';
import SheetMobile from '@/components/sheet';
import { Sidebar } from '@/components/sidebar';

const Home = () => {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='h-full lg:hidden pt-3 px-2 flex flex-col items-center'>
        <SheetMobile />
      </div>
      <main className='h-full w-full flex-1 pt-4 px-4 flex flex-col gap-y-4'>
        <div className='p-4 flex justify-center h-[200px] lg:h-[400px] bg-[#725BF4] rounded-lg'>
          <MatchSummary score1={0} score2={0} />
        </div>
        <h2 className='text-xl font-bold'>Match history</h2>
        <MatchHistory />
      </main>
    </main>
  );
};

export default Home;

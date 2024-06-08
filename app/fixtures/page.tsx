import { FixtureDialog } from '@/app/fixtures/addFixtureDialog';
import FixtureSection from '@/app/fixtures/fixture-section';
import { createClient } from '@/utils/supabase/server';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { getFixtures } from './actions';
import { addDays, isSameDay, isThisWeek } from 'date-fns';
import { Tables } from '@/types/supabase';

const FixtureTopBar = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <div className='flex items-center justify-between py-4 px-5 bg-[#725BF4]'>
      <div className='flex items-center gap-x-4'>
        <Link href='/'>
          <ArrowLeft size={40} />
        </Link>
        <h2 className='text-2xl font-semibold'>Fixtures</h2>
      </div>
      {!error && data?.user && <FixtureDialog />}
    </div>
  );
};

async function FixturesPage() {
  const matches = await getFixtures();

  return (
    <div className='space-y-16'>
      <FixtureTopBar />
      <FixtureSection matches={matches} time='This week' />
    </div>
  );
}

export default FixturesPage;

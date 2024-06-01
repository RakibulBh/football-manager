import React from 'react';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/server';

export default async function TeamScore({ id }: { id: number }) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('Teams')
    .select('*')
    .eq('match_id', id);

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-x-4'>
        <Image alt='Team logo' width={40} height={40} src='/inter.png' />
        <h1>Sabit fc</h1>
      </div>
      <div>
        <h1>0</h1>
      </div>
    </div>
  );
}

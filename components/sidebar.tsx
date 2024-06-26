import { Calendar, Home, Medal, Plus, Users } from 'lucide-react';
import Link from 'next/link';
import Dropdown from './dropdown';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const links = [
  {
    admin: false,
    name: 'Fixtures',
    icon: <Calendar />,
    href: '/fixtures',
  },
  {
    admin: false,
    name: 'Leaderboard',
    icon: <Medal />,
    href: '/leaderboard',
  },
  {
    admin: true,
    name: 'Players',
    icon: <Users />,
    href: '/players',
  },
];

export const Sidebar = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  // Redirect to login if no user is found
  if (!data?.user && typeof window !== 'undefined') {
    redirect('/login');
  }

  return (
    <div className='hidden lg:block py-8 px-4 w-[350px] h-screen bg-[#1B1D37] rounded-r-2xl '>
      <div className='flex flex-col gap-y-20'>
        <p className='font-bold text-2xl text-center'>StepneyFootball</p>
        <div className='flex flex-col gap-y-5 px-6'>
          {links.map((link, index) => {
            if (link.admin && !data?.user) {
              return null;
            }
            return (
              <Link key={index} href={link.href}>
                <div className='flex gap-x-2'>
                  {link.icon}
                  <p>{link.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className='flex items-center justify-center gap-x-4'>
          <Dropdown user={data?.user} />
        </div>
      </div>
    </div>
  );
};

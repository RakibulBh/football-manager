import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Sidebar } from './sidebar';
import { Menu } from 'lucide-react';

export default function SheetMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu width={40} height={40} />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='p-0 m-0 border-none rounded-2xl bg-[#1B1D37]'
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}

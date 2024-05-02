import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Sidebar } from './sidebar';
import { Menu } from 'lucide-react';

export default function SheetMobile() {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu width={40} height={40} />
            </SheetTrigger>
            <SheetContent side='left'>
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}

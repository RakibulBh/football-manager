import SheetMobile from "@/components/sheet";
import { Sidebar } from "@/components/sidebar";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full flex">
      <Sidebar />
      <div className="h-full lg:hidden pt-3 px-2 flex flex-col items-center">
        <SheetMobile />
      </div>
      <main className="h-full flex-1 p-4 flex flex-col gap-y-4">
        <div className="w-full h-[400px] bg-[#725BF4] rounded-lg"></div>
        <p className="text-xl font-bold">Match history</p>
        <div className="flex-1 bg-[#1B1D37] rounded-lg"></div>
      </main>
    </div>
  );
}
import { Calendar, CircleUser, Plus, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Dropdown from "./dropdown";

export const Sidebar = () => {
  const links = [
    {
      name: "Fixtures",
      icon: <Calendar />,
      href: "/fixtures",
    },
    {
      name: "Add a match",
      icon: <Plus />,
      href: "/addmatch",
    },
    {
      name: "Players",
      icon: <Users />,
      href: "/players",
    },
  ];

  return (
    <div className="w-full rounded-r-2xl py-8 px-4 h-full bg-[#1B1D37] flex flex-col">
      <div className="flex flex-col gap-y-20">
        <p className="font-bold text-2xl text-center">StepneyFootball</p>
        <div className="flex flex-col gap-y-5 px-6">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="flex items-center gap-x-2 text-white bg-[#725BF4] hover:bg-[#5f49e0] px-6 py-4 rounded-xl">
                {link.icon}
                <p>{link.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

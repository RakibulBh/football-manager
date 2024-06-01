import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { CircleUser } from "lucide-react";
import { signOut } from "@/app/login/actions";
import LogoutButton from "./signout";
import Link from "next/link";

export default function Dropdown({ user }: { user: any }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex gap-x-4 bg-[#7258F4] hover:bg-[#]">
          <CircleUser />
          <p className="text-white">Admin Login</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          {user ? user.email : "Admin only"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center justify-center">
          {user ? (
            <LogoutButton />
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
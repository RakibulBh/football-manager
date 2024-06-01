import React from "react";
import { Button } from "./ui/button";
import { signOut } from "@/app/login/actions";

export default function LogoutButton() {
  return (
    <form>
      <Button formAction={signOut}>Logout</Button>
    </form>
  );
}

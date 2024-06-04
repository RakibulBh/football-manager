import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { login } from "./actions"; // Ensure this is correctly defined
import { redirect, useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import SheetMobile from "@/components/sheet";
import { Sidebar } from "@/components/sidebar";
import SubmitButton from "@/components/submitButton";

export default async function LoginPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (!error || data?.user) {
    redirect("/");
  }

  return (
    <>
      <div className="hidden lg:block w-[350px]">
        <Sidebar />
      </div>
      <div className="h-full lg:hidden pt-3 px-2 flex flex-col items-center">
        <SheetMobile />
      </div>
      <div className="h-full md:px-4 px-3 w-full flex items-center md:justify-center">
        <div className="flex flex-col justify-center gap-y-12 bg-white w-full h-[35rem] md:w-[45rem] md:h-[50rem] rounded-xl px-8 py-2 md:px-36 md:py-32">
          <div className="text-center space-y-4">
            <h1 className="text-md md:text-4xl text-gray-700 font-semibold">
              Admin login
            </h1>
            <p className="hidden md:block text-gray-400 text-center">
              Sign in to access the admin dashboard. Admins can create and edit
              matches along with adding players{" "}
              <span className="text-[#725BF4] underline underline-offset-2">
                Learn more
              </span>
              .
            </p>
          </div>
          <form action={login} className="flex flex-col gap-y-4">
            <Label className="text-[#725BF4]" htmlFor="email">
              Email:
            </Label>
            <Input
              autoComplete="email"
              placeholder="Email"
              className="text-black"
              id="email"
              name="email"
              type="email"
              required
            />
            <Label className="text-[#725BF4]">Password:</Label>
            <Input
              autoComplete="current-password"
              placeholder="Password"
              className="text-black"
              id="password"
              name="password"
              type="password"
              required
            />
            <SubmitButton pendingText="Logging in" text="Login" />
          </form>
        </div>
      </div>
    </>
  );
}

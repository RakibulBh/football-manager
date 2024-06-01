"use client";
import { createFixture } from "@/app/fixtures/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import SubmitButton from "../../components/submitButton";

export function FixtureDialog() {
  const [data, setData] = useState({
    location: "",
    date: "",
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create fixture</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#725BF4]">Add a fixture</DialogTitle>
          <DialogDescription>
            Add a fixture here, make sure to fill in all the fields.
          </DialogDescription>
        </DialogHeader>
        <form action={createFixture}>
          <Label className="text-[#725BF4]" htmlFor="location">
            Location
          </Label>
          <Input
            name="location"
            value={data.location}
            onChange={(e) => setData({ ...data, location: e.target.value })}
            className="text-black"
            id="location"
            placeholder="Stepney Green"
          />
          <Label className="text-[#725BF4]" htmlFor="date">
            Date
          </Label>
          <Input
            name="date"
            value={data.date}
            className="text-black"
            type="date"
            id="date"
            onChange={(e) => setData({ ...data, date: e.target.value })}
            placeholder="Date"
          />
          <div className="w-full flex justify-end mt-4">
            <SubmitButton />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

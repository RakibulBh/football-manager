"use client";
import React from "react";
import { createPlayer } from "./actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/submitButton";

export default function AddPlayerForm() {
  const [data, setData] = React.useState({
    name: "",
    position: "",
    profileUrl: "",
  });
  return (
    <form
      action={createPlayer}
      className="space-y-4 bg-white px-10 py-16 rounded-xl w-[25rem] h-[30rem]"
    >
      <div>
        <Label className="text-[#725BF4]" htmlFor="name">
          Name
        </Label>
        <Input
          name="name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          value={data.name}
          placeholder="Monkey"
          type="text"
          id="name"
          required
        />
      </div>

      <div>
        <Label className="text-[#725BF4]" htmlFor="position">
          Position
        </Label>
        <Input
          name="position"
          onChange={(e) => setData({ ...data, position: e.target.value })}
          value={data.position}
          placeholder="Defender"
          type="text"
          id="position"
          required
        />
      </div>
      <div>
        <Label className="text-[#725BF4]" htmlFor="profileUrl">
          Profile picture
        </Label>
        <Input
          name="profileUrl"
          onChange={(e) => setData({ ...data, profileUrl: e.target.value })}
          value={data.profileUrl}
          placeholder="Monkey.jpeg"
          type="file"
          id="profileUrl"
        />
      </div>
      <div className="flex justify-end">
        <SubmitButton text="Add player" pendingText="Adding player" />
      </div>
    </form>
  );
}

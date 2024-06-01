"use client";
import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? "Creating fixture" : "Create fixture"}
    </Button>
  );
}

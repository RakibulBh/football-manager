import React from "react";
import Image from "next/image";

export default function TeamScore() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <Image alt="Team logo" width={40} height={40} src="/inter.png" />
        <h1>Sabit fc</h1>
      </div>
      <div>
        <h1>0</h1>
      </div>
    </div>
  );
}

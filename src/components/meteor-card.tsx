import React from "react";
import { Meteors } from "@/components/meteors";

interface MeteorCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  number?: number;
}

export function MeteorCard({
  title = "Default Title",
  description = "Default description goes here. Add your own description by passing the 'description' prop to the component.",
  buttonText = "Explore",
  number = 10,
}: MeteorCardProps) {
  return (
    <div className=" w-full max-w-sm p-4">
      <div className="relative shadow-xl bg-background border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-between h-auto">
        {/* Adjusted height management */}
        {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#714dff] to-[#e151ff] transform scale-[0.80] bg-[#fff759] rounded-full blur-2xl" /> */}
        <div className="relative px-4 py-8 z-10">
          <h1 className="font-bold text-xl text-white mb-4">{title}</h1>
          <p className="font-normal text-base mb-4">{description}</p>
        </div>
        <div className="z-10">
          {/* Meaty part - Meteor effect */}
          <Meteors number={number} />
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { SparklesCore } from "./sparkles";

export function SparklesPreview() {
  return (
    <div className="inline-flex flex-col items-center justify-center overflow-hidden rounded-md w-[23rem]">
      <div className="gradient-text text-transparent bg-clip-text">
        Generative AI
      </div>

      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: "#09090B",
            maskImage:
              "radial-gradient(250px 100px at top, transparent 20%, white)",
          }}
        ></div>
      </div>
    </div>
  );
}

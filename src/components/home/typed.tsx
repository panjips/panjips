"use client";

import React from "react";
import { ReactTyped } from "react-typed";

export const Typed = () => {
  return (
    <div className="py-3">
      <ReactTyped
        className="font-bold lg:text-5xl text-3xl bg-gradient-to-r from-indigo-500 from-0% to-red-500 to-75% text-transparent bg-clip-text"
        backSpeed={75}
        strings={["Panji Pusaka S.", "Tech Enthusiast", "Code Wizzard"]}
        typeSpeed={75}
        loop
      />
    </div>
  );
};

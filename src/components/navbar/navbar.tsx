"use client";

import React from "react";
import ItemMenu from "@/components/navbar/item-menu";
import Container from "@/components/container";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Container className="w-full bg-slate-950">
        <nav className="flex justify-end items-center lg:justify-center pt-6 pb-6 lg:pt-12 lg:pb-4 border-none">
          <div className="hidden lg:flex">
            <ItemMenu path={"/"}>Home</ItemMenu>
            <ItemMenu path={"/about"}>About</ItemMenu>
            <ItemMenu path={"/project"}>Project</ItemMenu>
            <ItemMenu path={"/contact"}>Contact</ItemMenu>
          </div>
          <div>
            <button className="relative" onClick={() => setShow(!show)}>
              <FaBars className="text-slate-100 lg:hidden" />
            </button>
            {show && (
              <div className=" transition delay-300 right-7 absolute">
                <div className="flex flex-col items-center gap-4 px-4 py-4 h-full w-full bg-slate-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-slate-300">
                  <ItemMenu path={"/"}>Home</ItemMenu>
                  <ItemMenu path={"/about"}>About</ItemMenu>
                  <ItemMenu path={"/project"}>Project</ItemMenu>
                  <ItemMenu path={"/contact"}>Contact</ItemMenu>
                </div>
              </div>
            )}
          </div>
          {/* {show && (
            <div className="z-1 transition delay-300 h-full w-3/4 bg-slate-900 top-0 right-0 absolute">
              <div className="flex flex-col py-12 h-full gap-6">
                <ItemMenu path={"/"}>Home</ItemMenu>
                <ItemMenu path={"/about"}>About</ItemMenu>
                <ItemMenu path={"/project"}>Project</ItemMenu>
                <ItemMenu path={"/contact"}>Contact</ItemMenu>
              </div>
            </div>
          )} */}
        </nav>
      </Container>
    </>
  );
}

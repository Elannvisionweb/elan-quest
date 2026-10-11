"use client";

import { ReactNode } from "react";
import { useMenu } from "@/app/context/MenuContent";
import RegisterPopUp from "./RegisterPopUp";

interface MainWrapperProps {
  children: ReactNode;
}

export default function MainWrapper({ children }: MainWrapperProps) {
  const { menuOpen, setMenuOpen, registerOpen } = useMenu();

  return (
    <>
      {registerOpen && <RegisterPopUp />}
      <div
        className={`flex-grow ${
          menuOpen
            ? "blur-[5px] transition duration-300 ease select-none"
            : "transition duration-300 ease"
        }`}
        onClick={() => {
          if (menuOpen) setMenuOpen(false);
        }}
      >
        <main className="w-full pt-0">{children}</main>
      </div>
    </>
  );
}

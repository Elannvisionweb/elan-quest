"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onRegisterClick?: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#B2D5FF] px-4 py-3 md:px-12 flex items-center justify-between shadow-sm relative z-50">
      <div className="flex flex-shrink-0 items-center gap-2">
        <Link href="/" className="flex flex-shrink-0 items-center gap-2">
          <Image
            src="/pics/navbar.png"
            alt="Elan and nVision logo"
            width={150}
            height={150}
            className="h-auto w-[100px] object-contain md:w-[150px]"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-4 pl-2 border-l border-[#0F2851]/20">
          <a
            href="https://www.iith.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/pics/iith-logo.png"
              alt="IIT Hyderabad"
              width={90}
              height={30}
              className="object-contain"
            />
          </a>
        </div>
      </div>

      {/* DESKTOP NAV - 100% UNCHANGED */}
      <nav className="hidden md:flex items-center gap-x-10">
        <Link
          href="/exam-details"
          className="text-[#0F2851] font-extrabold whitespace-nowrap text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          EXAM DETAILS
        </Link>

        <Link
          href="/syllabus"
          className="text-[#0F2851] font-extrabold whitespace-nowrap text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          SYLLABUS
        </Link>

        <Link
          href="/results"
          className="text-[#0F2851] font-extrabold whitespace-nowrap text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          RESULTS
        </Link>

        <Link
          href="/about"
          className="text-[#0F2851] font-extrabold whitespace-nowrap text-sm tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          ABOUT
        </Link>

        <button
          onClick={onRegisterClick}
          className="bg-[#FF7A7A] hover:bg-[#ff6565] text-white font-black text-sm px-4 py-2.5 rounded-full uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
        >
          REGISTER NOW
        </button>
      </nav>

      {/* MOBILE CONTROLS */}
      <div className="flex md:hidden items-center gap-2">
        <button
          onClick={onRegisterClick}
          className="bg-[#FF7A7A] hover:bg-[#ff6565] text-white font-black text-[11px] px-3 py-1.5 rounded-full uppercase tracking-wider transition-all shadow-sm cursor-pointer"
        >
          REGISTER NOW
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 text-[#0F2851] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#B2D5FF] border-t border-[#0F2851]/15 px-5 py-4 shadow-lg flex flex-col gap-3 md:hidden z-50">
          <Link
            href="/exam-details"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#0F2851] font-extrabold text-sm tracking-wider uppercase py-1 border-b border-[#0F2851]/10 hover:opacity-80"
          >
            EXAM DETAILS
          </Link>

          <Link
            href="/syllabus"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#0F2851] font-extrabold text-sm tracking-wider uppercase py-1 border-b border-[#0F2851]/10 hover:opacity-80"
          >
            SYLLABUS
          </Link>

          <Link
            href="/results"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#0F2851] font-extrabold text-sm tracking-wider uppercase py-1 border-b border-[#0F2851]/10 hover:opacity-80"
          >
            RESULTS
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#0F2851] font-extrabold text-sm tracking-wider uppercase py-1 border-b border-[#0F2851]/10 hover:opacity-80"
          >
            ABOUT
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#0F2851] font-extrabold text-sm tracking-wider uppercase py-1 border-b border-[#0F2851]/10 hover:opacity-80"
          >
            CONTACT US
          </Link>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.iith.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/pics/iith-logo.png"
                alt="IIT Hyderabad"
                width={80}
                height={26}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
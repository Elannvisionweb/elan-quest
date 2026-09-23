"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#B2D5FF] px-6 py-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 relative z-20">
      {/* Logo */}
      <div className="flex items-center gap-6 md:gap-8">
        <Image
          src="/pics/footer.png"
          alt="Elan & nVision logo"
          width={200}
          height={200}
          className="object-contain py-3.5"
        />
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 md:gap-6 text-[#0F2851] text-xs md:text-sm font-semibold tracking-wide">
        <a
          href="https://www.iith.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          IIT HYDERABAD
        </a>
        <a
          href="https://elan.org.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          ELAN &amp; NVISION
        </a>
        <Link
          href="/terms-conditions"
          className="hover:opacity-70 transition-opacity"
        >
          TERMS &amp; CONDITIONS
        </Link>
      </div>
    </footer>
  );
}
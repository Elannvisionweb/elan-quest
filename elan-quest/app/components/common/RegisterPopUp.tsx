"use client";

import { useEffect } from "react";
import { X, ExternalLink, Sparkles } from "lucide-react";
import { useMenu } from "@/app/context/MenuContent";

interface PopUpProps {
  setShowPopup?: (val: boolean) => void;
}

const CLASS_OPTIONS = [
  {
    grade: 6,
    code: "06",
    link: "https://unstop.com/p/nexus-quest-elan-nvision-1736997",
  },
  {
    grade: 7,
    code: "07",
    link: "https://unstop.com/p/nexus-quest-class-vii-nexus-quest-elan-nvision-1747304",
  },
  {
    grade: 8,
    code: "08",
    link: "https://unstop.com/p/nexus-quest-class-viii-nexus-quest-elan-nvision-1747978",
  },
  {
    grade: 9,
    code: "09",
    link: "https://unstop.com/p/nexus-quest-class-ix-nexus-quest-elan-nvision-1747986",
  },
  {
    grade: 10,
    code: "10",
    link: "https://unstop.com/p/nexus-quest-class-x-nexus-quest-elan-nvision-1749250",
  },
  {
    grade: 11,
    code: "11",
    link: "https://unstop.com/p/nexus-quest-class-xi-nexus-quest-elan-nvision-1749257",
  },
  {
    grade: 12,
    code: "12",
    link: "https://unstop.com/p/nexus-quest-class-xii-nexus-quest-elan-nvision-1749259",
  },
];

export default function RegisterPopUp({ setShowPopup }: PopUpProps = {}) {
  const { closeRegister } = useMenu();

  const handleClose = () => {
    if (setShowPopup) setShowPopup(false);
    closeRegister();
  };

  useEffect(() => {
    // Prevent scrolling while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Close on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-dialog-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0F2851]/65 backdrop-blur-sm transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-[#FAF7EE] border-[3px] border-[#0F2851] rounded-3xl shadow-[8px_8px_0px_0px_#0F2851] p-5 sm:p-7 overflow-hidden transition-all duration-200 animate-scaleIn">
        {/* Subtle decorative background pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: "url('/pics/pattern.png')",
            backgroundRepeat: "repeat",
          }}
        />

        {/* Modal Header */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase bg-[#FF7A7A] text-white shadow-sm">
            <Sparkles className="w-3 h-3 text-white" />
            NEXUS QUEST 2026
          </span>

          <button
            onClick={handleClose}
            aria-label="Close registration modal"
            className="w-9 h-9 rounded-full bg-white border-2 border-[#0F2851] text-[#0F2851] flex items-center justify-center hover:bg-[#FF7A7A] hover:text-white hover:border-[#0F2851] transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0F2851] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Title & description */}
        <div className="relative z-10 mt-3 sm:mt-4 mb-4 sm:mb-5">
          <h2
            id="register-dialog-title"
            className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0F2851] leading-tight"
          >
            SELECT YOUR CLASS
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-[#0F2851]/75 mt-1">
            Choose your grade to register for Nexus Quest on Unstop.
          </p>
        </div>

        {/* Options Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-2.5 sm:gap-3">
          {CLASS_OPTIONS.map((option) => {
            const isFullWidth = option.grade === 12;

            return (
              <a
                key={option.grade}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-between px-3.5 py-3 sm:px-4 sm:py-3.5 bg-white border-2 border-[#0F2851] rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_0px_#0F2851] hover:shadow-[5px_5px_0px_0px_#FF7A7A] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#0F2851] transition-all duration-150 cursor-pointer overflow-hidden ${
                  isFullWidth ? "col-span-2" : ""
                }`}
              >
                {/* Left badge & name */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#B2D5FF] group-hover:bg-[#FF7A7A] group-hover:text-white text-[#0F2851] font-black text-xs sm:text-sm flex items-center justify-center transition-colors border border-[#0F2851] flex-shrink-0">
                    {option.code}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-black text-sm sm:text-base text-[#0F2851] tracking-wide leading-tight">
                      Class {option.grade}
                    </span>
                    {isFullWidth && (
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#0F2851]/60 uppercase tracking-wider">
                        Senior Secondary
                      </span>
                    )}
                  </div>
                </div>

                {/* Right arrow / action */}
                <div className="flex items-center gap-1 text-[#0F2851]/50 group-hover:text-[#FF7A7A] transition-colors flex-shrink-0">
                  <span className="hidden sm:inline text-[11px] font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    Register
                  </span>
                  <ExternalLink className="w-4 h-4 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.18s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
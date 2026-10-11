"use client";

import { useState } from "react";
import Image from "next/image";
import {
  syllabus6,
  syllabus7,
  syllabus8,
  syllabus9,
  syllabus10,
  syllabus11,
  syllabus12,
} from "../components/syllabus/content";
import { ChevronDown, ChevronUp } from "lucide-react";

const CLASS_TABS = [
  { classNum: 6, label: "Class 6" },
  { classNum: 7, label: "Class 7" },
  { classNum: 8, label: "Class 8" },
  { classNum: 9, label: "Class 9" },
  { classNum: 10, label: "Class 10" },
  { classNum: 11, label: "Class 11" },
  { classNum: 12, label: "Class 12" },
];

export default function SyllabusPage() {
  const [activeNav, setActiveNav] = useState<number>(1);
  const [openDropdowns, setOpenDropdowns] = useState<Set<number>>(new Set());

  const toggleDropdown = (classNum: number) => {
    const newOpenDropdowns = new Set(openDropdowns);
    if (newOpenDropdowns.has(classNum)) {
      newOpenDropdowns.delete(classNum);
    } else {
      newOpenDropdowns.add(classNum);
    }
    setOpenDropdowns(newOpenDropdowns);
  };

  const getSyllabusData = (classNum: number) => {
    switch (classNum) {
      case 6:
        return syllabus6;
      case 7:
        return syllabus7;
      case 8:
        return syllabus8;
      case 9:
        return syllabus9;
      case 10:
        return syllabus10;
      case 11:
        return syllabus11;
      case 12:
        return syllabus12;
      default:
        return [];
    }
  };

  return (
    <main className="relative min-h-0 w-full overflow-x-hidden bg-[#F0ECCF] text-[#0F2851]">
      {/* =========================
          PATTERN BACKGROUND
          ========================= */}
    <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
     style={{
  backgroundImage: "url('/pics/pattern.png')",
  backgroundSize: "auto",
  backgroundPosition: "center -80px",
  backgroundRepeat: "repeat",
}}
      />

      {/* =======================================================
          HERO BANNER
          ======================================================= */}
      <section
        className="
          relative
          z-20
          w-full
          h-[130px]
          sm:h-[180px]
          md:h-[260px]
          lg:h-[280px]
          overflow-hidden
          shadow-[0_12px_24px_-6px_rgba(0,0,0,0.12)]
        "
      >
        {/* USER FIGMA HERO BANNER BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/pics/exam-hero-bg.png"
            alt="Syllabus Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* HERO CONTAINER */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 sm:px-8 md:px-16">
          <h1
            className="
              shrink-0
              font-['Nexa_Text']
              text-[28px]
              sm:text-[38px]
              md:text-[56px]
              lg:text-[64px]
              font-black
              uppercase
              tracking-tight
              text-[#092B55]
              leading-none
            "
          >
            SYLLABUS
          </h1>

          <div
            className="
              relative
              h-[95px]
              w-[100px]
              shrink-0
              sm:h-[140px]
              sm:w-[150px]
              md:h-[220px]
              md:w-[240px]
              lg:h-[250px]
              lg:w-[270px]
            "
          >
            <Image
              src="/pics/book.png"
              alt="Syllabus"
              fill
              priority
              className="object-contain object-right"
            />
          </div>
        </div>
      </section>

      {/* =========================
          PAGE CONTENT
          ========================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 md:px-[6.5%] md:py-12">
        {/* Intro copy */}
        <div
          className="
            max-w-[1000px]
            font-['Nexa_Text']
            text-sm
            font-normal
            leading-relaxed
            text-[#111111]
            sm:text-base
            md:text-[17px]
          "
        >
          Nexus QUEST spans four key academic areas —{" "}
          <strong className="font-bold text-[#0F2851]">Logical Reasoning</strong>,{" "}
          <strong className="font-bold text-[#0F2851]">Mathematics</strong>,{" "}
          <strong className="font-bold text-[#0F2851]">Physics</strong>, and{" "}
          <strong className="font-bold text-[#0F2851]">Chemistry</strong>, testing students&#39;
          theoretical knowledge, problem-solving capabilities, and real-world
          application of basic concepts. The examination balances
          curriculum-aligned topics with analytical reasoning, delivering a
          complete evaluation of scholarly performance across varied subjects.
        </div>

        {/* =========================
            CLASS TABS (desktop)
            ========================= */}
        <div className="mt-10 hidden md:flex gap-8 border-b border-[#0F2851]/30 w-full font-['Nexa_Text']">
          {CLASS_TABS.map((tab, i) => (
            <button
              key={tab.classNum}
              onClick={() => setActiveNav(i + 1)}
              className={`pb-3 text-sm md:text-base font-bold uppercase tracking-wide transition-opacity ${
                activeNav === i + 1
                  ? "text-[#0F2851] border-b-2 border-[#0F2851]"
                  : "text-[#0F2851]/50 hover:text-[#0F2851]/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* =========================
            CLASS DROPDOWNS (mobile)
            ========================= */}
        <div className="mt-8 w-full space-y-4 md:hidden font-['Nexa_Text']">
          {CLASS_TABS.map((classItem) => (
            <div
              key={classItem.classNum}
              className="overflow-hidden rounded-lg bg-[#0F2851] shadow-md"
            >
              <div
                className="flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-opacity-90"
                onClick={() => toggleDropdown(classItem.classNum)}
              >
                <span className="text-lg font-semibold text-[#F0ECCF]">
                  {classItem.label}
                </span>
                <div className="text-[#F0ECCF]">
                  {openDropdowns.has(classItem.classNum) ? (
                    <ChevronUp className="h-6 w-6" />
                  ) : (
                    <ChevronDown className="h-6 w-6" />
                  )}
                </div>
              </div>

              {openDropdowns.has(classItem.classNum) && (
                <div className="grid w-full auto-rows-max">
                  {getSyllabusData(classItem.classNum).map((item, rowIdx) => {
                    const bgOpacity =
                      rowIdx === 0 ? 1 : Math.max(0, 0.5 - 0.1 * rowIdx);
                    const fontColor = rowIdx !== 0 ? "#F0ECCF" : "#0F2851";

                    return (
                      <div
                        key={rowIdx}
                        className="grid h-fit w-full grid-cols-[1fr_1.5fr] items-center gap-3 px-4 py-3.5 sm:px-6 sm:py-5"
                        style={{
                          background: `rgba(240, 236, 207, ${bgOpacity})`,
                          color: fontColor,
                        }}
                      >
                        <div
                          className={`text-left text-sm sm:text-base leading-relaxed ${
                            rowIdx === 0 ? "font-bold uppercase tracking-wide" : "font-medium"
                          }`}
                        >
                          {item.col1}
                        </div>
                        <div
                          className={`text-left text-xs sm:text-sm leading-relaxed ${
                            rowIdx === 0 ? "font-bold uppercase tracking-wide" : "font-medium"
                          }`}
                        >
                          {item.col2}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* =========================
            SYLLABUS TABLE (desktop)
            ========================= */}
        <div className="relative mt-8 hidden w-full auto-rows-max md:grid font-['Nexa_Text']">
          {getSyllabusData(activeNav + 5).map((item, rowIdx) => {
            const bgOpacity =
              rowIdx === 0 ? 1 : Math.max(0, 0.5 - 0.1 * rowIdx);
            const fontColor = rowIdx !== 0 ? "#0F2851" : "#F0ECCF";

            return (
              <div
                key={rowIdx}
                className="grid h-fit w-full grid-cols-[1fr_2.5fr] items-center gap-6 px-8 py-5"
                style={{
                  background: `rgba(15, 40, 81, ${
                    rowIdx === 0 ? 1 : bgOpacity * 0.15
                  })`,
                  color: fontColor,
                }}
              >
                <div
                  className={`text-left text-base lg:text-lg leading-relaxed ${
                    rowIdx === 0 ? "font-bold uppercase tracking-wide" : "font-medium"
                  }`}
                >
                  {item.col1}
                </div>
                <div
                  className={`text-left text-base lg:text-lg leading-relaxed ${
                    rowIdx === 0 ? "font-bold uppercase tracking-wide" : "font-medium"
                  }`}
                >
                  {item.col2}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
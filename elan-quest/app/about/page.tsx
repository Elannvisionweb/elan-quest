"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen md:h-screen w-full flex-col md:overflow-hidden bg-[#F0ECCF] font-sans text-[#0f2438]">
      {/* ──────────────── 0. BACKGROUND PATTERN LAYER ──────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage: "url('/pics/pattern.png')",
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />

      {/* ──────────────── 1. HEADER ──────────────── */}
      <header className="relative z-30 w-full shrink-0 overflow-hidden shadow-[0_12px_24px_-6px_rgba(0,0,0,0.12)]">
        {/* USER FIGMA HERO BANNER BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/pics/exam-hero-bg.png"
            alt="About Us Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 mx-auto flex h-[130px] sm:h-[180px] md:h-[260px] lg:h-[280px] max-w-[1440px] items-center justify-between px-5 sm:px-8 md:px-16">
          {/* ABOUT US TITLE */}
          <h1 className="shrink-0 font-['Nexa_Text'] text-[28px] sm:text-[38px] md:text-[56px] lg:text-[64px] font-black uppercase tracking-tight text-[#092B55] leading-none">
            ABOUT US
          </h1>

          {/* MEDAL IMAGE */}
          <div className="relative h-[110px] w-[120px] shrink-0 sm:h-[150px] sm:w-[170px] md:h-[220px] md:w-[260px] lg:h-[250px] lg:w-[300px]">
            <Image
              src="/pics/medal.png"
              alt="Hand holding medal"
              fill
              priority
              className="object-contain object-right"
            />
          </div>
        </div>
      </header>

      {/* ──────────────── 2. INDEPENDENTLY SCROLLABLE CONTENT ──────────────── */}
      <main className="relative z-10 w-full flex-1 md:overflow-y-auto">
        <div className="mx-auto max-w-5xl space-y-12 px-6 py-10 pb-24 md:px-12">
          {/* ABOUT NEXUS QUEST */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="space-y-5"
          >
            <h2 className="font-['Nexa_Text'] text-[28px] sm:text-[34px] md:text-[42px] font-black uppercase tracking-wide text-[#0F2851] leading-tight">
              ABOUT NEXUS QUEST
            </h2>
            <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <strong className="font-bold text-[#0F2851]">Nexus QUEST</strong> is a{" "}
              <strong className="font-bold text-[#0F2851]">nationwide Talent Hunt Examination</strong> for school
              students, conducted as part of <strong className="font-bold text-[#0F2851]">Elan &amp; nVision</strong>,{" "}
              <strong className="font-bold text-[#0F2851]">IIT Hyderabad</strong>&apos;s annual techno-cultural fest.
              It&apos;s designed to identify and celebrate exceptional scholastic
              talent from schools across the country.
            </p>
            <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111] font-medium">
              Unlike routine textbook-based Olympiads, Nexus QUEST offers:
            </p>
            <div className="space-y-3.5 text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                <strong className="font-bold text-[#0F2851]">Original, Non-Rote Problems:</strong>{" "}
                Puzzles that test how students think, not what they have memorized.
              </p>
              <p>
                <strong className="font-bold text-[#0F2851]">Analytical &amp; Multidisciplinary Focus:</strong>{" "}
                Problem-solving skills over syllabus recall.
              </p>
              <p>
                <strong className="font-bold text-[#0F2851]">Alignment with National Educational Standards:</strong>{" "}
                Designed to encourage meaningful and holistic learning.
              </p>
              <p>
                <strong className="font-bold text-[#0F2851]">A Genuine Platform:</strong>{" "}
                Direct exposure to the IIT community, plus networking opportunities that
                help students think about future academic and career paths.
              </p>
            </div>
            <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              It&apos;s run entirely by students and faculty of one of India&apos;s top-ranked technical institutes, giving participants a taste of the IIT ecosystem well before college.
            </p>
          </motion.section>

          {/* ABOUT ELAN & NVISION */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
            className="space-y-5"
          >
            <h2 className="font-['Nexa_Text'] text-[28px] sm:text-[34px] md:text-[42px] font-black uppercase tracking-wide text-[#0F2851] leading-tight">
              ABOUT ELAN &amp; NVISION
            </h2>
            <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              Elan &amp; nVision is IIT Hyderabad&apos;s flagship techno-cultural fest and the platform Nexus QUEST is held under. Now in its 17th edition, it&apos;s recognized as South India&apos;s largest student-run techno-cultural festival, drawing over 30,000 students, innovators, artists, and young entrepreneurs from across the country over three days.
            </p>
            <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111] font-medium">
              What this means for Nexus QUEST participants and their families:
            </p>
            <div className="space-y-3.5 text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                <strong className="font-bold text-[#0F2851]">Performances by Major Artists:</strong>{" "}
                Recent editions have featured renowned artists such as singer Mohit Chauhan.
              </p>
              <p>
                <strong className="font-bold text-[#0F2851]">A Large, Energetic Campus Event:</strong>{" "}
                Experience a vibrant campus atmosphere rather than a quiet, isolated exam.
              </p>
              <p>
                <strong className="font-bold text-[#0F2851]">Beyond the Olympiad:</strong>{" "}
                Exposure to robotics contests, hackathons, and design challenges alongside
                the Olympiad.
              </p>
            </div>
          </motion.section>

          {/* ABOUT IITH */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={2}
            className="space-y-5"
          >
            <h2 className="font-['Nexa_Text'] text-[28px] sm:text-[34px] md:text-[42px] font-black uppercase tracking-wide text-[#0F2851] leading-tight">
              ABOUT IIT HYDERABAD
            </h2>
            <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              Nexus QUEST is conducted by the Indian Institute of Technology Hyderabad (IITH), established in 2008 and now one of India&apos;s fastest-rising technical institutes.
            </p>
            <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111] font-medium pt-1">
              Why that matters for participating students:
            </p>
            <div className="space-y-3.5 text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                <strong className="font-bold text-[#0F2851]">NIRF Rankings:</strong>{" "}
                #12 Overall · #7 Engineering · #6 Innovation · #15 Research Institutions,
                placing IITH among the top technical institutes in the country.
              </p>
              <p>
                <strong className="font-bold text-[#0F2851]">Research-Driven Campus:</strong>{" "}
                Running &quot;Patent a Day: Mission 365,&quot; with 580+ patents already filed,
                including 210+ in the last year alone, across 30+ Centres and Centres of
                Excellence.
              </p>
              <p>
                <strong className="font-bold text-[#0F2851]">Strong Innovation Culture:</strong>{" "}
                Supporting 320+ student startups, with dedicated programs like{" "}
                <strong className="font-bold text-[#0F2851]">BUILD</strong> and{" "}
                <strong className="font-bold text-[#0F2851]">BHARATI</strong> that give first-year
                students hands-on experience with real engineering problems.
              </p>
              <p>
                For a school student, this means <strong className="font-bold text-[#0F2851]">Nexus QUEST</strong> isn&apos;t just
                another Olympiad — it&apos;s a direct touchpoint with a nationally top-ranked
                IIT and its research culture.
              </p>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
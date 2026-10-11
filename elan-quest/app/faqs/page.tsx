"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

type FaqItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

const faqSections: FaqSection[] = [
  {
    title: "General",
    items: [
      {
        id: "general-1",
        question: "What is Talent Hunt?",
        answer: (
          <>
            Talent Hunt is an academic Olympiad organized as part of Elan &
            nVision, IIT Hyderabad&apos;s annual techno-cultural festival. It
            is designed to assess students on conceptual understanding,
            logical reasoning, analytical thinking, and practical
            problem-solving — going beyond rote memorization.
          </>
        ),
      },
      {
        id: "general-2",
        question: "Who organizes Talent Hunt?",
        answer: (
          <>
            Talent Hunt is organized by Elan & nVision, the flagship
            techno-cultural fest of IIT Hyderabad — the largest college fest
            in Telangana and Andhra Pradesh, with 50,000+ attendees every
            edition.
          </>
        ),
      },
      {
        id: "general-3",
        question: "Who can participate?",
        answer: (
          <>
            Students currently studying in Classes 6th to 12th are eligible.
            Question papers are designed as per the standard/curriculum
            appropriate to each class group.
          </>
        ),
      },
      {
        id: "general-4",
        question: "What is the objective of Talent Hunt?",
        answer: (
          <>
            To encourage analytical thinking and problem-solving, inspire
            curiosity beyond the classroom, give students a platform to
            showcase academic potential, build confidence, and connect
            students with the IIT Hyderabad community.
          </>
        ),
      },
    ],
  },
  {
    title: "Exam Pattern & Syllabus",
    items: [
      {
        id: "exam-1",
        question: "What is the mode of examination?",
        answer: (
          <>
            The exam is conducted online on the Unstop platform with an
            integrated proctoring system, making it accessible and secure for
            participants across the country.
          </>
        ),
      },
      {
        id: "exam-2",
        question: "How long is the exam?",
        answer: <>The exam duration is 90 minutes.</>,
      },
      {
        id: "exam-3",
        question: "What is the question format?",
        answer: (
          <>
            50 multiple-choice questions (MCQs), each with a single correct
            answer.
          </>
        ),
      },
      {
        id: "exam-4",
        question: "What is the marking scheme?",
        answer: (
          <div className="space-y-1.5 font-medium">
            <p><strong className="font-bold text-[#0F2851]">+1 mark</strong> for every correct answer</p>
            <p><strong className="font-bold text-[#0F2851]">−0.5 marks</strong> for every incorrect answer</p>
            <p><strong className="font-bold text-[#0F2851]">0 marks</strong> for unattempted questions</p>
          </div>
        ),
      },
      {
        id: "exam-5",
        question: "What subjects are covered in the syllabus?",
        answer: <>Check the Syllabus page.</>,
      },
      {
        id: "exam-6",
        question:
          "What is the marks/question distribution for Classes 6–10?",
        answer: (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--foreground)]/20">
                  <th className="py-2 pr-4 font-semibold">Subject</th>
                  <th className="py-2 font-semibold">No. of Questions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--foreground)]/10">
                  <td className="py-2 pr-4">Logical Reasoning</td>
                  <td className="py-2">15</td>
                </tr>
                <tr className="border-b border-[var(--foreground)]/10">
                  <td className="py-2 pr-4">Mathematics</td>
                  <td className="py-2">15</td>
                </tr>
                <tr className="border-b border-[var(--foreground)]/10">
                  <td className="py-2 pr-4">Physics</td>
                  <td className="py-2">10</td>
                </tr>
                <tr className="border-b border-[var(--foreground)]/10">
                  <td className="py-2 pr-4">Chemistry</td>
                  <td className="py-2">10</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Total</td>
                  <td className="py-2 font-semibold">50</td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: "exam-7",
        question:
          "What is the marks/question distribution for Classes 11 & 12?",
        answer: (
          <>
            <p className="mb-3">
              For Classes 11 and 12, the weightage shifts to give more
              emphasis to core PCM subjects:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--foreground)]/20">
                    <th className="py-2 pr-4 font-semibold">Subject</th>
                    <th className="py-2 font-semibold">No. of Questions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--foreground)]/10">
                    <td className="py-2 pr-4">Logical Reasoning</td>
                    <td className="py-2">10</td>
                  </tr>
                  <tr className="border-b border-[var(--foreground)]/10">
                    <td className="py-2 pr-4">Mathematics</td>
                    <td className="py-2">20</td>
                  </tr>
                  <tr className="border-b border-[var(--foreground)]/10">
                    <td className="py-2 pr-4">Physics</td>
                    <td className="py-2">10</td>
                  </tr>
                  <tr className="border-b border-[var(--foreground)]/10">
                    <td className="py-2 pr-4">Chemistry</td>
                    <td className="py-2">10</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold">Total</td>
                    <td className="py-2 font-semibold">50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ),
      },
      {
        id: "exam-8",
        question: "Will the difficulty level be the same for all classes?",
        answer: (
          <>
            No. Question sets are standard-appropriate — each class group
            (6–8, 9–10, 11–12, etc.) is assessed on syllabus and difficulty
            relevant to that level.
          </>
        ),
      },
    ],
  },
  {
    title: "Registration & Fees",
    items: [
      {
        id: "reg-1",
        question: "When does registration open?",
        answer: <>Registration opens on 23rd August, 2026.</>,
      },
      {
        id: "reg-2",
        question: "What is the last date to register?",
        answer: (
          <>Last date for registrations on Unstop: 15th October, 2026.</>
        ),
      },
      {
        id: "reg-3",
        question: "What is the registration fee?",
        answer: <>₹350 per participant.</>,
      },
      {
        id: "reg-4",
        question: "How can I pay the registration fee?",
        answer: (
          <>
            Payment is made directly through the Unstop platform using UPI,
            net banking, or debit/credit cards.
          </>
        ),
      },
    ],
  },
  {
    title: "Exam Day & Results",
    items: [
      {
        id: "day-1",
        question: "When will the exam be conducted?",
        answer: (
          <>The exam is scheduled for the 1st week of November, 2026.</>
        ),
      },
      {
        id: "day-2",
        question: "Where do I take the exam?",
        answer: (
          <>
            The exam is entirely online, conducted on the Unstop platform
            from your home/school with AI/human proctoring — no travel
            required.
          </>
        ),
      },
      {
        id: "day-3",
        question: "When will results and prizes be announced?",
        answer: <>Prize distribution is scheduled for 8th January.</>,
      },
      {
        id: "day-4",
        question: "Will I get a certificate?",
        answer: (
          <>
            All participants receive a certificate of participation, with
            special recognition/awards for top performers (as per the
            results and prize structure announced closer to the event).
          </>
        ),
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        id: "support-1",
        question: "Who do I contact for queries?",
        answer: (
          <>
            Reach out to the Talent Hunt / Elan & nVision team via the
            official contact emails and social handles listed on the
            website, or connect with the PR & Outreach team.
          </>
        ),
      },
      {
        id: "support-2",
        question: "What if I face technical issues during the exam?",
        answer: (
          <>
            Since the exam runs on the Unstop platform, any technical issues
            should be reported immediately through Unstop&apos;s support
            channel or the contact details shared before the exam.
          </>
        ),
      },
    ],
  },
];

export default function FaqsPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F0ECCF] text-[#0F2851] font-['Nexa_Text']">
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

      {/* ──────────────── 1. HERO BANNER ──────────────── */}
      <header className="relative z-30 w-full shrink-0 overflow-hidden shadow-[0_12px_24px_-6px_rgba(0,0,0,0.12)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/pics/exam-hero-bg.png"
            alt="FAQs Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 mx-auto flex h-[130px] sm:h-[180px] md:h-[260px] lg:h-[280px] max-w-[1440px] items-center justify-between px-5 sm:px-8 md:px-16">
          <h1 className="shrink-0 font-['Nexa_Text'] text-[28px] sm:text-[38px] md:text-[56px] lg:text-[64px] font-black uppercase tracking-tight text-[#092B55] leading-none">
            FAQS
          </h1>
        </div>
      </header>

      {/* ──────────────── 2. CONTENT ──────────────── */}
      <main className="relative z-10 mx-auto w-full max-w-[1000px] px-6 py-10 pb-24 md:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
          className="space-y-14"
        >
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={sectionIndex + 2}
            >
              <h2 className="font-['Nexa_Text'] text-[24px] sm:text-[28px] md:text-[32px] font-black uppercase tracking-wide text-[#0F2851] mb-6">
                {section.title}
              </h2>

              <div className="flex flex-col">
                {section.items.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="border-b border-[#0F2851]/15"
                    >
                      <button
                        onClick={() => toggle(item.id)}
                        className="w-full flex justify-between items-center gap-4 text-left py-5 cursor-pointer font-['Nexa_Text'] font-bold text-lg sm:text-xl text-[#0F2851]"
                      >
                        <span>
                          {item.question}
                        </span>
                        <ChevronDown
                          size={22}
                          className={`shrink-0 transition-transform duration-300 text-[#0F2851] ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen
                            ? "max-h-[600px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pb-6 pr-6 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          <p className="text-sm text-[#0F2851]/70 font-medium">
            Note: All dates are provisional and subject to change. Please
            check the official website for the latest updates.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
"use client";

import Image from "next/image";

export default function Results() {
  return (
<main
  className="relative w-full overflow-x-hidden bg-[#F0ECCF] text-[#092B55]"
style={{
    backgroundImage: "url('/pics/pattern.png')",
    backgroundSize: "auto",
    backgroundPosition: "center top", 
    backgroundRepeat: "repeat",
  }}
>
  <div className="relative z-10">
        {/* =======================================================
            HERO
            DESKTOP: 515px
            MOBILE: ~220px
        ======================================================= */}
        <section
          className="
            relative
            z-20
            w-full
            h-[130px]
            sm:h-[180px]
            md:h-[515px]
            overflow-hidden
            px-5
            sm:px-8
            md:px-0
            bg-[#FAF6E7]
            border-b
            border-[#092B55]/10
            shadow-[0_14px_28px_-6px_rgba(0,0,0,0.14),0_6px_12px_-3px_rgba(0,0,0,0.08)]
          "
          style={{
            backgroundImage: "url('/pics/pattern.png')",
            backgroundSize: "auto",
            backgroundPosition: "center top",
            backgroundRepeat: "repeat",
          }}
        >
          {/* DESKTOP HEADING - UNCHANGED */}
          <h1
            className="
              absolute
              left-[146px]
              top-[189px]
              z-10
              hidden
              font-['Nexa_Text']
              text-[91px]
              font-black
              uppercase
              leading-none
              text-[#092B55]
              md:block
            "
          >
            EXAM DETAILS
          </h1>

          {/* MOBILE HERO CONTAINER */}
          <div className="flex h-full w-full items-center justify-between md:hidden">
            <h1
              className="
                font-['Nexa_Text']
                text-[28px]
                font-black
                uppercase
                leading-tight
                text-[#092B55]
                sm:text-[40px]
              "
            >
              EXAM DETAILS
            </h1>

            <div
              className="
                relative
                h-[110px]
                w-[110px]
                flex-shrink-0
                sm:h-[150px]
                sm:w-[150px]
              "
            >
              <Image
                src="/pics/exam.png"
                alt="Exam details"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* DESKTOP IMAGE - UNCHANGED */}
          <div
            className="
              absolute
              left-[887px]
              top-[48px]
              z-10
              hidden
              h-[483px]
              w-[461px]
              md:block
            "
          >
            <Image
              src="/pics/exam.png"
              alt="Exam details"
              fill
              priority
              className="object-contain"
            />
          </div>
        </section>

        {/* =======================================================
            CONTENT
        ======================================================= */}
     <div className="relative mx-auto min-h-0 md:min-h-[1800px] w-full max-w-[1440px]">
          {/* =====================================================
              DESKTOP TABLE
          ===================================================== */}
          <section
            className="
              absolute
              left-[146px]
              top-[83px]
              hidden
              w-[1164px]
              font-['Nexa_Text']
              text-[32px]
              font-light
              leading-none
              text-[#092B55]
              md:block
            "
          >
            <div className="grid grid-cols-[500px_664px]">
              <div className="flex h-[81px] items-center border-2 border-[#092B55] px-[10px]">
                Exam Organizing Body
              </div>

              <div className="flex h-[81px] items-center border-y-2 border-r-2 border-[#092B55] px-[10px]">
                Elan &amp; nVision, IIT Hyderabad
              </div>

              <div className="flex h-[81px] items-center border-x-2 border-b-2 border-[#092B55] px-[10px]">
                Eligibility
              </div>

              <div className="flex h-[81px] items-center border-r-2 border-b-2 border-[#092B55] px-[10px]">
                Students from classes 6 - 12
              </div>

              <div className="flex h-[81px] items-center border-x-2 border-b-2 border-[#092B55] px-[10px]">
                Exam Level
              </div>

              <div className="flex h-[81px] items-center border-r-2 border-b-2 border-[#092B55] px-[10px]">
                Intermediate
              </div>

              <div className="flex h-[81px] items-center border-x-2 border-b-2 border-[#092B55] px-[10px]">
                Application Process
              </div>

              <div className="flex h-[81px] items-center border-r-2 border-b-2 border-[#092B55] px-[10px]">
                Via Unstop
              </div>

              <div className="flex h-[81px] items-center border-x-2 border-b-2 border-[#092B55] px-[10px]">
                Exam Dates
              </div>

              <div className="flex h-[81px] items-center border-r-2 border-b-2 border-[#092B55] px-[10px]">
                November 1st Week
              </div>

              <div className="flex h-[81px] items-center border-x-2 border-b-2 border-[#092B55] px-[10px]">
                Exam Mode
              </div>

              <div className="flex h-[81px] items-center border-r-2 border-b-2 border-[#092B55] px-[10px]">
                Online
              </div>

              <div className="flex h-[81px] items-center border-x-2 border-b-2 border-[#092B55] px-[10px]">
                Fee of registration
              </div>

              <div className="flex h-[81px] items-center border-r-2 border-b-2 border-[#092B55] px-[10px]">
                ₹ 350
              </div>

              <div className="h-[243px] border-x-2 border-b-2 border-[#092B55] px-[10px] pt-[12px]">
                Objective
              </div>

              <div className="h-[243px] border-r-2 border-b-2 border-[#092B55] px-[10px] pt-[12px] leading-[1.15]">
                To identify young academic talent by promoting conceptual
                learning, logical reasoning and creative problem solving
              </div>

              <div className="flex h-[81px] items-center border-x-2 border-b-2 border-[#092B55] px-[10px]">
                Languages
              </div>

              <div className="flex h-[81px] items-center border-r-2 border-b-2 border-[#092B55] px-[10px]">
                English
              </div>

              <div className="flex h-[81px] items-center border-x-2 border-b-2 border-[#092B55] px-[10px]">
                Duration
              </div>

              <div className="flex h-[81px] items-center border-r-2 border-b-2 border-[#092B55] px-[10px]">
                90 minutes
              </div>
            </div>
          </section>

          {/* =====================================================
              MOBILE TABLE
          ===================================================== */}
          <section
            className="
              relative
              block
              px-5
              pt-8
              md:hidden
            "
          >
            <div
              className="
                w-full
                overflow-hidden
                border-2
                border-[#092B55]
                font-['Nexa_Text']
                text-[13px]
                leading-[1.25]
                text-[#092B55]
                sm:text-[15px]
              "
            >
              {[
                ["Exam Organizing Body", "Elan & nVision, IIT Hyderabad"],
                ["Eligibility", "Students from classes 6 - 12"],
                ["Exam Level", "Intermediate"],
                ["Application Process", "Via Unstop"],
                ["Exam Dates", "November 1st Week"],
                ["Exam Mode", "Online"],
                ["Fee of registration", "₹ 350"],
                [
                  "Objective",
                  "To identify young academic talent by promoting conceptual learning, logical reasoning and creative problem solving",
                ],
                ["Languages", "English"],
                ["Duration", "90 minutes"],
              ].map(([label, value], index) => (
                <div key={index} className="grid grid-cols-[40%_60%]">
                  <div
                    className="
                      border-b
                      border-r
                      border-[#092B55]
                      px-2
                      py-3
                      font-medium
                    "
                  >
                    {label}
                  </div>

                  <div
                    className="
                      border-b
                      border-[#092B55]
                      px-2
                      py-3
                    "
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* =====================================================
              DATES
          ===================================================== */}
          <section
            className="
              absolute
              left-[143px]
              top-[1153px]
              hidden
              font-['Nexa_Text']
              text-[#092B55]
              md:block
            "
          >
            <h2 className="font-['Nexa_Text'] text-[64px] font-bold uppercase leading-none">
              DATES
            </h2>

            <div className="ml-[3px] mt-[28px] font-['Nexa_Text'] text-[32px] font-bold text-black">
              <p>Registration opens: September 8, 2026</p>
              <p>Registrations Closes: November 22, 2026</p>
              <p>Quest Olympiad Round 1: November 28, 2026</p>
               <p>Quest Olympiad Round 2: (Date To Be Announced)</p>
              <p>Prize Distribution: (Date To Be Announced)</p>
            </div>
          </section>

          {/* =====================================================
              MOBILE DATES
          ===================================================== */}
          <section
            className="
              relative
              block
              px-5
              pt-10
              text-[#092B55]
              md:hidden
            "
          >
            <h2
              className="
                font-['Nexa_Text']
                text-[36px]
                font-bold
                uppercase
                leading-none
                sm:text-[44px]
              "
            >
              DATES
            </h2>

            <div
              className="
                mt-5
                font-['Nexa_Text']
                text-[14px]
                font-normal
                leading-[1.35]
                text-black
                sm:text-[16px]
              "
            >
              <p>Registration opens: September 8, 2026</p>
              <p>Registrations Closes: November 22, 2026</p>
              <p>Quest Olympiad Round 1: November 28, 2026</p>
               <p>Quest Olympiad Round 2: (Date To Be Announced)</p>
              <p>Prize Distribution: (Date To Be Announced)</p>
            </div>
          </section>

          {/* =====================================================
              DESKTOP ELIGIBILITY
          ===================================================== */}
          <section
            className="
              absolute
              left-[143px]
              top-[1522px]
              hidden
              w-[1160px]
              font-['Nexa_Text']
              text-[#092B55]
              md:block
            "
          >
            <h2 className="font-['Nexa_Text'] text-[64px] font-bold uppercase leading-none">
              ELIGIBILITY
            </h2>

            <div className="mt-[28px] font-['Nexa_Text'] text-[32px] font-normal leading-none text-black">
              <div className="flex items-start gap-[14px]">
                <span>•</span>
                <p>
                  Students currently enrolled in Classes 6th to 12th from any
                  recognized school are eligible to participate in Nexus QUEST.
                </p>
              </div>

              <div className="mb-96 mt-[38px] flex items-start gap-[14px]">
                <span>•</span>
                <p>
                  Students from all educational boards (CBSE, ICSE, State boards)
                  within the specified grade range can apply for the examination.
                </p>
              </div>
            </div>
          </section>

          {/* =====================================================
              MOBILE ELIGIBILITY
          ===================================================== */}
          <section
            className="
              relative
              block
              px-5
              pb-16
              pt-10
              text-[#092B55]
              md:hidden
            "
          >
            <h2
              className="
                font-['Nexa_Text']
                text-[36px]
                font-bold
                uppercase
                leading-none
                sm:text-[44px]
              "
            >
              ELIGIBILITY
            </h2>

            <div
              className="
                mt-5
                font-['Nexa_Text']
                text-[14px]
                font-normal
                leading-[1.4]
                text-black
                sm:text-[16px]
              "
            >
              <div className="flex items-start gap-2">
                <span>•</span>
                <p>
                  Students currently enrolled in Classes 6th to 12th from any
                  recognized school are eligible to participate in Nexus QUEST.
                </p>
              </div>

              <div className="mt-6 flex items-start gap-2">
                <span>•</span>
                <p>
                  Students from all educational boards (CBSE, ICSE, State boards)
                  within the specified grade range can apply for the examination.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
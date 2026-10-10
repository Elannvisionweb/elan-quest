"use client";

import { useState } from "react";
import Image from "next/image";
import RegisterPopUp from "./components/common/RegisterPopUp";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const perks = [
    {
      id: 1,
      text: "Chance to visit IIT Hyderabad",
    },
    {
      id: 3,
      text: "Merit Medals and Certificates",
    },
    {
      id: 2,
      text: "Exclusive goodies and rewards",
    },
  ];

  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#F0ECCF]
        text-[#0F2851]
      "
    >
      {/* Registration Modal */}
      {showPopup && <RegisterPopUp setShowPopup={setShowPopup} />}

     <div
  className="absolute inset-0"
  style={{
    backgroundImage: "url('/pics/pattern.png')",
    backgroundRepeat: "repeat",
  }}
/>

      {/* =====================================================
          PAGE CONTENT
          ===================================================== */}
      <main className="relative z-10 w-full">
        {/* =====================================================
            HERO
            ===================================================== */}
        <section
          className="
            relative
            w-full
            min-h-[480px]
            sm:min-h-[640px]
            md:min-h-[900px]
            overflow-visible
          "
        >
          {/* =================================================
              RUNNER
              Desktop stays exactly as before.
              Mobile gets a wider image so it doesn't squeeze.
              ================================================= */}
          {/* Runner - hero only */}
          <div
            className="
    absolute
    z-0
    pointer-events-none

    /* MOBILE */
    top-[90px]
    left-[-5%]
    w-[115%]
    max-w-none
    sm:top-[70px]
    sm:left-[-3%]
    sm:w-[108%]

    /* DESKTOP - UNCHANGED */
    md:top-0
    md:left-0
    md:w-full
  "
          >
            <Image
              src="/pics/newColored.png"
              alt="Runner Vector Illustration"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto"
            />
          </div>

          {/* =================================================
              HERO CONTENT
              ================================================= */}
          <div
            className="
              relative
              z-10
              mx-auto
              min-h-[480px]
              sm:min-h-[640px]
              md:min-h-[900px]
              w-full
              max-w-[1440px]
            "
          >
            {/* =================================================
                QUEST LOGO
                ================================================= */}
            {/* Quest Logo */}
            <div
              className="
    absolute
    z-20

    /* MOBILE */
    left-[5%]
    top-[25px]
    w-[220px]
    sm:w-[300px]

    /* DESKTOP — RESPONSIVE (UNCHANGED) */
    md:left-[4.5%]
    md:top-[clamp(160px,5vw,240px)]
    md:w-[clamp(430px,45vw,650px)]
  "
            >
              <Image
                src="/pics/questColor.png"
                alt="Nexus Quest Logo"
                width={950}
                height={475}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Register Button */}
            <button
              onClick={togglePopup}
              className="
    absolute
    z-30
    rounded-[12px]
    bg-[#FF7779]
    text-white
    font-black
    uppercase
    tracking-wide
    shadow-md
    transition-all
    duration-200
    hover:scale-105
    hover:bg-[#ff6568]
    active:scale-95
    cursor-pointer
    whitespace-nowrap

    /* MOBILE */
    left-[5%]
    top-[140px]
    px-4
    py-2
    text-xs
    sm:top-[190px]
    sm:px-5
    sm:py-2.5
    sm:text-sm

    /* DESKTOP — RESPONSIVE (UNCHANGED) */
    md:left-[28%]
    md:top-[clamp(480px,27vw,580px)]
md:px-[clamp(20px,2.8vw,34px)]
md:py-[clamp(13px,1.4vw,18px)]
md:text-[clamp(18px,1.6vw,23px)]
  "
            >
              REGISTER NOW!
            </button>
          </div>
        </section>

        {/* =====================================================
            WHAT IS QUEST?
            ===================================================== */}
        <section
          className="
            relative
            w-full
            px-6
            pt-10
            pb-[40px]
            sm:px-10
            sm:pt-16
            md:px-[6.5%]
            md:pt-[260px]
            md:pb-[50px]
          "
        >
          <div className="mx-auto w-full max-w-[1180px] text-left">
            <h2
              className="
                mb-5
                text-[34px]
                font-black
                uppercase
                tracking-tight
                text-[#0F2851]
                sm:text-[46px]
                md:text-[64px]
                lg:text-[76px]
                leading-[1.08]
              "
            >
              WHAT IS QUEST?
            </h2>

            <p
              className="
                text-[18px]
                font-normal
                leading-[1.5]
                text-[#0F2851]
                sm:text-[20px]
                md:text-[24px]
                lg:text-[27px]
              "
            >
              Nexus QUEST is a nationwide Talent Hunt Examination conducted
              by Elan &amp; nVision, a student body of IIT Hyderabad.
            </p>

            <p
              className="
                mt-4
                text-[18px]
                font-normal
                leading-[1.5]
                text-[#0F2851]
                sm:text-[20px]
                md:text-[24px]
                lg:text-[27px]
              "
            >
              <strong>Key date:</strong> Round 1 – November last week
            </p>

            <p
              className="
                mt-3
                text-[18px]
                font-normal
                leading-[1.5]
                text-[#0F2851]
                sm:text-[20px]
                md:text-[24px]
                lg:text-[27px]
              "
            >
              Challenge yourself beyond rote learning and discover
              opportunities connected to IIT Hyderabad.
            </p>
          </div>
        </section>

        {/* =====================================================
            EXAM STRUCTURE
            ===================================================== */}
        <section
          className="
            relative
            w-full
            px-6
            py-[35px]
            sm:px-10
            sm:py-[45px]
            md:px-[6.5%]
            md:py-[50px]
          "
        >
          <div className="mx-auto w-full max-w-[1180px] text-left">
            <h2
              className="
                mb-5
                text-[34px]
                font-black
                uppercase
                tracking-tight
                text-[#0F2851]
                sm:text-[46px]
                md:text-[64px]
                lg:text-[76px]
                leading-[1.08]
              "
            >
              EXAM STRUCTURE
            </h2>

            <p
              className="
                text-[18px]
                font-normal
                leading-[1.5]
                text-[#0F2851]
                sm:text-[20px]
                md:text-[24px]
                lg:text-[27px]
              "
            >
              The competition will be conducted in two rounds: an online
              Round 1, followed by an offline Round 2. The top performers
              from each class will be selected for Round 2, which will be an
              offline exam at the IIT Hyderabad campus.
            </p>

            <p
              className="
                mt-4
                text-[18px]
                font-normal
                leading-[1.5]
                text-[#0F2851]
                sm:text-[20px]
                md:text-[24px]
                lg:text-[27px]
              "
            >
              These students can enjoy exclusive campus experiences,
              including a detailed campus tour.
            </p>
          </div>
        </section>

        {/* =====================================================
            SYLLABUS
            ===================================================== */}
        <section
          className="
            relative
            w-full
            px-6
            pb-[35px]
            sm:px-10
            sm:pb-[45px]
            md:px-[6.5%]
            md:pb-[50px]
          "
        >
          <div className="mx-auto w-full max-w-[1180px] text-left">
            <h2
              className="
                mb-5
                text-[34px]
                font-black
                uppercase
                tracking-tight
                text-[#0F2851]
                sm:text-[46px]
                md:text-[64px]
                lg:text-[76px]
                leading-[1.08]
              "
            >
              SYLLABUS
            </h2>

            <p
              className="
                text-[18px]
                font-normal
                leading-[1.5]
                text-[#0F2851]
                sm:text-[20px]
                md:text-[24px]
                lg:text-[27px]
              "
            >
              The syllabus for each class is based exclusively on the
              relevant portions of the NCERT textbook prescribed for
              that class.
            </p>
          </div>
        </section>

        {/* =====================================================
            ELIGIBILITY
            ===================================================== */}
        <section
          className="
            relative
            w-full
            px-6
            py-[35px]
            sm:px-10
            sm:py-[45px]
            md:px-[6.5%]
            md:py-[50px]
          "
        >
          <div className="mx-auto w-full max-w-[1180px] text-left">
            <h2
              className="
                mb-5
                text-[34px]
                font-black
                uppercase
                tracking-tight
                text-[#0F2851]
                sm:text-[46px]
                md:text-[64px]
                lg:text-[76px]
                leading-[1.08]
              "
            >
              ELIGIBILITY
            </h2>

            <div
              className="
                space-y-4
                text-[18px]
                font-normal
                leading-[1.5]
                text-[#0F2851]
                sm:text-[20px]
                md:text-[24px]
                lg:text-[27px]
              "
            >
              <p>
                Students currently enrolled in Classes 6 to 12 from any
                recognized school are eligible to participate in Nexus QUEST.
              </p>

              <p>
                Students from all educational boards (CBSE, ICSE, State boards)
                within the specified grade range can apply for the examination.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPORTANT DATES
            ===================================================== */}
        <section
          className="
            relative
            w-full
            px-6
            py-[35px]
            sm:px-10
            sm:py-[45px]
            md:px-[6.5%]
            md:py-[50px]
          "
        >
          <div className="mx-auto w-full max-w-[1180px] text-left">
            <h2
              className="
                mb-6
                text-[34px]
                font-black
                uppercase
                tracking-tight
                text-[#0F2851]
                sm:text-[46px]
                md:text-[64px]
                lg:text-[76px]
                leading-[1.08]
              "
            >
              IMPORTANT DATES
            </h2>

            <div
              className="
                space-y-4
                text-[18px]
                font-normal
                leading-[1.5]
                text-[#0F2851]
                sm:text-[20px]
                md:text-[24px]
                lg:text-[27px]
              "
            >
              <div className="flex flex-col gap-1 border-b border-[#0F2851]/20 pb-3 sm:flex-row sm:justify-between">
                <span className="font-bold">Registration Opens</span>
                <span>September 8, 2026</span>
              </div>

              <div className="flex flex-col gap-1 border-b border-[#0F2851]/20 pb-3 sm:flex-row sm:justify-between">
                <span className="font-bold">Registration Closes</span>
                <span>October 15, 2026</span>
              </div>

              <div className="flex flex-col gap-1 border-b border-[#0F2851]/20 pb-3 sm:flex-row sm:justify-between">
                <span className="font-bold">Quest Olympiad Round 1</span>
                <span>November 7, 2026</span>
              </div>

              <div className="flex flex-col gap-1 border-b border-[#0F2851]/20 pb-3 sm:flex-row sm:justify-between">
                <span className="font-bold">Quest Olympiad Round 2</span>
                <span>Date TBA</span>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                <span className="font-bold">Prize Distribution</span>
                <span>Date TBA</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            REWARDS & OPPORTUNITIES
            ===================================================== */}
        <section
          className="
            relative
            w-full
            px-6
            py-[35px]
            sm:px-10
            sm:py-[45px]
            md:px-[6.5%]
            md:py-[50px]
          "
        >
          <div className="mx-auto w-full max-w-[1180px] text-left">
            <h2
              className="
                mb-6
                text-[34px]
                font-black
                uppercase
                tracking-tight
                text-[#0F2851]
                sm:text-[46px]
                md:text-[64px]
                lg:text-[76px]
                leading-[1.08]
              "
            >
              Rewards &amp; Opportunities
            </h2>

            <ul className="space-y-5 text-[18px] font-normal leading-[1.5] text-[#0F2851] sm:text-[20px] md:text-[24px] lg:text-[27px]">
              <li className="flex gap-3 items-start">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#0F2851]" />
                <p>
                  <span className="font-bold">Merit Recognition:</span>{" "}
                  Top 3 achievers from every class in each school will receive Merit
                  Medals and Certificates of Recognition.
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#0F2851]" />
                <p>
                  <span className="font-bold">Excellence Rewards:</span>{" "}
                  The Top 10 highest scorers in each class will receive Excellence
                  Medals, exclusive goodies, and rewards.
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#0F2851]" />
                <p>
                  <span className="font-bold">Special School Incentive:</span>{" "}
                  Schools with 200+ registered students will receive Elan &amp; nVision
                  festival passes for their top 2–3 performers at IIT Hyderabad.
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#0F2851]" />
                <p>
                  <span className="font-bold">IIT Hyderabad Campus Experience:</span>{" "}
                  Winners will get an opportunity to visit IIT Hyderabad and explore
                  its cutting-edge laboratories and state-of-the-art facilities through
                  guided tours.
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#0F2851]" />
                <p>
                  <span className="font-bold">Student Interaction &amp; Mentorship:</span>{" "}
                  Participants will interact with current IIT Hyderabad students,
                  gaining valuable insights, mentorship, and lasting connections.
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#0F2851]" />
                <p>
                  <span className="font-bold">Grand Award Celebration:</span>{" "}
                  Winners will be felicitated at a grand award ceremony at IIT
                  Hyderabad, with media coverage and recognition on official platforms.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* =====================================================
            PERKS AND PRIZES
            ===================================================== */}
        <section
          className="
            relative
            w-full
            px-6
            pt-[35px]
            pb-[80px]
            sm:px-10
            md:px-[6.5%]
          "
        >
          {/* HEADING */}
          <div className="mx-auto w-full max-w-[1180px] text-left">
            <h2
              className="
                mb-5
                text-[34px]
                font-black
                uppercase
                tracking-tight
                text-[#0F2851]
                sm:text-[46px]
                md:text-[64px]
                lg:text-[76px]
                leading-[1.08]
              "
            >
              PERKS AND PRIZES
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mb-8
                text-[18px]
                font-normal
                leading-[1.5]
                text-[#0F2851]
                sm:text-[20px]
                md:text-[24px]
                lg:text-[27px]
              "
            >
              The participating students stand to gain many prizes and goodies,
              as well as invaluable experience by participating in the Nexus
              QUEST examination:
            </p>
          </div>

          {/* =====================================================
              CARDS
              ===================================================== */}
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1180px]
              grid-cols-1
              gap-6
              sm:grid-cols-2
              md:grid-cols-3
              md:gap-7
            "
          >
            {perks.map((perk) => (
              <div
                key={perk.id}
                className="
                  flex
                  w-full
                  flex-col
                  rounded-[24px]
                  bg-[#A2C7FF]
                  p-4
                  sm:p-5
                  shadow-sm
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                "
              >
                {/* =================================================
                    IMAGE
                    ================================================= */}
                <div
                  className="
                    relative
                    w-full
                    h-[230px]
                    sm:h-[260px]
                    md:h-[300px]
                    shrink-0
                    overflow-hidden
                    rounded-[18px]
                    bg-[#F9F5E8]
                  "
                >
                  <Image
                    src={`/pics/perk${perk.id}.png`}
                    alt={perk.text}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* =================================================
                    DESCRIPTION
                    ================================================= */}
                <div className="flex flex-1 items-center justify-center pt-4 pb-1 text-center">
                  <p
                    className="
                      text-[18px]
                      font-bold
                      leading-tight
                      text-[#0F2851]
                      sm:text-[21px]
                      md:text-[25px]
                      lg:text-[27px]
                    "
                  >
                    {perk.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
       
      </main>
    </div>
  );
}
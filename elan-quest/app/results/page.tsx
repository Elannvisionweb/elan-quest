"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ResultsPage() {
  const processItems = [
    {
      id: 1,
      content:
        "Results will be declared within one month of the examination date and will be communicated through the official portal and registered email addresses.",
    },
    {
      id: 2,
      content:
        "Every participant will receive a detailed digital marksheet, outlining their scores in each section: Mental Ability (MAT), Mathematics, Physics, and Chemistry.",
    },
    {
      id: 3,
      content:
        "The overall performance will be assessed using the absolute scores from all sections combined.",
    },
    {
      id: 4,
      content:
        "In the event of tied scores, tie-breakers will be applied in the following order of section scores: Mathematics, followed by Mental Ability, Physics, and then Chemistry.",
    },
    {
      id: 5,
      content:
        "Top-performing students will be shortlisted for further honors based on standard-wise and school-wise performance segmentation.",
    },
    {
      id: 6,
      content:
        "Selected high achievers will receive formal invitations to the prestigious Elan & nVision festival at IIT Hyderabad, where they will be felicitated at a special award ceremony.",
    },
    {
      id: 7,
      content:
        "Final selections and merit lists will undergo a thorough validation process by the academic team before announcement.",
    },
    {
      id: 8,
      content:
        "Any changes or re-evaluation requests will be addressed through a formal review mechanism, details of which will be shared post result declaration.",
    },
  ];

  const awardsList = [
    {
      id: 1,
      content:
        "Top 3 achievers from every class in each school will be awarded Merit Medals and Certificates of Recognition.",
    },
    {
      id: 2,
      content:
        "Top 10 highest scorers per class will be presented with Excellence Medals and receive exclusive goodies and rewards.",
    },
    {
      id: 3,
      content:
        "Students will visit the IIT Hyderabad campus, exploring cutting-edge labs and state-of-the-art facilities on guided tours.",
    },
    {
      id: 4,
      content:
        "Participants will interact with current students, gaining insights, mentorship, and lasting connections.",
    },
    {
      id: 5,
      content:
        "Grand award celebration at IIT Hyderabad with media coverage — winners will be featured on official platforms to honor their success.",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full overflow-x-hidden bg-[#F0ECCF] text-[#0F2851]"
    >
      {/* Pattern Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/pics/pattern.png')",
          backgroundRepeat: "repeat",
        }}
      /> 

      {/* Hero Header Banner */}
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
          shadow-[0_12px_24px_-6px_rgba(0,0,0,0.12)]
        "
      >
        {/* USER FIGMA HERO BANNER BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/pics/exam-hero-bg.png"
            alt="Results Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* DESKTOP HEADING */}
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
          RESULTS
        </h1>

        {/* MOBILE HERO CONTAINER */}
        <div className="relative z-10 flex h-full w-full items-center justify-between md:hidden">
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
            RESULTS
          </h1>

          <div
            className="
              relative
              h-[125px]
              w-[130px]
              flex-shrink-0
              self-end
              sm:h-[175px]
              sm:w-[175px]
            "
          >
            <Image
              src="/pics/prize.png"
              alt="Results Trophy"
              fill
              priority
              className="object-contain object-bottom-right"
            />
          </div>
        </div>

        {/* DESKTOP IMAGE */}
        <div
          className="
            absolute
            left-[887px]
            bottom-0
            z-10
            hidden
            h-[490px]
            w-[470px]
            md:block
          "
        >
          <Image
            src="/pics/prize.png"
            alt="Results Trophy"
            fill
            priority
            className="object-contain object-bottom-right"
          />
        </div>
      </section>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 pb-20 space-y-12 sm:space-y-16">
        
        {/* Process Section */}
        <section className="space-y-5">
          <h2 className="font-['Nexa_Text'] text-[28px] sm:text-[34px] md:text-[42px] font-black uppercase tracking-wide text-[#0F2851] leading-tight">
            PROCESS
          </h2>

          <div className="space-y-4 text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
            {processItems.map((item) => (
              <p key={item.id} className="leading-relaxed">
                {item.content}
              </p>
            ))}
          </div>
        </section>

        {/* Awards & Prizes Section */}
        <section className="space-y-5">
          <h2 className="font-['Nexa_Text'] text-[28px] sm:text-[34px] md:text-[42px] font-black uppercase tracking-wide text-[#0F2851] leading-tight">
            AWARDS &amp; PRIZES
          </h2>

          <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111] font-medium">
            The participating students stand to gain many prizes and goodies, as
            well as invaluable experience by participating in the Nexus QUEST
            examination:
          </p>

          <div className="space-y-4 text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
            {awardsList.map((item) => (
              <p key={item.id} className="leading-relaxed">
                {item.content}
              </p>
            ))}
          </div>
        </section>

      </div>
    </motion.main>
  );
}
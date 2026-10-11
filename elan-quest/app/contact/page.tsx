import Image from "next/image";

const CONTACTS = [
  { name: "Ansika", number: "+91 97010 38745" },
  { name: "Manogna", number: "+91 91544 20779" },
  { name: "Aasritha", number: "+91 93924 67033" },
  { name: "Himanshu", number: "+91 85450 60014" },
  { name: "Shresta", number: "+91 70326 66150" },
  { name: "Snehita", number: "+91 83097 46984" },
];

export default function ContactUs() {
  return (
    <div className="relative flex min-h-screen md:h-screen w-full flex-col md:overflow-hidden bg-[#F0ECCF] text-[#0F2851] font-['Nexa_Text']">
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
            alt="Contact Us Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 mx-auto flex h-[130px] sm:h-[180px] md:h-[260px] lg:h-[280px] max-w-[1440px] items-center justify-between px-5 sm:px-8 md:px-16">
          <h1 className="shrink-0 font-['Nexa_Text'] text-[28px] sm:text-[38px] md:text-[56px] lg:text-[64px] font-black uppercase tracking-tight text-[#092B55] leading-none">
            CONTACT US
          </h1>
        </div>
      </header>

      {/* ──────────────── 2. PAGE CONTENT (SCROLLABLE) ──────────────── */}
      <main className="relative z-10 w-full flex-1 md:overflow-y-auto">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-10 pb-24 sm:px-10 md:px-[6.5%] md:py-16">
          {/* =========================
              CONTACTS GRID
              ========================= */}
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 md:gap-x-24 md:gap-y-16 lg:grid-cols-3">
            {CONTACTS.map((contact) => (
              <div
                key={contact.name}
                className="border-b border-[#0F2851]/15 pb-6"
              >
                <p className="font-['Nexa_Text'] text-xl font-bold sm:text-2xl md:text-3xl text-[#0F2851]">
                  {contact.name}
                </p>
                <a
                  href={`tel:${contact.number.replace(/\s/g, "")}`}
                  className="mt-3 block font-['Nexa_Text'] text-base font-medium sm:text-lg md:text-xl text-[#111111] hover:text-[#0F2851] transition-colors"
                >
                  {contact.number}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
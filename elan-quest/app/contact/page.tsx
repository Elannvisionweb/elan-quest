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
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#F0ECCF] text-[#0F2851]">

      {/* =========================
          PATTERN BACKGROUND
          ========================= */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/pics/patternfinal.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y",
        }}
      />

      {/* =========================
          PAGE CONTENT
          ========================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 md:px-[6.5%] md:py-16">

        {/* Heading */}
        <h1
          className="
            mb-12
            text-4xl
            font-black
            uppercase
            tracking-wide
            text-[#0F2851]
            sm:text-5xl
            md:mb-16
            md:text-[52px]
          "
        >
          CONTACT US
        </h1>

        {/* =========================
            CONTACTS GRID
            ========================= */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-2 md:gap-x-24 md:gap-y-20 lg:gap-x-32">
          {CONTACTS.map((contact) => (
            <div
              key={contact.name}
              className="border-b border-[#0F2851]/15 pb-6"
            >
              <p className="text-xl font-bold sm:text-2xl md:text-3xl">
                {contact.name}
              </p>
              <a
                href={`tel:${contact.number.replace(/\s/g, "")}`}
                className="mt-3 block text-base font-medium sm:text-lg md:text-xl hover:opacity-70 transition-opacity"
              >
                {contact.number}
              </a>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
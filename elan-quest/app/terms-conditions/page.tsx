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

export default function TermsPage() {
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
            alt="Terms & Conditions Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 mx-auto flex h-[130px] sm:h-[180px] md:h-[260px] lg:h-[280px] max-w-[1440px] items-center justify-between px-5 sm:px-8 md:px-16">
          <h1 className="shrink-0 font-['Nexa_Text'] text-[24px] sm:text-[34px] md:text-[50px] lg:text-[58px] font-black uppercase tracking-tight text-[#092B55] leading-none">
            TERMS &amp; CONDITIONS
          </h1>
        </div>
      </header>

      {/* ──────────────── 2. TERMS CONTENT (SCROLLABLE) ──────────────── */}
      <main className="relative z-10 w-full flex-1 md:overflow-y-auto">
        <div className="mx-auto w-full max-w-[1000px] px-6 py-10 pb-24 md:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
          className="space-y-10"
        >
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-['Nexa_Text'] text-[24px] sm:text-[28px] md:text-[32px] font-black uppercase tracking-wide text-[#0F2851]">
              1. Acceptance of Terms
            </h2>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                By registering for, participating in, or accessing any part of Nexus
                QUEST organized by Elan &amp; nVision, you agree to be bound by
                these Terms and Conditions. If you do not agree to these Terms, you
                may not participate in the Olympiad.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-['Nexa_Text'] text-[24px] sm:text-[28px] md:text-[32px] font-black uppercase tracking-wide text-[#0F2851]">
              2. Participant Conduct
            </h2>
            
            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851]">
              2.1 Academic Integrity
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                All work must be original and completed independently during the
                online examination.
              </p>
              <p>
                Any form of cheating, plagiarism, or academic dishonesty will
                result in immediate disqualification.
              </p>
              <p>
                Use of unauthorized materials, assistance, or communication during
                the online exam is strictly prohibited.
              </p>
              <p>
                Participants must comply with all online proctoring requirements
                and examination protocols.
              </p>
            </div>

            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851] pt-2">
              2.2 Behavioral Standards
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                Participants must maintain respectful and professional conduct
                throughout all interactions.
              </p>
              <p>
                Disruptive, inappropriate, or disrespectful behavior may result in
                disqualification.
              </p>
              <p>
                Participants represent their schools and communities and are
                expected to uphold these standards.
              </p>
              <p>
                Any form of harassment, discrimination, or misconduct will not be
                tolerated.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-['Nexa_Text'] text-[24px] sm:text-[28px] md:text-[32px] font-black uppercase tracking-wide text-[#0F2851]">
              3. Participant Responsibilities
            </h2>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                Provide accurate and truthful information during registration.
              </p>
              <p>
                Comply with all online examination rules and procedures.
              </p>
              <p>
                Maintain confidentiality of examination content.
              </p>
              <p>
                Ensure technical preparedness for online participation with stable
                internet connection and compatible devices.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-['Nexa_Text'] text-[24px] sm:text-[28px] md:text-[32px] font-black uppercase tracking-wide text-[#0F2851]">
              4. Intellectual Property
            </h2>
            
            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851]">
              4.1 Examination Content
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                All examination questions, materials, and content are proprietary
                to Elan &amp; nVision.
              </p>
              <p>
                Participants may not reproduce, share, or distribute examination
                content in any form.
              </p>
              <p>
                Violation of intellectual property rights may result in legal
                action and disqualification.
              </p>
            </div>

            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851] pt-2">
              4.2 Participant Information
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                Participants retain rights to their personal achievements and
                academic records.
              </p>
              <p>
                By participating, participants grant limited rights to use their
                names and achievements for promotional purposes related to Nexus
                QUEST and Elan &amp; nVision.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-['Nexa_Text'] text-[24px] sm:text-[28px] md:text-[32px] font-black uppercase tracking-wide text-[#0F2851]">
              5. Privacy and Data Protection
            </h2>
            
            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851]">
              5.1 Information Collection
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                Personal information is collected only for examination
                administration and communication.
              </p>
              <p>
                Data is protected in accordance with applicable privacy laws and
                institutional policies.
              </p>
              <p>
                Information may be shared with schools for coordination purposes
                where applicable.
              </p>
            </div>

            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851] pt-2">
              5.2 Data Usage
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                Personal information will not be used for commercial purposes
                without explicit consent.
              </p>
              <p>
                Participants may request access to or correction of their personal
                information.
              </p>
              <p>
                Marketing communications require separate opt-in consent.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-['Nexa_Text'] text-[24px] sm:text-[28px] md:text-[32px] font-black uppercase tracking-wide text-[#0F2851]">
              6. Liability and Disclaimers
            </h2>
            
            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851]">
              6.1 Technical Issues
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                Participants are responsible for ensuring stable internet
                connection and compatible devices for the online examination.
              </p>
              <p>
                Elan &amp; nVision is not liable for technical failures on the
                participant&apos;s end.
              </p>
              <p>
                System-wide technical issues will be addressed fairly with
                appropriate remedial measures.
              </p>
            </div>

            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851] pt-2">
              6.2 Limitation of Liability
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                Participation is voluntary and at the participant&apos;s own risk.
              </p>
              <p>
                Elan &amp; nVision&apos;s liability is limited to the extent
                permitted by applicable law.
              </p>
              <p>
                Prize distribution will be conducted during Elan &amp; nVision at
                IIT Hyderabad.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="font-['Nexa_Text'] text-[24px] sm:text-[28px] md:text-[32px] font-black uppercase tracking-wide text-[#0F2851]">
              7. Modifications and Termination
            </h2>
            
            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851]">
              7.1 Changes to Terms
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                Elan &amp; nVision reserves the right to modify these Terms with
                reasonable notice.
              </p>
              <p>
                Continued participation after notification constitutes acceptance
                of changes.
              </p>
              <p>
                Significant changes will be communicated through official
                channels.
              </p>
            </div>

            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851] pt-2">
              7.2 Payment and Registration
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                All payments and registration fees, once made, are non-refundable.
              </p>
              <p>
                Registration confirmations are final and cannot be cancelled for
                refunds.
              </p>
            </div>

            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851] pt-2">
              7.3 Disqualification
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                Elan &amp; nVision reserves the right to disqualify participants
                for violation of these Terms.
              </p>
              <p>
                Disqualification decisions are final and not subject to appeal.
              </p>
              <p>
                Disqualified participants forfeit all rights to awards and
                recognition.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="font-['Nexa_Text'] text-[24px] sm:text-[28px] md:text-[32px] font-black uppercase tracking-wide text-[#0F2851]">
              8. Communication
            </h2>
            
            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851]">
              8.1 Official Channels
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                All official communications will be made through registered email
                addresses and the official website.
              </p>
              <p>
                Participants are responsible for monitoring these channels and
                keeping contact information updated.
              </p>
              <p>
                Social media channels are supplementary and not primary means of
                official communication.
              </p>
            </div>

            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851] pt-2">
              8.2 Contact Information
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                General inquiries:{" "}
                <a
                  href="mailto:elan.nvision@sa.iith.ac.in"
                  className="font-bold text-[#0F2851] underline"
                >
                  elan.nvision@sa.iith.ac.in
                </a>
              </p>
              <p>
                Outreach:{" "}
                <a
                  href="mailto:elan.nvision.outreach@sa.iith.ac.in"
                  className="font-bold text-[#0F2851] underline"
                >
                  elan.nvision.outreach@sa.iith.ac.in
                </a>
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="font-['Nexa_Text'] text-[24px] sm:text-[28px] md:text-[32px] font-black uppercase tracking-wide text-[#0F2851]">
              9. Miscellaneous
            </h2>
            
            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851]">
              9.1 Severability
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                If any provision of these Terms is deemed invalid, the remainder
                shall continue in full force.
              </p>
              <p>
                Invalid provisions will be replaced with the closest valid
                alternative.
              </p>
            </div>

            <h3 className="font-['Nexa_Text'] text-lg sm:text-xl font-bold text-[#0F2851] pt-2">
              9.2 Entire Agreement
            </h3>
            <div className="space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
              <p>
                These Terms constitute the complete agreement between participants
                and Elan &amp; nVision regarding Nexus QUEST.
              </p>
              <p>
                No verbal agreements or representations outside these Terms are
                binding.
              </p>
            </div>
          </section>

          {/* Concluding Note */}
          <div className="pt-6 border-t border-[#0F2851]/15 space-y-3 font-['Nexa_Text'] text-sm sm:text-base md:text-[17px] leading-relaxed text-[#111111]">
            <p>
              By participating in Nexus QUEST, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
            </p>
            <p>
              Nexus QUEST is organized by Elan &amp; nVision, the annual
              techno-cultural fest of IIT Hyderabad.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  </div>
  );
}
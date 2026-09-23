"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";

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

const CONTACTS = [
  { name: "Ansika", number: "+91 97010 38745" },
  { name: "Manogna", number: "+91 91544 20779" },
  { name: "Aasritha", number: "+91 93924 67033" },
  { name: "Himanshu", number: "+91 85450 60014" },
  { name: "Shresta", number: "+91 70326 66150" },
  { name: "Snehita", number: "+91 83097 46984" },
];

export default function ContactUsPage() {
  return (
    <div className="body-font bg-[var(--background)] text-[var(--foreground)] pt-16 w-full overflow-x-hidden">
      <div className="space-y-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="px-6 md:px-20"
        >
          <motion.div variants={fadeInUp} custom={1}>
            <SectionHeading title="Contact Us" />
          </motion.div>
        </motion.div>

        {/* Contacts List */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={2}
          className="px-6 md:px-20 max-w-[700px] mx-auto pb-20"
        >
          <ul className="divide-y divide-[var(--foreground)]/10">
            {CONTACTS.map((contact) => (
              <li
                key={contact.name}
                className="flex items-center justify-between py-5 text-lg"
              >
                <span className="font-semibold">{contact.name}</span>
                <a
                  href={`tel:${contact.number.replace(/\s/g, "")}`}
                  className="hover:opacity-70 transition-opacity"
                >
                  {contact.number}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
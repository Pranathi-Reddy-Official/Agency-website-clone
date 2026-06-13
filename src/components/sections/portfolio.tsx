"use client";

import { m } from "framer-motion";
import { Container } from "@/components/ui/container";
import { staggerContainer, staggerItem } from "@/lib/motion/variants";

const stats = [
  { value: "1782+", label: "Videos Created" },
  { value: "2.0B+", label: "Views Generated" },
  { value: "826729", label: "Total Count Hours" },
];

export function Portfolio() {
  return (
    <section id="results" className="px-5 py-12 md:py-16">
      <Container>
        <m.div
          className="relative flex flex-col items-center border border-white/10 rounded-[24px] bg-[#07070a]/90 px-6 py-12 md:py-16 md:px-12 shadow-[0_0_40px_rgba(82,41,205,0.08)]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Glow Pill Badge */}
          <div className="relative px-5 py-1.5 rounded-full border border-[#5229CD]/85 bg-black/40 shadow-[0_0_20px_rgba(82,41,205,0.35)] text-sm font-semibold tracking-wide text-white font-ui">
            Results
          </div>

          {/* Section Title */}
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight mt-5 mb-12 text-center">
            The proof is in the numbers
          </h2>

          {/* Stats Grid */}
          <div className="grid w-full max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            {stats.map((stat) => (
              <m.div
                key={stat.label}
                variants={staggerItem}
                className="flex flex-col items-center gap-1.5 text-center"
              >
                <span className="font-display text-[2.75rem] font-bold leading-none tracking-tight text-white sm:text-[3.5rem] lg:text-[4rem]">
                  {stat.value}
                </span>
                <span className="text-sm sm:text-base font-semibold text-white/90 tracking-wide font-ui">
                  {stat.label}
                </span>
              </m.div>
            ))}
          </div>
        </m.div>
      </Container>
    </section>
  );
}

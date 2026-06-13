"use client";

import { m } from "framer-motion";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { staggerContainer, staggerItem } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

const positives = [
  "Constant, proactive communication",
  "Omni-channel approach",
  "Tailored best-fit solutions",
  "Provides industry specific expertise",
  "Experts with 4+ years of experience",
  "Extreme Quality & Consistency",
];

const negatives = [
  "Slow communication",
  "Single channel approach",
  "Outdated growth strategies",
  "Lack of industry research",
  "Outsourced to mediocre talent",
  "Lower unmatched Quality",
];

export function Process() {
  return (
    <section id="process" className="section-padding relative">
      <Container>
        <SectionShell className="flex flex-col items-center gap-12 border-none bg-transparent px-4 py-10 md:px-8 md:py-[60px]">
          {/* Custom Pill Badge & Centered Title */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="relative px-6 py-2 rounded-full border border-[#5229CD]/80 bg-black/40 shadow-[0_0_20px_rgba(82,41,205,0.3)] text-base font-semibold tracking-wide text-white font-ui">
              Comparison
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[45px] font-semibold text-white tracking-tight leading-tight">
              ECM Studios vs everyone else
            </h2>
          </div>

          <m.div
            className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 md:p-[20px] items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Left Column - Negatives (No Card Container) */}
            <m.div variants={staggerItem} className="flex flex-col gap-6 pl-4 md:pl-10">
              <ul className="flex flex-col gap-6">
                {negatives.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 font-ui text-base md:text-[17px] font-medium text-white/60"
                  >
                    {/* Red Rosette X Icon */}
                    <svg className="size-[22px] shrink-0 text-[#FF1E1E] fill-current" viewBox="0 0 24 24">
                      <path d="M12 1l3.086 2.181 3.733-.502.81 3.682 3.251 1.884-1.543 3.42 1.543 3.42-3.251 1.884-.81 3.682-3.733-.502L12 23l-3.086-2.181-3.733.502-.81-3.682-3.251-1.884 1.543-3.42-1.543-3.42 3.251-1.884.81-3.682 3.733.502L12 1z" />
                      <path fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.5l7 7M15.5 8.5l-7 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </m.div>

            {/* Right Column - Positives (Highlighted Card Container) */}
            <m.div
              variants={staggerItem}
              className="flex flex-col gap-6 border border-white/10 bg-[#050505]/80 backdrop-blur-sm rounded-[25px] p-8 md:p-10 shadow-xl"
            >
              <ul className="flex flex-col gap-6">
                {positives.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 font-ui text-base md:text-[17px] font-medium text-white"
                  >
                    {/* Blue Rosette Check Icon */}
                    <svg className="size-[22px] shrink-0 text-[#0066FF] fill-current" viewBox="0 0 24 24">
                      <path d="M12 1l3.086 2.181 3.733-.502.81 3.682 3.251 1.884-1.543 3.42 1.543 3.42-3.251 1.884-.81 3.682-3.733-.502L12 23l-3.086-2.181-3.733.502-.81-3.682-3.251-1.884 1.543-3.42-1.543-3.42 3.251-1.884.81-3.682 3.733.502L12 1z" />
                      <path fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.5l3 3 6-6" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </m.div>
          </m.div>
        </SectionShell>
      </Container>
    </section>
  );
}

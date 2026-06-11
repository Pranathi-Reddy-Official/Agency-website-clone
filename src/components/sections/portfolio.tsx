"use client";

import { m } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { staggerContainer, staggerItem } from "@/lib/motion/variants";

const stats = [
  { value: "1782+", label: "Videos Created" },
  { value: "2.0B+", label: "Views Generated" },
  { value: "800K+", label: "Total count Hours" },
];

export function Portfolio() {
  return (
    <section id="results" className="section-padding">
      <Container>
        <SectionShell variant="filled" className="flex flex-col items-center gap-11 px-4 py-8 md:py-[31px] md:pb-[62px]">
          <SectionHeading
            label="Results"
            title="The proof is in the numbers"
          />

          <m.div
            className="grid w-full max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {stats.map((stat) => (
              <m.div
                key={stat.label}
                variants={staggerItem}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="font-display text-[2rem] font-semibold leading-none tracking-tight text-white sm:text-[3rem] lg:text-[3.5rem]">
                  {stat.value}
                </span>
                <span className="text-base text-muted-foreground">{stat.label}</span>
              </m.div>
            ))}
          </m.div>
        </SectionShell>
      </Container>
    </section>
  );
}

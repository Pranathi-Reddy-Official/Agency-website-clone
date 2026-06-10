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
  "Industry-specific expertise",
  "Experts with 4+ years of experience",
  "Extreme quality & consistency",
];

const negatives = [
  "Slow communication",
  "Single channel approach",
  "Outdated growth strategies",
  "Lack of industry research",
  "Outsourced to mediocre talent",
  "Lower unmatched quality",
];

function ComparisonColumn({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "positive" | "negative";
}) {
  const Icon = variant === "positive" ? Check : X;

  return (
    <m.div
      variants={staggerItem}
      className="flex w-full max-w-[450px] flex-col gap-5"
    >
      <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 font-ui text-base font-medium text-white/90"
          >
            <Icon
              className={cn(
                "mt-0.5 size-[23px] shrink-0",
                variant === "positive" ? "text-white" : "text-white/40",
              )}
              strokeWidth={2}
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </m.div>
  );
}

export function Process() {
  return (
    <section id="process" className="section-padding">
      <Container>
        <SectionShell className="flex flex-col items-center gap-11 rounded-[30px] px-4 py-10 md:px-8 md:py-[100px]">
          <SectionHeading
            label="Comparison"
            title="Studio vs everyone else"
          />

          <div
            className="h-px w-[170px] bg-[linear-gradient(90deg,transparent_0%,#5229CD_50%,transparent_100%)]"
            aria-hidden
          />

          <m.div
            className="grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 md:p-[30px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <ComparisonColumn
              title="Everyone else"
              items={negatives}
              variant="negative"
            />
            <ComparisonColumn
              title="Studio"
              items={positives}
              variant="positive"
            />
          </m.div>
        </SectionShell>
      </Container>
    </section>
  );
}

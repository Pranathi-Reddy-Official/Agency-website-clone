"use client";

import { AnimatePresence, m } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
const faqs = [
  {
    question: "Why work with us?",
    answer:
      "We combine senior editors, proactive communication, and a channel-aware workflow so you get publish-ready content without the back-and-forth tax.",
  },
  {
    question: "When will I get results?",
    answer:
      "Most clients see stronger retention and clearer positioning within the first month. Growth compounds as your publishing cadence stabilizes.",
  },
  {
    question: "How do we communicate and manage projects?",
    answer:
      "You'll get a dedicated channel, milestone updates, and a simple review flow. We keep revisions tight and timelines predictable.",
  },
  {
    question: "Why wouldn't I just hire an in-house editing team?",
    answer:
      "In-house teams are expensive and hard to scale. We give you senior talent, faster turnaround, and flexible capacity without hiring overhead.",
  },
  {
    question: "How do your long-form videos and podcast edits work?",
    answer:
      "Send raw files or remote recordings. We handle structure, pacing, graphics, and polish — then deliver platform-ready masters and cutdowns.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full max-w-3xl rounded-[20px] border border-[var(--color-border)] bg-surface-card">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-ui text-base font-medium text-white md:text-lg">
          {question}
        </span>
        <m.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="size-6 shrink-0 text-white/60" aria-hidden />
        </m.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:px-6 md:pb-6 md:text-base">
              {answer}
            </p>
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding">
      <Container>
        <SectionShell className="flex flex-col items-center gap-11 px-4 py-10 md:px-8 md:py-[100px]">
          <SectionHeading label="FAQs" title="Questions? We got answers." />

          <div className="flex w-full flex-col items-center gap-3">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                {...faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
              />
            ))}
          </div>
        </SectionShell>
      </Container>
    </section>
  );
}

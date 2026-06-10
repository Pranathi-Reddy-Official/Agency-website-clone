"use client";

import { m } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const testimonials = [
  {
    name: "Jordan Lee",
    role: "Founder @ Northline Labs",
    quote:
      "I'm genuinely impressed. I never have to worry about quality. Their consistency is unmatched, and the team treats my content like it's their own.",
  },
  {
    name: "Sam Chen",
    role: "Founder @ Meridian Growth",
    quote:
      "The editing quality is top notch. They don't need heavy direction — the work looks great on the first pass and saves me hours every week.",
  },
  {
    name: "Alex Rivera",
    role: "Founder @ Signal Theory",
    quote:
      "By far the best team I've worked with on communication and quality. Every deliverable feels professional-grade and on brand.",
  },
  {
    name: "Morgan Blake",
    role: "Head of Content @ Atlas Media",
    quote:
      "They set a new standard for video editing with exceptional quality and efficiency. The turnaround time alone is worth it.",
  },
  {
    name: "Taylor Brooks",
    role: "Creator @ Brooks Finance",
    quote:
      "After reviewing tons of demos, their quality stood out the most. Super professional and we'll be working together for years.",
  },
];

function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <article className="flex w-[min(100vw-3rem,450px)] shrink-0 flex-col gap-5 rounded-[25px] border border-[var(--color-border)] bg-surface-card p-[30px]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="size-9 shrink-0 rounded-full bg-gradient-to-br from-brand/50 to-brand"
            aria-hidden
          />
          <div>
            <p className="font-medium text-white">{name}</p>
            <p className="text-sm text-white/50">{role}</p>
          </div>
        </div>
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-white text-white" aria-hidden />
          ))}
        </div>
      </div>
      <p className="text-base leading-relaxed text-muted-foreground">{quote}</p>
    </article>
  );
}

export function Testimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section-padding">
      <Container>
        <SectionShell className="flex flex-col items-center gap-11 overflow-hidden px-4 py-10 md:px-8 md:py-[100px]">
          <SectionHeading
            label="Testimonials"
            title="What founders are saying"
          />

          <div className="relative w-full">
            <div
              className="hide-scrollbar flex gap-4 overflow-x-auto pb-2 md:gap-6"
              role="region"
              aria-label="Testimonials carousel"
              tabIndex={0}
            >
              {testimonials.map((item) => (
                <TestimonialCard key={item.name} {...item} />
              ))}
            </div>

            {/* Auto-scroll track for larger screens */}
            <div className="fade-edge-x mt-4 hidden overflow-hidden md:block">
              <m.div
                className="flex w-max gap-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 45, ease: "linear", repeat: Infinity }}
              >
                {track.map((item, i) => (
                  <TestimonialCard key={`${item.name}-${i}`} {...item} />
                ))}
              </m.div>
            </div>
          </div>
        </SectionShell>
      </Container>
    </section>
  );
}

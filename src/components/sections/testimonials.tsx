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
    image: "https://framerusercontent.com/images/3rn7OKgAFLkjaDOcqYFrzMte6Q.jpg",
    quote:
      "I'm genuinely impressed. I never have to worry about quality. Their consistency is unmatched, and the team treats my content like it's their own.",
  },
  {
    name: "Sam Chen",
    role: "Founder @ Meridian Growth",
    image: "https://framerusercontent.com/images/per39FTuDY4GfomZFRtcphLOeqI.jpg",
    quote:
      "The editing quality is top notch. They don't need heavy direction — the work looks great on the first pass and saves me hours every week.",
  },
  {
    name: "Alex Rivera",
    role: "Founder @ Signal Theory",
    image: "https://framerusercontent.com/images/NeudS8SAxw7QroxRFOMjPB1Cqs.jpg",
    quote:
      "By far the best team I've worked with on communication and quality. Every deliverable feels professional-grade and on brand.",
  },
  {
    name: "Morgan Blake",
    role: "Head of Content @ Atlas Media",
    image: "https://framerusercontent.com/images/b8A9fPP4ugXTjrchVTDGbD2ps.jpg",
    quote:
      "They set a new standard for video editing with exceptional quality and efficiency. The turnaround time alone is worth it.",
  },
  {
    name: "Taylor Brooks",
    role: "Creator @ Brooks Finance",
    image: "https://framerusercontent.com/images/fzoxWfcNSZO2G1Pyz5mIpxR7E.jpeg",
    quote:
      "After reviewing tons of demos, their quality stood out the most. Super professional and we'll be working together for years.",
  },
];

function TestimonialCard({
  name,
  role,
  image,
  quote,
}: {
  name: string;
  role: string;
  image: string;
  quote: string;
}) {
  return (
    <article className="flex w-[min(100vw-3rem,450px)] shrink-0 flex-col gap-5 rounded-[25px] border border-[var(--color-border)] bg-surface-card p-[30px]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt={name}
            className="size-9 shrink-0 rounded-full object-cover"
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
  const track1 = [...testimonials, ...testimonials];
  const track2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section id="testimonials" className="section-padding">
      <Container>
        <SectionShell className="flex flex-col items-center gap-11 overflow-hidden px-4 py-8 md:px-8 md:py-16">
          <SectionHeading
            label="Testimonials"
            title="What founders are saying"
          />

          <div className="relative w-full flex flex-col gap-6">
            {/* Mobile view (single overflow scroll) */}
            <div
              className="hide-scrollbar flex gap-4 overflow-x-auto pb-2 md:hidden"
              role="region"
              aria-label="Testimonials carousel"
              tabIndex={0}
            >
              {testimonials.map((item) => (
                <TestimonialCard key={item.name} {...item} />
              ))}
            </div>

            {/* Desktop/Tablet view (Two-row marquee, moving in opposite directions) */}
            <div className="fade-edge-x hidden flex-col gap-6 overflow-hidden md:flex">
              {/* Row 1: Left scrolling */}
              <m.div
                className="flex w-max gap-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 45, ease: "linear", repeat: Infinity }}
              >
                {track1.map((item, i) => (
                  <TestimonialCard key={`row1-${item.name}-${i}`} {...item} />
                ))}
              </m.div>

              {/* Row 2: Right scrolling */}
              <m.div
                className="flex w-max gap-6"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 45, ease: "linear", repeat: Infinity }}
              >
                {track2.map((item, i) => (
                  <TestimonialCard key={`row2-${item.name}-${i}`} {...item} />
                ))}
              </m.div>
            </div>
          </div>
        </SectionShell>
      </Container>
    </section>
  );
}

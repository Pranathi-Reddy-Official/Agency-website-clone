"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { staggerContainer, staggerItem } from "@/lib/motion/variants";
import { Play } from "lucide-react";

const services = [
  {
    title: "Long Form Content",
    description:
      "Turn your long-form videos into binge-worthy experiences that boost watch time, build authority, and grow subscribers fast.",
  },
  {
    title: "Shortform Content",
    description:
      "Grab attention in seconds with scroll-stopping shorts built to convert viewers into followers and buyers.",
  },
  {
    title: "Podcast Edits",
    description:
      "Transform your recordings into engaging, polished episodes that keep listeners hooked from start to finish.",
  },
  {
    title: "Ad Creatives & VSLs",
    description:
      "High-performing ad creatives and VSLs designed to hook attention, spark action, and maximize conversions.",
  },
  {
    title: "LinkedIn Videos",
    description:
      "Shortform and longform LinkedIn videos that build authority, earn trust, and attract inbound clients effortlessly.",
  },
  {
    title: "Explainers",
    description:
      "Story-driven explainer videos for SaaS, transforming complex products into clear, persuasive narratives that sell.",
  },
];

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <m.article
      variants={staggerItem}
      className="group flex h-full min-h-[200px] flex-col overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-surface-card sm:min-h-[300px] lg:min-h-[300px]"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div className="relative flex h-[140px] items-center justify-center bg-gradient-to-br from-brand/20 via-black to-black sm:h-[180px] lg:h-[200px]">
        <div className="flex size-14 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-sm transition-transform group-hover:scale-105">
          <Play className="size-5 fill-white text-white" aria-hidden />
        </div>
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(82,41,205,0.15)_0%,transparent_50%)]"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
        <Button href="#contact" variant="ghost" className="w-fit">
          Explore Pricing
        </Button>
      </div>
    </m.article>
  );
}

export function Services() {
  return (
    <section id="services" className="section-padding">
      <Container>
        <SectionShell className="flex flex-col items-center gap-11 px-4 pb-8 pt-16 md:px-8 md:pt-[100px]">
          <SectionHeading
            label="Services"
            title="Everything you need to dominate every platform"
          />

          <m.div
            className="grid w-full grid-cols-1 gap-2.5 p-0 sm:gap-4 md:grid-cols-2 md:gap-2.5 md:p-[30px] lg:gap-2.5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </m.div>
        </SectionShell>
      </Container>
    </section>
  );
}

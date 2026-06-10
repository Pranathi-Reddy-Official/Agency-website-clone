"use client";

import { m } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { fadeIn, fadeUp, staggerContainer, staggerItem } from "@/lib/motion/variants";

const clients = [
  { name: "Alex Rivera", metric: "92K+ Subscribers" },
  { name: "Jordan Lee", metric: "118K+ Subscribers" },
  { name: "Sam Chen", metric: "245K+ Subscribers" },
  { name: "Morgan Blake", metric: "67K+ Subscribers" },
  { name: "Taylor Brooks", metric: "410K+ Subscribers" },
  { name: "Casey Wells", metric: "156K+ Subscribers" },
];

function SocialProofBadge() {
  return (
    <m.div
      className="flex flex-wrap items-center justify-center gap-2 text-sm text-white/80"
      variants={fadeUp}
    >
      <span className="text-white/60">Trusted by</span>
      <span className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
        100
      </span>
      <span className="font-display text-2xl font-semibold text-white">+</span>
      <span className="text-white/60">creators who care about quality</span>
      <Star className="size-4 fill-white text-white" aria-hidden />
    </m.div>
  );
}

function LogoTicker() {
  const track = [...clients, ...clients];

  return (
    <m.div className="w-full max-w-[1000px]" variants={fadeIn}>
      <p className="mb-6 text-center text-sm text-white/60">
        Creators who trust us to grow their channels
      </p>
      <div className="fade-edge-x relative overflow-hidden">
        <m.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-full border border-[var(--color-border)] bg-surface-card/50 px-4 py-2"
            >
              <div
                className="size-7 shrink-0 rounded-full bg-gradient-to-br from-brand/60 to-brand"
                aria-hidden
              />
              <div className="whitespace-nowrap">
                <p className="text-sm font-medium text-white">{client.name}</p>
                <p className="text-xs text-white/50">{client.metric}</p>
              </div>
            </div>
          ))}
        </m.div>
      </div>
    </m.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden pt-24 pb-16 md:pt-28 lg:min-h-screen lg:py-[100px]"
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-[312px] z-0 h-[min(1112px,120vh)] overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(82,41,205,0.18),transparent_70%)]" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[min(100%,900px)] -translate-x-1/2 rounded-[40px] border border-brand/20 bg-gradient-to-b from-white/[0.04] to-transparent opacity-60" />
      </div>

      <Container className="relative z-10 flex flex-col items-center gap-6 text-center md:gap-6 lg:max-w-[80%]">
        <m.div
          className="flex w-full max-w-4xl flex-col items-center gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <m.div variants={staggerItem}>
            <SocialProofBadge />
          </m.div>

          <m.h1
            variants={staggerItem}
            className="font-display text-[24px] font-medium leading-[28px] tracking-[-0.02em] text-white sm:text-[36px] sm:leading-[1.2] sm:tracking-[-0.02em] lg:text-[51px] lg:font-semibold lg:tracking-[-0.04em] xl:text-[64px] xl:leading-[1.2]"
          >
            Build authority with content that actually converts.
          </m.h1>

          <m.p
            variants={staggerItem}
            className="max-w-[85%] text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            We transform your raw footage into polished videos that build authority,
            grow your audience, and drive real results. No fluff. No delays. Just
            outcomes.
          </m.p>

          <m.div variants={staggerItem} className="pt-2">
            <Button href={siteConfig.cta.href}>
              Book Your Free Strategy Call
            </Button>
          </m.div>

          <m.div variants={staggerItem} className="w-full pt-6">
            <LogoTicker />
          </m.div>
        </m.div>
      </Container>
    </section>
  );
}

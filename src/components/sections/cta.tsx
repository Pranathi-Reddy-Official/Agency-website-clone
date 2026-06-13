"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { fadeUp } from "@/lib/motion/variants";

export function CTA() {
  return (
    <section id="contact" className="px-5 py-12 md:py-16 bg-black">
      <Container>
        <m.div
          className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#090222] bg-[url('/below-faq-bg.png')] bg-cover bg-top bg-no-repeat p-8 md:p-[60px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            aria-hidden
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(82,41,205,0.2),transparent_60%)]" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-[680px] flex-col items-center gap-4 text-center md:gap-6">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[44px] lg:leading-[1.3]">
              Ready to turn your content into a revenue engine?
            </h2>
            <p className="max-w-[520px] text-base leading-relaxed text-white/85">
              Stop losing viewers. Stop wasting money on content that doesn&apos;t
              convert. Let&apos;s build videos that actually grow your business.
            </p>
            <div className="pt-2">
              <Button href={siteConfig.cta.href}>
                Book Your Free Strategy Call
              </Button>
            </div>
          </div>
        </m.div>
      </Container>
    </section>
  );
}

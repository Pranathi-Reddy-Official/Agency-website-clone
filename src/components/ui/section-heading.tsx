"use client";

import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <m.div
      className={cn("relative flex flex-col gap-6", alignClass, className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="relative">
        <p className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl xl:text-[42px] xl:leading-[0.95]">
          {label}
        </p>
        <div
          className="purple-glow-line absolute -bottom-1.5 left-1/2 w-[min(100%,280px)] -translate-x-1/2 md:w-[min(100%,400px)]"
          aria-hidden
        />
      </div>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[32px] xl:text-[44px] xl:leading-[1.3]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[520px] text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </m.div>
  );
}

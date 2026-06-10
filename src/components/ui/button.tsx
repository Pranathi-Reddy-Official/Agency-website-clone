"use client";

import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { transition } from "@/lib/tokens/animations";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends ComponentPropsWithoutRef<typeof m.button> {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "relative h-11 overflow-hidden rounded-[100px] bg-brand pl-6 pr-[58px] font-ui text-[15px] font-medium text-white",
  ghost:
    "h-11 rounded-[20px] border border-[var(--color-border)] bg-transparent px-5 font-ui text-[15px] font-medium text-white transition-colors hover:bg-white/5",
};

function ButtonInner({
  variant = "primary",
  children,
}: Pick<ButtonProps, "variant" | "children">) {
  if (variant === "ghost") {
    return <span>{children}</span>;
  }

  return (
    <>
      <span className="relative z-10 select-none">{children}</span>
      <m.span
        className="absolute right-0.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-capsule"
        initial={false}
        variants={{
          rest: { left: "auto", right: "2px", width: 40 },
          hover: { left: 2, right: 2, width: "calc(100% - 4px)" },
        }}
        transition={transition.button}
      >
        <m.span
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            rest: { x: 0, opacity: 1 },
            hover: { x: 16, opacity: 0 },
          }}
          transition={transition.button}
        >
          <ArrowRight className="size-4" aria-hidden />
        </m.span>
        <m.span
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            rest: { x: -16, opacity: 0 },
            hover: { x: 0, opacity: 1 },
          }}
          transition={transition.button}
        >
          <ArrowRight className="size-4" aria-hidden />
        </m.span>
      </m.span>
    </>
  );
}

export function Button({
  href,
  variant = "primary",
  children,
  className,
  external,
  ...props
}: ButtonProps) {
  const classes = cn(variantStyles[variant], className);

  if (href) {
    if (external) {
      return (
        <m.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(classes, "inline-flex items-center")}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <ButtonInner variant={variant}>{children}</ButtonInner>
        </m.a>
      );
    }

    return (
      <m.div
        className="inline-flex"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <Link href={href} className={cn(classes, "inline-flex items-center")}>
          <ButtonInner variant={variant}>{children}</ButtonInner>
        </Link>
      </m.div>
    );
  }

  return (
    <m.button
      type="button"
      className={cn(classes, "inline-flex items-center")}
      initial="rest"
      whileHover="hover"
      animate="rest"
      {...props}
    >
      <ButtonInner variant={variant}>{children}</ButtonInner>
    </m.button>
  );
}

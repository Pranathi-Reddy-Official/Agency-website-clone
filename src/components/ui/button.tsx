"use client";

import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { transition } from "@/lib/tokens/animations";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends Omit<ComponentPropsWithoutRef<typeof m.button>, "onClick"> {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  showArrow?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "relative h-11 overflow-hidden rounded-[100px] bg-brand font-ui text-[15px] font-medium text-white",
  ghost:
    "h-11 rounded-[20px] border border-[var(--color-border)] bg-transparent px-5 font-ui text-[15px] font-medium text-white transition-colors hover:bg-white/5",
};

function ButtonInner({
  variant = "primary",
  children,
  showArrow = true,
}: Pick<ButtonProps, "variant" | "children" | "showArrow">) {
  if (variant === "ghost") {
    return <span>{children}</span>;
  }

  return (
    <>
      <span className="relative z-10 select-none">{children}</span>
      <m.span
        className="absolute right-0.5 top-1/2 flex h-10 -translate-y-1/2 items-center justify-center rounded-full bg-capsule"
        initial={false}
        variants={{
          rest: showArrow
            ? { left: "auto", right: "2px", width: 40, opacity: 1 }
            : { left: "auto", right: "2px", width: 0, opacity: 0 },
          hover: { left: 2, right: 2, width: "calc(100% - 4px)", opacity: 1 },
        }}
        transition={transition.button}
      >
        {showArrow && (
          <span className="absolute right-[12px] top-1/2 -translate-y-1/2 flex size-4 items-center justify-center text-white">
            <ArrowRight className="size-4" aria-hidden />
          </span>
        )}
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
  showArrow = true,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    variantStyles[variant],
    variant === "primary" ? (showArrow ? "pl-6 pr-[58px]" : "px-6") : "",
    className
  );

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
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          <ButtonInner variant={variant} showArrow={showArrow}>{children}</ButtonInner>
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
        <Link href={href} className={cn(classes, "inline-flex items-center")} onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}>
          <ButtonInner variant={variant} showArrow={showArrow}>{children}</ButtonInner>
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
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...props}
    >
      <ButtonInner variant={variant} showArrow={showArrow}>{children}</ButtonInner>
    </m.button>
  );
}

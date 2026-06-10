import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "filled" | "bordered";
}

const variants = {
  default: "border-brand rounded-[25px]",
  filled: "border-brand rounded-[25px] bg-surface-card-alt",
  bordered: "border-brand rounded-[25px] bg-transparent",
};

export function SectionShell({
  children,
  className,
  id,
  variant = "bordered",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[150px] border",
        variants[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}

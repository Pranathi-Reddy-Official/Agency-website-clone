"use client";

import { useEffect, useState } from "react";
import { breakpoints } from "@/lib/tokens/spacing";

export type Breakpoint = keyof typeof breakpoints;

export function mediaQuery(bp: Breakpoint, direction: "min" | "max" = "min"): string {
  const value = breakpoints[bp];
  return direction === "min"
    ? `(min-width: ${value}px)`
    : `(max-width: ${value - 1}px)`;
}

export function useMediaQuery(bp: Breakpoint, direction: "min" | "max" = "min"): boolean {
  const query = mediaQuery(bp, direction);
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export function useBreakpoint(): Breakpoint {
  const isDesktop3xl = useMediaQuery("desktop3xl");
  const isDesktop2xl = useMediaQuery("desktop2xl");
  const isDesktop = useMediaQuery("desktop");
  const isLaptop = useMediaQuery("laptop");
  const isTablet = useMediaQuery("tablet");
  const isMobile = useMediaQuery("mobile");

  if (isDesktop3xl) return "desktop3xl";
  if (isDesktop2xl) return "desktop2xl";
  if (isDesktop) return "desktop";
  if (isLaptop) return "laptop";
  if (isTablet) return "tablet";
  if (isMobile) return "mobile";
  return "mobile";
}

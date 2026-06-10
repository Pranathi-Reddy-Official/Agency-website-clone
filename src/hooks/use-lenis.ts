"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export interface UseLenisOptions {
  enabled?: boolean;
  duration?: number;
  smoothWheel?: boolean;
}

export function useLenis(options: UseLenisOptions = {}): void {
  const { enabled = true, duration = 1.2, smoothWheel = true } = options;

  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      duration,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel,
      autoRaf: true,
    });

    document.documentElement.classList.add("lenis", "lenis-smooth");

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, [enabled, duration, smoothWheel]);
}

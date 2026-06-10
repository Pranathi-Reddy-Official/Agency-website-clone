"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { type ReactNode, useEffect } from "react";
import { useLenis } from "@/hooks/use-lenis";
import { registerGsap } from "@/lib/gsap";

interface ProvidersProps {
  children: ReactNode;
}

function MotionProvider({ children }: ProvidersProps) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

function ScrollProvider({ children }: ProvidersProps) {
  useLenis();
  return children;
}

function GsapProvider({ children }: ProvidersProps) {
  useEffect(() => {
    registerGsap();
  }, []);

  return children;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <GsapProvider>
      <ScrollProvider>
        <MotionProvider>{children}</MotionProvider>
      </ScrollProvider>
    </GsapProvider>
  );
}

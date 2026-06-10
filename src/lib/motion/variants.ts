import type { Variants } from "framer-motion";
import { delay, motionDistance, spring, tween } from "@/lib/tokens/animations";

export const headerDrop: Variants = {
  hidden: { opacity: 0.001, y: motionDistance.headerY },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...spring.appear, delay: delay.header },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0.001, y: motionDistance.riseY },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...spring.appear, delay: delay.hero },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0.001 },
  visible: {
    opacity: 1,
    transition: { ...tween.fade, delay: delay.ticker },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: delay.stagger, delayChildren: delay.section },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0.001, y: motionDistance.riseY },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring.appear,
  },
};

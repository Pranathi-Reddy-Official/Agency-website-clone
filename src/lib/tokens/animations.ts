export const spring = {
  appear: { type: "spring" as const, stiffness: 320, damping: 60, mass: 1 },
  appearSnappy: { type: "spring" as const, stiffness: 800, damping: 120, mass: 1 },
  appearSoft: { type: "spring" as const, stiffness: 496, damping: 32, mass: 1 },
};

export const tween = {
  fade: { type: "tween" as const, duration: 0.4, ease: [0.44, 0, 0.56, 1] as const },
};

export const delay = {
  header: 1,
  hero: 0.3,
  ticker: 1,
  section: 0.2,
  stagger: 0.08,
};

export const motionDistance = {
  headerY: -150,
  riseY: 40,
};

export const transition = {
  hover: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as const },
  button: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
};

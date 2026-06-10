export const fontFamily = {
  display: "var(--font-poppins), ui-sans-serif, system-ui, sans-serif",
  body: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
  ui: "var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif",
} as const;

/** Responsive type scale — matches reference breakpoint relationships */
export const typeScale = {
  h1: {
    "2xl": { size: "64px", lineHeight: "1.2", letterSpacing: "-0.04em", weight: 600 },
    xl: { size: "51px", lineHeight: "1.2", letterSpacing: "-0.04em", weight: 600 },
    lg: { size: "36px", lineHeight: "28px", letterSpacing: "-0.02em", weight: 600 },
    sm: { size: "24px", lineHeight: "28px", letterSpacing: "-0.02em", weight: 500 },
  },
  h2: {
    "2xl": { size: "44px", lineHeight: "1.3", letterSpacing: "-0.04em", weight: 600 },
    xl: { size: "34px", lineHeight: "1.2", letterSpacing: "-0.04em", weight: 600 },
    lg: { size: "32px", lineHeight: "1.2", letterSpacing: "-0.02em", weight: 600 },
    sm: { size: "24px", lineHeight: "28px", letterSpacing: "-0.02em", weight: 500 },
  },
  eyebrow: {
    "2xl": { size: "42px", lineHeight: "0.95", letterSpacing: "-0.02em", weight: 600 },
    xl: { size: "36px", lineHeight: "1", letterSpacing: "-0.02em", weight: 600 },
    lg: { size: "30px", lineHeight: "1.15", letterSpacing: "-0.02em", weight: 600 },
    sm: { size: "24px", lineHeight: "1.15", letterSpacing: "-0.02em", weight: 600 },
  },
  stat: {
    "2xl": { size: "3.5rem", lineHeight: "1" },
    xl: { size: "3.07rem", lineHeight: "1" },
    lg: { size: "3.7rem", lineHeight: "1" },
    sm: { size: "1.99rem", lineHeight: "1" },
  },
  body: { size: "16px", lineHeight: "1.6", weight: 400 },
  bodySm: { size: "14px", lineHeight: "1.5", weight: 400 },
  nav: { size: "15px", lineHeight: "25px", weight: 500 },
  button: { size: "15px", lineHeight: "1", weight: 500 },
} as const;

export const radius = {
  sm: "4px",
  md: "8px",
  lg: "14px",
  xl: "20px",
  "2xl": "25px",
  "3xl": "30px",
  pill: "100px",
  full: "9999px",
} as const;

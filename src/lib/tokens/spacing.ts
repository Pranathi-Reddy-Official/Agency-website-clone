/** 4px base spacing scale aligned to reference audit */
export const spacing = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  14: "56px",
  15: "60px",
  16: "64px",
  18: "72px",
  20: "80px",
  22: "88px",
  24: "96px",
  25: "100px",
  30: "120px",
  38: "150px",
} as const;

export const layout = {
  canvas: 1600,
  container: 1200,
  containerPadding: 15,
  sectionY: 100,
  ctaY: 120,
  scrollMargin: 150,
  headerHeight: 64,
  navPillPaddingX: 24,
  navPillPaddingY: 12,
} as const;

export const breakpoints = {
  mobile: 390,
  tablet: 810,
  laptop: 1024,
  desktop: 1200,
  desktopLg: 1366,
  desktopXl: 1440,
  desktop2xl: 1600,
  desktop3xl: 1920,
} as const;

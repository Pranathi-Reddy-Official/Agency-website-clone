import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4 uses CSS-first configuration via @theme in src/styles/tokens.css.
 * This file remains for tooling compatibility, content paths, and IDE IntelliSense.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/**/*.{js,ts}",
  ],
};

export default config;

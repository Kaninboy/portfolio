import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Theme tokens defined in src/app/globals.css (switch with html[data-theme])
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        fgx: "var(--fgx)",
        muted: "var(--muted)",
        dim: "var(--dim)",
        soft: "var(--soft)",
        soft2: "var(--soft2)",
        line: {
          faint: "var(--ln-008)",
          DEFAULT: "var(--ln-01)",
          mid: "var(--ln-012)",
          strong: "var(--ln-016)",
          hover: "var(--ln-02)",
        },
        glass: {
          chip: "var(--gl-004)",
          btn: "var(--gl-005)",
          hover: "var(--gl-01)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

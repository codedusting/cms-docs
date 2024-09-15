/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["SUSE Variable", "system-ui", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

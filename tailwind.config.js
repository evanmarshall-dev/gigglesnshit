/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wild_sand: "#F5F5F5",
        ebony: "#0f1626",
        sunset_orange: "#ff533d",
        sandrift: "#ab987a",
      },
      fontFamily: {
        mono: ["var(--font-roboto_mono)"],
        // sans: [""],
        // serif: [""],
      },
    },
  },
  plugins: [],
};

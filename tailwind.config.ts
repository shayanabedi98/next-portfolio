import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        "primary-color": "#0e0e0e",
        "secondary-color": "#f91e5a",
        "accent-color": "#be0436",
        "primary-text-color": "var(--primary-text-color)",
        "secondary-text-color": "var(--secondary-text-color)",
        // "": "var()",
      },
      margin: {
        content: "var(--m-content)",
        content2: "var(--m-content2)",
        div: "var(--m-div)",
        div2: "var(--m-div2)",
      },
    },
  },
  plugins: [],
};
export default config;

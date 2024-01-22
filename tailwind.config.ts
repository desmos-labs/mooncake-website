import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1280px",
        xl: "1920px",
      },
      width: {
        "logo-mobile": "122px",
        "logo-desktop": "175px",
      },
      height: {
        "logo-mobile": "28px",
        "logo-desktop": "40px",
      },
    },
  },
  plugins: [],
};
export default config;

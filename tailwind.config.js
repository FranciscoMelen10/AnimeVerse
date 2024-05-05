/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'color_50': '#f6f6f6',
        'color_100': '#e7e7e7',
        'color_200': '#d1d1d1',
        'color_300': '#b0b0b0',
        'color_400': '#888888',
        'color_500': '#6d6d6d',
        'color_600': '#5d5d5d',
        'color_700': '#4f4f4f',
        'color_800': '#454545',
        'color_900': '#3d3d3d',
        'color_950': '#000000',
      }
    },
  },
  plugins: [],
};

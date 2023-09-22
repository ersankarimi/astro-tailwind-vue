/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: [
    "./src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

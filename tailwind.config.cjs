/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        accent: '#f97316',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

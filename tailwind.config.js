/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dmd-black': '#232928',
      'dmd-yellow': '#F2A922',
      'dmd-light-blue': '#38B6FF',
      'dmd-red': '#F84F5A',
      'dmd-green': '#268E6C',
      'dmd-white': '#fff',
    }
  },
  plugins: [],
}


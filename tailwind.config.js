/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#232928',
      'yellow': '#F2A922',
      'light-blue': '#38B6FF',
      'red': '#F84F5A',
      'green': '#268E6C',
      'white': '#fff',
      // Colores de Tecnologías
      "html": "#E34F26",
      "css": "#1572B6",
      "javascript": "#F7DF1E",
      "react-js": "#61DAFB",
      "angular": "#DD0031",
      "vue-js": "#4FC08D",
      "next-js": "#000000",
      "node-js": "#8CC84B",
      "github": "#181717",
      "redux": "#764ABC",
      "typescript": "#3178C6",
      "express-js": "#000000",
      "mongodb": "#47A248",
      "mysql": "#4479A1",
      "postgresql": "#336791",
      "firebase": "#FFCA28",
      "docker": "#2496ED",
      "kubernetes": "#326CE5",
      "laravel": "#FF2D20",
      "tailwindcss": "#38bdf8",
      "react-native": "#61DAFB",
      "git": "#F05032"

    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '650px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        number: ['Carrois Gothic', ' sans-serif'],
      },
      colors: {
        primary: '#7F4E52',
        secondary: '#7F525D',
        dark: '#817679',
        light: '#fff',
      },
      fontSize: {
        '20xl': '7rem',
      },
      container: {
        center: true,

        screens: {
          xl: '1240px',
        },
      },
    },
  },
  plugins: [],
};

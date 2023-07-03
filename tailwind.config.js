/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      keyframes: {
        floater: {
          '0%': { transform: 'translateY(0%);transition: ease-out 0.5s;' },
          '50%': { transform: 'translateY(2%);transition: ease-out 0.5s;' },
          '100%': { transform: 'translateY(0%);transition: ease-out 0.5s;' },
        },
      },
      animation: {
        'floating': 'floater 1.5s ease-out infinite',
      },
      boxShadow: {
        'blaze': '0 0px 15px 2px rgba(0 0 0, 0.3)',
        'blaze-sm': '0 0px 25px 2px rgba(0 0 0, 0.3)',
        'blaze-md': '0 0px 45px 2px rgba(0 0 0, 0.3)',
        'blaze-lg': '0 0px 65px 2px rgba(0 0 0, 0.3)',
      },
      colors: {
          'custom-blue': '#0077ff',
          'custom-cyan': '#00e7df',
          'custom-yellow': '#ffc900',
          'custom-red': '#ff1834',
          'custom-violet': '#7f00de',
          'custom-pink': '#ff007e',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

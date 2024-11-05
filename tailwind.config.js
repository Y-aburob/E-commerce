/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: 'hsl(26, 100%, 55%)',
        liteOrange1: 'rgba(255, 125, 26, .9)',
        liteOrange: 'hsl(25, 100%, 94%)',
        darkBlue: 'hsl(220, 13%, 13%)',
        DarkGrayishBlue: 'hsl(219, 9%, 45%)',
        GrayishBlue: 'hsl(220, 14%, 75%)',
        LightGrayishBlue: 'hsl(223, 64%, 98%)',
        backgroundPop: 'rgba(0, 0, 0, .5)',
        lightWhite: 'rgba(255, 255, 255, .3)',
        hoverLightWhite: 'rgba(255, 255, 255, .7)',
      },
      // rgb(105,112,125)
      fontFamily: {
        main: '"Kumbh Sans", sans-serif'
      },
      fontSize: {
        sm: '1.2rem',
        base: '1.6rem',
        navText: '1.5rem',
        md: '1.8rem',
        lg: '2.0rem',
        xl: '2.4rem',
      },
      lineHeight: {
        title: '2rem'
      },
    },
  },
  plugins: [],
}


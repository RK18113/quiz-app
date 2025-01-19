/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '22px': ['22px', '30px']
      },
      fontWeight: {
        '600': 600,
      },
      textUnderlinePosition: {
        fromFont: 'from-font',
      },
      textDecorationSkipInk: {
        none: 'none',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    fontFamily: {
      regular: ['Roboto Condensed']
    },

    extend: {

      colors: {
        'neutral': {
          100: '#f9fafb',
          300: '#e5e5e5',
        },
        'engbot': {
          100: '#c1ebf4',
          DEFAULT: '#9fdfe2',
          300: '#9fdfe2',
          400: '#93d8ef',
          500: '#2030b8',
          700: '#0b1154',
        },
        background: 'rgb(249 250 251)',
        background_gray: 'rgb(229 229 229)',
        'options-blue': 'rgba(147, 216, 239, 1)', 
        'menu-blue': 'rgba(155, 206, 216, 1)', 
      },

      maxWidth: {
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
      },
      maxHeight: {
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
      },
      minWidth: {
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
      },
      minHeight: {
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
      },
      padding: {
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
      },
    }
  },
  plugins: []
}

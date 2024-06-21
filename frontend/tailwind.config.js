/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    fontFamily: {
      regular: ['Roboto Condensed']
    },

    colors: {
      background: 'rgb(249 250 251)',
      background_gray: 'rgb(229 229 229)',
      light_100: '#c1ebf4',
      light_300: '#9fdfe2',
      dark_500: '#2030b8',
      dark_700: '#0b1154',
      'options-blue': 'rgba(147, 216, 239, 1)', 
      'menu-blue': 'rgba(155, 206, 216, 1)', 
    },

    extend: {
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

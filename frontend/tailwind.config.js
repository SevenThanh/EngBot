/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    colors: {
      background: 'rgb(249 250 251)',
      background_gray: 'rgb(24 24 27)',
      primary: 'rgb(125 211 252)',
      accent: 'rgb(37 99 235)',
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

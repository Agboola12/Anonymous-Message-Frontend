/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          'primary' : '#603090',
          'secondary' : '#CCBBDD'
        }
      },
    },
    plugins: [],
  }
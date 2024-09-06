/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        customGreen:'#034f3c', 
        customGreen1:'#05936f', 
      }
    },
  },
  plugins: [],
}


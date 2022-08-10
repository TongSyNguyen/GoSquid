/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'san serif'],
        drone: ['drone', 'san serif']
      },
      backgroundImage:{
        'sky-bg': "url('images/bg.png')",
      },
      height:{
        '7/10' :'70%',
        '23': '31%',
        'banner': '578px',
        'dj': '91%'
      },
      width:{
        '85': '340px',
      },
      lineHeight: {
        '16': '4rem',
      },
      colors:{
        'first': '#DA458F -6%',
        'last': '#DA34DD 113.05%',
        'header': '#17161A',
        'footer': '#17161A',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        'basket': '37%',
        'mafia': '52%',
        'neon': '22.5%',
        'assassin': '8%',

      }
    }
  },
  plugins: [],
}

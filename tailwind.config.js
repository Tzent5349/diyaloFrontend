/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#264e70",
        'secondary': "#264e70",
        'neutral': "#679186",
        'basee' : "#bbd4ce",
        'action': "#f9b4ab",
        'act': "#DD2A22"
      },
      fontFamily:{
        'openSans': ["Open Sans", "normal" ],
        'moon': ["moon" , "heavy"]
      },
      backgroundImage:{
        'main': "url('../public/assets/images/new/bg1.png')",
        'second': "url('../public/assets/images/new/simple.svg')",
        'small' :"url('../public/assets/images/new/simpleSm.svg')",
        'sprinkle': "url('../public/assets/images/new/Sprinkle.svg')",
        'reservation': "url('../public/assets/images/reservation.jpg')",
      },
      animation:{
          slideLeft: 'slideLeft 1s ease 1',
          marquee: 'marquee 25s linear infinite',
          marquee2: 'marquee2 25s linear infinite',
      },
      keyframes:{
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2 :{
          '0%' : {transform : 'translateX(100%)'},
          '100%' : {transform : 'translateX(0%)'},

        }
      },

    },
  },
  plugins: [],
}
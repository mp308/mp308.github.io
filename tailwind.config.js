/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Kanit', 'sans-serif'],
        mitr: ['Mitr', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        noto: ['Noto Sans Thai Looped', 'sans-serif'],
        embed: ['Permanent Marker', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
        kumbh: ['"Kumbh Sans"', 'sans-serif'],
        league: ['"League Script"', 'cursive'],
        lacquer: ['Lacquer', 'sans-serif'],
      },
      animation: {
        gradient: "gradient 6s linear infinite",
        loopscroll: "loopscroll 50s linear infinite",
        'rotate-conic': 'rotate-conic 30s linear infinite',
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        loopscroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        'rotate-conic': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        'pp-purple': '#861a54',
        'pp-blue': '#054f7d',
        'pp-ltblue': '#00a7cf',
        'sp-yellow': '#efe348',
      },
        backgroundImage: {
        'custom-radial': 'radial-gradient(circle at center,rgb(36, 170, 146) 10%,rgb(46, 134, 118) 63%, #000000 86%)',
      },
    },
  },
  plugins: [],
}

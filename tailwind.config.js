/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custPurple: "#A729F5",
        custLightPurple: "#D394FA",
        darkBlue: "#313E51",
        darkBlueLight: "#3B4D66",
        custGrey: "#626C7F",
        lightBlue: "#ABC1E1",
        lightGrey: "#F4F6FA",
        custGreen: "#26D782",
        custRed: "#EE5454"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}


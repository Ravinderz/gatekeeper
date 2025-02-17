/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        "opensans-bold": ["OpenSans-Bold","sans-serif"],
        "opensans-semibold": ["OpenSans-SemiBold","sans-serif"],
        "opensans-regular": ["OpenSans-Regular","sans-serif"],
        "opensans-light": ["OpenSans-Light","sans-serif"],
        "opensans-medium": ["OpenSans-Medium","sans-serif"]
      },
      colors: {
        "primary": {
          100: "#2F33800A",
          200: "#2F33801A",
          300: "#2F3380",
        },
        accent: {
          100: "#D5D6E6"
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",

        },
        danger: "#D92D20"
      }
    },
  },
  plugins: [],
}
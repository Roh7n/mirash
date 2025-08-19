/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [ "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        'pixelify-bold': ['PixelifySans-Bold', 'sans-serif'],
        'pixelify-medium': ['PixelifySans-Medium', 'sans-serif'],
        'pixelify-regular': ['PixelifySans-Regular', 'sans-serif'],
        'pixelify-semibold': ['PixelifySans-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
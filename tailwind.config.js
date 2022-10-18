module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:theme=> ({
        'image':"url('/loginzamuka1.jpg')",
      })
    },
  },
  plugins: [],
};

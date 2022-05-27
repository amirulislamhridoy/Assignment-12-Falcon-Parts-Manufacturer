module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  plugins: [require("daisyui")],
  daisyui:{
    themes: [
      {
        mytheme:{
          // secondary: '#900100',
      }
    }
    ]
  }
}

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ED6949",
          secondary: "#65509c",
          accent: "#404040",
          neutral: "#F2F2F2",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};

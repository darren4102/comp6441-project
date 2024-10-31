/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html", "../../content/**/*.md"],
  theme: {
    extend: {
      backgroundImage: {
        titlebar: "url(/comp6441-project/images/titlebar.png)",
      },
      colors: { pastel_red: "#ff6961" },
    },
  },
  plugins: [],
};

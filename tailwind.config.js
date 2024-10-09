/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html", "../../content/**/*.md"],
  theme: {
    extend: {
      backgroundImage: { titlebar: "url(/images/titlebar.png)" },
    },
  },
  plugins: [],
};

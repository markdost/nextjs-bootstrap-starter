module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./components/**/*.{js,jsx,ts,tsx}",
          "./node_modules/react-bootstrap/**/*.js",
        ],
        css: ["./styles/**/*.scss, ./styles/**/*.css"],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ["html", "body", "btn"],
          deep: [/^col/, /^navbar/, /^nav/],
          greedy: [/sticky-nav$/],
        },
      },
    ],
  ],
};

// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: '1fr 2fr 2fr 2fr',
      },
      gridTemplateRows: {
        dashboard: '2fr 4fr 3fr 4fr',
        layout: '2fr 3fr 3fr 3fr',
      },
      fontFamily: {
        dashboard: "'Raleway', sans-serif;",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

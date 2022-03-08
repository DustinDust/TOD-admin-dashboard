// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: '1fr 2fr 2fr 2fr',
        header: '3fr 2fr',
        projects: 'repeat(auto-fit, minmax(400px, 1fr))',
      },
      gridTemplateRows: {
        dashboard: '2fr 4fr 3fr 4fr',
        layout: '2fr 3fr 3fr 3fr',
        header: '1fr 1fr',
        projects: 'repeat(auto-fit, minmax(400px, 1fr))',
        'project-card': '1fr 3fr 1fr',
      },
      fontFamily: {
        whole: "'Raleway', sans-serif;",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    colors: {
      'violet': 'hsl(257, 40%, 49%)',
      'soft-magenta': 'hsl(300, 69%, 71%)',
      'white': 'hsl(0, 0%, 255%)',
    },
    extend: {
      fontFamily: {
        heading: [
          'Poppins',
          ...defaultTheme.fontFamily.sans,
        ],
        body: [
          'Open Sans',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        'mobile': "url('/src/assets/images/bg-mobile.svg')",
        'desktop': "url('/src/assets/images/bg-desktop.svg')",
      },
    },
  },
  plugins: [],
}

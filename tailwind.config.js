/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
        'karma': ['Karma'],
        'brushScript': ['"Brush Script MT"'],
        'oleoScript': ['"Oleo Script"'],
        'russoOne': ['"Russo One"']
      },
      backgroundImage: {
        'introduction':"url('./assets/homepage_first_section.png')"
      },
      gridTemplateColumns: {
        'mobileSlider': 'minmax(30px, 1fr) minmax(210px, 260px) minmax(30px, 1fr)',
        'mobileSlider2': 'minmax(30px, 1fr) minmax(210px, 260px) minmax(210px, 260px) minmax(30px, 1fr)'
      }
    },
  },
  plugins: [],
}

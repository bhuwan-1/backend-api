module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      colors: {
        'back': '#293136',
        'primary': '#0F75BC',
        'hover':'#1A334C',
      },
      // backgroundImage: theme => ({
      //   'DHI-LOGO': "url('/src/assets/img/DHI-logo.png')"
      //  })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

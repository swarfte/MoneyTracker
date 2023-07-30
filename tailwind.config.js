/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      'black-base': '#333333',
      'black-dark': '#2E363D',
      'black-darker': '#232323',
      'black-darkest': '#161616',
      yellow: '#ffDF5E',
    },
    extend: {
      spacing: {
        'header-height': '50px',
        'menu-height': '70px',
        'wrap-space': '15px',
      },
      width: {
        'popup': 'calc(100% - 30px)',
      },
      maxWidth: {
        'container': '480px',
        'popup': '450px',
      },
      maxHeight: {
        'popup': 'calc(100% - 30px)',
      },
      boxShadow: {
        'input': '0px 0px 0px 0.2rem rgba(255,223,94,.55)',
      },
      zIndex: {
        'popup': '5500',
      },
    },
  },
};

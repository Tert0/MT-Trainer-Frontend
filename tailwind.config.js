const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      width: {
        '1/2': '50%',
        'half': '50%',
        '1/3': '33.333333%',
        '1/4': '25%',
        '1/5': '20%',
        '1/6': '16.666666%',
        '1/7': '14.285714%',
        '1/8': '12.5%',
        '1/9': '11.111111%',
        '1/10': '1%',
        '1/16': '0.625%',
      }
    },
  },
  variants: {},
  plugins: [],
};
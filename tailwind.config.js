/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "gray-0": '#ffffff',
      "gray-25": '#F9F9FB',
      "gray-50": '#F5F6F8',
      "gray-100": '#EEEEF0',
      "gray-200": '#E3E7EC',
      "gray-300": '#BBC0CA',
      "gray-400": '#868FA2',
      "gray-500": '#4B5565',
      "gray-600": '#101828',

      "primary-100": '#F6F0FF',
      "primary-200": '#E9D7FE',
      "primary-300": '#B692F6',
      "primary-400": '#7047EB',
      "primary-500": '#6241C6',
      "primary-600": '#51389E',

      "error-100": '#FEF3F2',
      "error-200": '#FFCDCA',
      "error-300": '#FA7066',
      "error-400": '#F04438',
      "error-500": '#D92D20',
      "error-600": '#7A271A',

      "orange-100": '#FEF0EB',
      "orange-200": '#FED5C8',
      "orange-300": '#FDAC91',
      "orange-400": '#FF7D52',
      "orange-500": '#D84E04',
      "orange-600": '#9C3310',

      "yellow-100": '#FFFAEB',
      "yellow-200": '#FEF0C7',
      "yellow-300": '#FEDF89',
      "yellow-400": '#FEC84B',
      "yellow-500": '#F79009',
      "yellow-600": '#B54708',

      "green-100": '#ECFDF5',
      "green-200": '#DFFBEE',
      "green-300": '#93E9C1',
      "green-400": '#66C498',
      "green-500": '#339969',
      "green-600": '#14613D',

      "lightBlue-100": '#F0F9FF',
      "lightBlue-200": '#B9E6FE',
      "lightBlue-300": '#7CD4FD',
      "lightBlue-400": '#0BA5EC',
      "lightBlue-500": '#0086C9',
      "lightBlue-600": '#0B4A6F',
    },

    boxShadow: {
      md: '0px 4px 2px -2px rgba(16, 24, 40, 0.1), 0px 2px 6px -2px rgba(16, 24, 40, 0.1)',
      lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
      xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)',
      '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.25)',
      '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.2)',
    },

    fontSize: {
      'd-2xl': ['72px', { lineHeight: '90px', letterSpacing: '-2%' }],
      'd-xl': ['60px', { lineHeight: '72px', letterSpacing: '-2%' }],
      'd-lg': ['48px', { lineHeight: '60px', letterSpacing: '-2%' }],
      'd-md': ['36px', { lineHeight: '44px', letterSpacing: '-2%' }],
      'd-sm': ['30px', { lineHeight: '38px', letterSpacing: '-2%' }],
      'd-xs': ['24px', { lineHeight: '32px', letterSpacing: '-2%' }],
      'lg': ['18px', { lineHeight: '28px' }],
      'md': ['16px', { lineHeight: '24px' }],
      'sm': ['14px', { lineHeight: '20px' }],
      'xs': ['12px', { lineHeight: '18px' }],
      'caption': ['12px', { lineHeight: '18px', letterSpacing: '0.08em' }],
    },

    fontFamily: {
      inter: 'Inter',
      clashGrotesk: 'ClashGrotesk-Variable'

    },

    extend: {},
  },
  plugins: [],
}


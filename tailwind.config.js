module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      maxWidth: {
        'card': '20rem'
      },
      width: {
        '20-rem': '20rem'
      }
    }
  },
  variants: {},
  plugins: [],
}

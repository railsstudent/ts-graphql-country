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
        'card': '25rem'
      },
      width: {
        '25-rem': '25rem'
      }
    }
  },
  variants: {},
  plugins: [],
}

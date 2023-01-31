// module.exports = {
//   i18n: {
//     locales: ['en', 'es'],
//     defaultLocale: 'en',
//   },
// };

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
})

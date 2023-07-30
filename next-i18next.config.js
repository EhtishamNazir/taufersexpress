// next-i18next.config.js
const path = require('path');

module.exports = {
    i18n: {
        locales: ['en', 'fr'], // Add more locales if needed
        defaultLocale: 'en',
    },
    localePath: path.resolve('./public/static/locales'), // Adjust the path according to your project structure
};

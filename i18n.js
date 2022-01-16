module.exports = {
    defaultLocale: 'en-GB',
    locales: ['en-GB', 'tr-TR'],
    loadLocaleFrom: (lang, ns) => {
        return import(`./public/locales/${lang}/${ns}.json`)?.then((m) => m.default);
    },
    pages: {
        '*': ['common'],
    },
    logBuild: false,
};
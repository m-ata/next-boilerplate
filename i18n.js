module.exports = {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    loadLocaleFrom: (lang, ns) => {
        return import(`./public/locales/${lang}/${ns}.json`)?.then((m) => m.default);
    },
    pages: {
        '*': ['common'],
    },
    logBuild: false,
};
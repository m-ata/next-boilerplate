const path = require('path');
const { serverRuntimeConfig, publicRuntimeConfig } = require('./config/next.runtimeConfig');
const nextTranslate = require('next-translate');

module.exports = (phase) =>
  nextTranslate({
    webpack: (config) => {
      /* Next JS path aliases */
      config.resolve.alias['root'] = path.join(__dirname);
      config.resolve.alias['src'] = path.join(__dirname, 'src');
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      });

      return config;
    },
    serverRuntimeConfig,
    publicRuntimeConfig,
  });
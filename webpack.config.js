const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('web/dist/')
    .setPublicPath('/dist')
    .cleanupOutputBeforeBuild()
    .addEntry('index', './app/Resources/public/js/index.js')
    .addStyleEntry('main', './app/Resources/public/scss/main.scss')
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction());

module.exports = Encore.getWebpackConfig();

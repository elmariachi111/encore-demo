const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('web/dist/')
    .setPublicPath('/dist')
    .setManifestKeyPrefix('')
    .cleanupOutputBeforeBuild()
    .enableSassLoader()
    .addEntry('index', './app/Resources/public/js/index.js')
    //.addStyleEntry('main', './app/Resources/public/scss/main.scss')

    .enableSourceMaps(!Encore.isProduction());

module.exports = Encore.getWebpackConfig();

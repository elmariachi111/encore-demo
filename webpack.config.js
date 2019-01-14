var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/dist/')
    .setPublicPath('/dist')
    .addEntry('products', './assets/js/products.js')
    .addEntry('checkout', './assets/js/checkout.js')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .splitEntryChunks()
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();

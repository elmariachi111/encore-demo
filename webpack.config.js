var Encore = require('@symfony/webpack-encore');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

Encore
    .setOutputPath('public/dist/')
    .setPublicPath('/dist')
    .addStyleEntry('common', './assets/scss/_common.scss')
    .addEntry('products', './assets/js/products.js')
    .addEntry('checkout', './assets/js/checkout.js')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .splitEntryChunks()
    .autoProvidejQuery()
    .enableVueLoader()
   // .addPlugin(new BundleAnalyzerPlugin())
;

module.exports = Encore.getWebpackConfig();

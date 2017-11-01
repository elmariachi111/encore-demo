const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('web/dist/')
    .setPublicPath('/dist')
    .setManifestKeyPrefix('')
    .cleanupOutputBeforeBuild()
    .enableSassLoader()
    .createSharedEntry('vendor', [
        'babel-polyfill',
        'cash-dom'
    ])
    .autoProvideVariables({
        $: 'cash-dom',
        jQuery: 'cash-dom',
        'window.jQuery': 'cash-dom',
    })
    .addEntry('index', './app/Resources/public/js/index.jsx')
    .enableSourceMaps(!Encore.isProduction())
    .enableReactPreset()
    .configureBabel(babelConfig => {
        babelConfig.presets.push('es2017');
    })
    .enableVersioning(Encore.isProduction())

module.exports = Encore.getWebpackConfig();

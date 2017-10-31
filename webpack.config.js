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
    .addEntry('index', './app/Resources/public/js/index.js')
    //.addStyleEntry('main', './app/Resources/public/scss/main.scss')

    .enableSourceMaps(!Encore.isProduction())
    .configureBabel(babelConfig => {
        babelConfig.presets.push('es2017');

        // no plugins are added by default, but you can add some
        // babelConfig.plugins.push('styled-jsx/babel');
    })

module.exports = Encore.getWebpackConfig();

const Encore = require("@symfony/webpack-encore");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

Encore.setOutputPath("public/dist/")
  .setPublicPath("/dist")
  .addEntry("index", "./assets/js/index.js")
  .createSharedEntry("vendor", "./assets/js/vendor.js")
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableSassLoader()
  .enablePostCssLoader()
  .enableSingleRuntimeChunk()
  //.enableTypeScriptLoader()
  .autoProvideVariables({
    $: "cash-dom",
    jQuery: "cash-dom"
  })
  .addPlugin(
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled",
      generateStatsFile: true
    })
  );
module.exports = Encore.getWebpackConfig();

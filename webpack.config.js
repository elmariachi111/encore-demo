const Encore = require("@symfony/webpack-encore");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

Encore.setOutputPath("public/dist/")
  .setPublicPath("/dist")
  .addEntry("index", "./assets/js/index.js")
  .addEntry("index-react", "./assets/js/index-react.js")
  .addEntry("index-vue", "./assets/js/index-vue.js")
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableSassLoader()
  .enablePostCssLoader()
  .enableSingleRuntimeChunk()
  .enableReactPreset()
  .enableVueLoader()
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

if (Encore.isProduction()) {
  //will be replaced by .splitEntryChunks()
  Encore.createSharedEntry("vendor", "./assets/js/vendor.js");
}

module.exports = Encore.getWebpackConfig();

var Encore = require("@symfony/webpack-encore");
Encore.setOutputPath("public/dist/")
  .setPublicPath("/dist")
  .addEntry("index", "./assets/js/index.js")
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
  });
module.exports = Encore.getWebpackConfig();

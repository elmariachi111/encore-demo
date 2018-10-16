import _ from "lodash";

import "../scss/main.scss";

function component() {
  const helloWorld = _.join(["Bulma", "CSS", "Framework"], " ");
  $("section p.subtitle .framework").html(helloWorld);
}

$(() => {
  window.setTimeout(component, 2000);
});

if (module.hot) {
  module.hot.accept("./index.js", function() {
    console.log("Accepting the updated index module!");
  });
}

import _ from "lodash";
import "../scss/main.scss";

function component() {
  const helloWorld = _.join(["Bulma", "CSS", "Framework"], " ");
  $("section p.subtitle .framework").html(helloWorld);
  $("p.subtitle i.fa")
    .removeClass("fa-music")
    .addClass("fa-warning");
}

$(() => {
  window.setTimeout(component, 2000);
});

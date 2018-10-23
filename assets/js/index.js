import { join as _join } from "lodash-es";
import $ from "cash-dom";

import "../scss/main.scss";

function component() {
  const helloWorld = _join(["Bulma", "CSS", "Framework", "yes"], " ");
  $("section p.subtitle .framework").html(helloWorld);
  $("p.subtitle i.fa")
    .removeClass("fa-music")
    .addClass("fa-warning");
}

$(() => {
  window.setTimeout(component, 2000);
});

import _ from "lodash";

import "bulma/css/bulma.css";
import "font-awesome/css/font-awesome.css";
import "../css/simple.css";

function component() {
  const helloWorld = _.join(["Bulma test", "CSS", "Framework"], " ");
  const elem = document.querySelector("section p.subtitle .framework");

  elem.innerHTML = helloWorld;
}
window.setTimeout(component, 2000);

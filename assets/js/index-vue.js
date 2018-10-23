import Vue from "vue";
import LikeButton from "./vue-components/LikeButton";

const app = new Vue({
  el: "#vue-entry",
  template: "<LikeButton />",
  components: { LikeButton }
});

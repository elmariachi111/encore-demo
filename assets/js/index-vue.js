import Vue from "vue";

Vue.component("like-button", {
  data: () => ({
    liked: false
  }),

  template: `<button class="button is-large is-fullwidth is-rounded"
                     :class="{ 'is-warning' : liked, 'is-info': !liked }"
                     @click="liked = !liked">
    <div v-if="liked">
        <i class="fa fa-heart" />
        You like me
    </div>
    <div v-if="!liked">
        <i class="fa fa-frown-o" />
        no ones likes me
    </div>
    </button>
    `
});

const app = new Vue({
  el: "#vue-entry"
});

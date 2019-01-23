import Vue from "vue";
import Checkout from "./checkout.vue";

const checkoutFormElement = document.querySelector('#checkout-form');
new Vue({
    el: checkoutFormElement,
    render: h => h(Checkout, {
        props: checkoutFormElement.dataset
    })
});

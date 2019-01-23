import _ from "lodash";

import "bulma/css/bulma.css";
import '@fortawesome/fontawesome-free/css/all.css';
import validator from 'email-validator';

import Vue from 'vue/dist/vue.esm.js';

var app = new Vue({
    el: '#checkout-form',
    data: {
        name: '',
        email: '',
        paymentMethod: '',
        toc: false,
        amount: 1,
        price: 0
    },
    mounted() {
        this.price = parseFloat(this.$el.getAttribute('data-price'));
    },
    methods: {
        submit: function (evt) {
            evt.preventDefault();
            console.log("submit");
        }
    },
    computed: {
        emailValid: function() {
            return (validator.validate(this.email));
        },
        submittable: function() {
            return (
                this.emailValid &&
                this.toc === true &&
                this.name !== '' &&
                this.paymentMethod !== ''
            );
        },
        total: function() {
            return this.amount * this.price;
        }
    }
});


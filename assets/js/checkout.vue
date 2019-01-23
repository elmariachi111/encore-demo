<template>
    <form id="checkout-form" @submit.prevent="submit">
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Your name" name="name" v-model="name">
            </div>
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">

                <input class="input" :class="{'is-danger': !emailValid}" type="email" placeholder="Email input" value="hello@" v-model="email">
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
                <span class="icon is-small is-right" v-show="!emailValid">
                <i class="fas fa-exclamation-triangle has-text-danger"></i>
            </span>

            </div>
            <p class="help is-danger" v-show="!emailValid">This email is invalid</p>
        </div>
        <div class="columns">
            <div class="column">
                <div class="field">
                    <label class="label">Pay with</label>
                    <div class="control">
                        <div class="select">
                            <select name="payment-method" v-model="paymentMethod">
                                <option></option>
                                <option>Credit card</option>
                                <option>Bitcoin</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <label class="label">Amount</label>
                    <div class="control">
                        <input class="input" type="number"  name="name" v-model="amount" value="1">
                    </div>
                </div>
            </div>
        </div>

        <div class="field">
            <div class="control">
                <label class="checkbox">
                    <input type="checkbox" name="toc"  v-model="toc">
                    I agree to the <a href="#">terms and conditions</a>
                </label>
            </div>
        </div>

        <div>
            Your data
            <table class="table is-bordered">
                <tbody>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        {{ name }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Email:
                    </td>
                    <td>
                        {{ email }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Payment:
                    </td>
                    <td>
                        {{ paymentMethod }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Accept TOCs:
                    </td>
                    <td>
                       {{ toc }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Total</b>
                    </td>
                    <td>
                        {{ amount }} x &euro;{{ price }} = <b>&euro;{{ total }}</b>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="field">
            <div class="control">
                <button class="button is-link" :disabled="!submittable"  >Buy for &euro;{{ total }}</button>
            </div>
        </div>
        <Thankyou :visible="submitted" :name="name" @dismissed="submitted = false"></Thankyou>
    </form>
</template>

<script>

import validator from 'email-validator';
import Thankyou from "./checkout-thankyou";

export default {
    name: "Checkout",
    components: {Thankyou},
    data() {
        return {
            name: '',
            email: '',
            paymentMethod: '',
            toc: false,
            amount: 1,
            submitted: false
        }
    },
    props: {
        price: Number
    },
    methods: {
        submit() {
            this.submitted = true
        }
    },
    computed: {
        emailValid() {
            return (validator.validate(this.email));
        },
        submittable() {
            return (
                this.emailValid &&
                this.toc === true &&
                this.name !== '' &&
                this.paymentMethod !== ''
            );
        },
        total() {
            return this.amount * this.price;
        }
    }
}
</script>
<style lang="scss" scoped>
    .table.is-bordered {
        border: 3px solid green;
    }
</style>
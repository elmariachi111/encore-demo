<template>
    <div class="modal" :class="{'is-active': visible}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" aria-label="close" @click.prevent="$emit('dismissed')"></button>
            </header>
            <section class="modal-card-body">
                Thank you, {{ name }} for buying!
                <Carousel v-if="carousel"></Carousel>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-info" @click.prevent="carousel = true">carousel</button>
                <button class="button is-success" @click.prevent="$emit('dismissed')">Okay</button>
                <button class="button">Cancel</button>
            </footer>

        </div>

        <button class="modal-close is-large" aria-label="close" @click.prevent="$emit('dismissed')"></button>
    </div>
</template>

<script>
import Carousel from './carousel.vue';

export default {

    name: "Thankyou",
    components: {Carousel},
    props: {
        visible: Boolean,
        name: String
    },
    data() {
        return {
            carousel: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .button.is-success {
        background-color: blueviolet;
    }
</style>


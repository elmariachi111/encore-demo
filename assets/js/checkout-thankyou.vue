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
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click.prevent="$emit('dismissed')">Okay</button>
                <button class="button">Cancel</button>
            </footer>

        </div>
        <button class="modal-close is-large" aria-label="close" @click.prevent="$emit('dismissed')"></button>
    </div>
</template>

<script>

export default {
    name: "Thankyou",
    props: {
        visible: Boolean,
        name: String
    }
}
</script>

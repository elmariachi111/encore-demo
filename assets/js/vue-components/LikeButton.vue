<template>
    <button class="button is-large is-fullwidth is-rounded"
                     :class="{ 'is-warning' : liked, 'is-info': !liked }"
                     @click="liked = !liked">
    <div v-if="liked">
        <i class="fa fa-heart" />
        You like me
    </div>
    <div v-if="!liked">
        <i class="fa fa-frown-o" />
        no ones likes me.
    </div>
    </button>
</template>

<script>
export default {
  data: () => ({
    liked: false
  })
};
</script>

<style scoped>
</style>


<template>
    <div class="owl-carousel">
        <div> <img src="https://picsum.photos/400/400/?image=1"> </div>
        <div> <img src="https://picsum.photos/400/400/?image=2"> </div>
        <div> <img src="https://picsum.photos/400/400/?image=3"> </div>
        <div> <img src="https://picsum.photos/400/400/?image=4"> </div>
        <div> <img src="https://picsum.photos/400/400/?image=5"> </div>
        <div> <img src="https://picsum.photos/400/400/?image=6"> </div>
    </div>
</template>

<script>

    export default {
        name: "Carousel",
        mounted() {
            var jquery, css, owl;
            Promise.all([
                import('jquery'),
                import('owl.carousel/dist/assets/owl.carousel.css'),
                import ('owl.carousel')
            ]).then(resolved => {
                [jquery, css, owl] = resolved;
                jquery.default('.owl-carousel').owlCarousel();
            })
        }
    }
</script>
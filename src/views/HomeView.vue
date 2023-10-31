<script>
import CarouselBanner from '../components/CarouselBanner.vue'
import AboutUsSection from '../components/AboutUsSection.vue'

export default {
    name: 'HomeView',
    components: {
        CarouselBanner,
        AboutUsSection
    },
    data() {

        return {
            loading: true,
        }
    },
    methods: {
        splashpage() {
            setTimeout(() => {
                this.loading = false;

            }, 1000)

        }

    },

    mounted() {
        this.splashpage();

    }
}
</script>


<template>
    <section class="bg_gradient" :class="loading ? 'vh100_no_header_footer' : 'vh100_no_header_min'">
        <div class="h-100 w-100 d-flex justify-content-center align-items-center" v-if="loading">
            <div class=" filter_inverter spinner_loading">
                <img src="../../public/img/logocd_gray.png" alt="logo image" class="logo_shadow" width="100">
            </div>
        </div>
        <div class="h-100" v-else>
            <CarouselBanner />
            <AboutUsSection />
        </div>
    </section>
</template>


<style lang="scss" scoped></style>
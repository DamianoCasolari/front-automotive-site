<script>

import axios from "axios";

export default {
    name: 'CarouselBanner',
    data() {
        return {
            'base_API': 'http://127.0.0.1:8000/',
            'ads_path': 'api/ads',

            'loading': true,
            'error': null,
            'ads': null
        }
    },
    components: {

    },
    methods: {
        getAds(url) {
            axios.get(url).then(response => {
                console.log(response);
                this.ads = response.data.ads;
            }).catch(error => {
                console.log(error);
                this.error = error.message
            })
        },
        imageFromPath(path) {
            return this.base_API + 'storage/uploads/' + path;
        },
    },
    mounted() {
        const url = this.base_API + this.ads_path;
        this.getAds(url);
    }

}


</script>

<template>
    <div class="max_height_600 vh100_no_header py-5 bg_nightmare deep_dark_shadow">
        <div class="container d-flex justify-content-center align-items-center flex-column bright_shadow">


            <figure class="icon-cards">
                <div class="icon-cards__content">

                    <div class="icon-cards__item carousel_shadow d-flex align-items-center justify-content-center"
                        style="animation: ghost_100 1s linear 0.5s both;">
                        <div
                            class="d-flex align-items-center justify-content-center position-absolute z-2 text-white h2 text_shadow">
                            Passione</div>
                        <img src="../../public/img/richard-biros-pXFDctQsUys-unsplash.jpg" alt="car image in the banner "
                            class="h-100 rounded-4" style="max-width: 350px;">
                    </div>
                    <div class="icon-cards__item carousel_shadow d-flex align-items-center justify-content-center"
                        style="animation: ghost_80 1s linear 1s both;">
                        <div
                            class="d-flex align-items-center justify-content-center position-absolute z-2 text-white h3 text_shadow">
                            Professionalità</div>
                        <img src="../../public/img/why-kei-8e2gal_GIE8-unsplash.jpg" alt="car image in the banner "
                            class="h-100 rounded-4" style="max-width: 350px;">
                    </div>
                    <div class="icon-cards__item carousel_shadow d-flex align-items-center justify-content-center"
                        style="animation: ghost_100 1s linear 1.5s both;">
                        <div
                            class="d-flex align-items-center justify-content-center position-absolute z-2 text-white h2 text_shadow">
                            Trasparenza</div>
                        <img src="../../public/img/jaddy-liu-S4_-bHtzCBU-unsplash.jpg" alt="car image in the banner "
                            class="h-100 rounded-4" style="max-width: 350px; ">
                    </div>
                    <!-- Aggiungi altre icone qui -->
                    <div class="icon-cards__item carousel_shadow d-flex align-items-center justify-content-center"
                        style="animation: ghost_80 1s linear 2s both;">
                        <div
                            class="d-flex align-items-center justify-content-center position-absolute z-2 text-white h2 text_shadow">
                            Supporto</div>
                        <img src="../../public/img/benjamin-child-7Cdw956mZ4w-unsplash.jpg" alt="car image in the banner "
                            class="h-100 rounded-4" style="max-width: 350px;">
                    </div>
                    <div class="icon-cards__item carousel_shadow d-flex align-items-center justify-content-center"
                        style="animation: ghost_100 1s linear 2.5s both; ">
                        <div class=" d-flex align-items-center justify-content-center position-absolute z-2 text-white
                        h2 text_shadow">
                            Affidabilità</div>
                        <img src="../../public/img/alessio-lin-2n1SciGY5dI-unsplash.jpg" alt="car image in the banner "
                            class="h-100 rounded-4" style="max-width: 350px;">
                    </div>
                    <div class="icon-cards__item carousel_shadow d-flex align-items-center justify-content-center"
                        style="animation: ghost_80 1s linear 3s both;">
                        <div class=" d-flex align-items-center justify-content-center position-absolute z-2 text-white
                    h2 text_shadow">
                            Convenienza</div>
                        <img src="../../public/img/alessio-lin-AxlHH0jX6Gs-unsplash.jpg" alt="car image in the banner"
                            class="h-100 rounded-4" style="max-width: 350px;">
                    </div>
                    <div class="icon-cards__item central_logo filter_inverter">
                        <img src="../../public/img/logocd_gray.png" alt="logo image"
                            class="h-100 strong_shadow ghost_fade filter_blur">
                    </div>
                </div>
            </figure>
        </div>
    </div>
</template>

<style lang="scss"></style>

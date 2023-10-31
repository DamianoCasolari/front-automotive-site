<script>

import axios from "axios";

export default {


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
                this.loading = false;
            }).catch(error => {
                console.log(error);
                this.error = error.message
            })
        },
        imageFromPath(path) {
            return this.base_API + 'storage/uploads/' + path;
        },
        dragAndScroll() {
            const container = document.querySelector('.scrollable-container');
            let isDragging = false;
            let startX;

            container.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.clientX - container.offsetLeft;
                container.classList.add('grabbing');
            });

            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;

                e.preventDefault();

                const x = e.clientX - container.offsetLeft;
                const deltaX = x - startX;
                container.scrollLeft -= deltaX;

                startX = x;
            });

            window.addEventListener('mouseup', () => {
                isDragging = false;
                container.classList.remove('grabbing');
            });
        }
    },
    mounted() {
        const url = this.base_API + this.ads_path;
        this.getAds(url);
        this.dragAndScroll()

    }

}
</script>
<template>
    <section>
        <div class="vh100_no_header_footer container_ads">

            <div id="album_rotator " class="h-100">
                <div class="d-flex justify-content-center align-items-center text_light_gradient fs_title_card fw-light"
                    style="height: 30%;">Vetture in pronta
                    consegna
                </div>
                <div id="album_rotator_holder" class="position-relative scrollable-container py-3 " style="height: 70%;">
                    <!-- <div class="scrollable-content h-100"> -->

                    <div class="h-100 w-100 d-flex justify-content-center align-items-center " v-if="loading">
                        <div class=" filter_inverter spinner_loading">
                            <img src="../../public/img/logocd_gray.png" alt="logo image" class="logo_shadow" width="100">
                        </div>
                    </div>
                    <article
                        class=" album_item col-9 col-md-5 col-xxl-3 rounded-4 dark_shadow btn_push2 fade_in_below poppins"
                        v-for=" ad, index in  ads " v-else>
                        <router-link :to="{ name: 'single-ad', params: { 'slug': ad.slug } }"
                            class="text-decoration-none text_cloudy position-relative deep_dark_shadow h-100"
                            :style="`animation: ghost_100 1s linear ${index * 200}ms both;`">
                            <div class="img_container_ads rounded-4">
                                <img :src="imageFromPath(ad.cover_image)" class=" object_cover position-absolute rounded-4"
                                    alt="car image" style="filter: brightness(0.8);" loading="lazy">
                            </div>
                            <div
                                class="album_details fs_card d-flex flex-column justify-content-between h-100 p-3 position-relative z-2 ">
                                <div>
                                    <div class="brand fw-semibold strong_text_shadow"> {{ ad.brand_relation.name }}
                                    </div>
                                    <div class="model fw-semibold strong_text_shadow">{{ ad.model }} </div>
                                    <div class="year strong_text_shadow" style="white-space: wrap;">anno
                                        d'immatricolazione :
                                        <span>{{ ad.date_of_enrollment.slice(0, 4) }}</span>
                                    </div>
                                    <div class="km  strong_text_shadow">{{ ad.km }} km</div>
                                </div>
                                <div v-if="ad.price">
                                    <div class="price strong_text_shadow text-end">{{ ad.price }} €</div>
                                </div>
                                <div v-else>
                                    <div class="price strong_text_shadow text-end">Prezzo da definire</div>
                                </div>
                            </div>
                        </router-link>
                    </article>
                    <!-- </div> -->
                </div>

            </div>
        </div>
        <div class="contacts_button w-100 justify-content-center position-absolute bottom-0 align-items-center text_light_gradient fs_title_card fw-light"
            style="height: 30%;">

            <router-link :to="{ name: 'contacts' }" class="text-decoration-none fw-bold fs-4 text_cloudy">
                <div
                    class="logo_side bg_slide px-4 py-2 rounded-5  border border-1 strong_dark_shadow btn_push position-relative z-2">

                    <div class="fw-light">Contattaci per qualsiasi info</div>

                </div>
            </router-link>
        </div>
    </section>
</template>


<style lang="scss" scoped></style>
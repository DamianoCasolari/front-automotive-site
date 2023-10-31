<script>
import axios from 'axios';

export default {
    data() {
        return {
            'base_API': 'http://127.0.0.1:8000/',
            'ads_path': 'api/ads/',

            'loading': true,
            'error': null,
            'ad': [],
        }
    },
    methods: {
        getAds(url) {
            axios.get(url).then(response => {
                // console.log(response);
                this.ad = response.data.result;
                this.loading = false;
                // console.log(this.ad);
            }).catch(error => {
                console.log(error);
                this.error = error.message
            })
        },
        imageFromPath(path) {
            return this.base_API + 'storage/uploads/' + path;
        }
    },
    mounted() {
        const url = this.base_API + this.ads_path + this.$route.params.slug;
        console.log(url);
        this.getAds(url)
    }
}
</script>
<template>
    <div class="vh100_no_header_footer" v-if="loading">
        <div class="h-100 w-100  d-flex justify-content-center align-items-center">
            <div class=" filter_inverter spinner_loading">
                <img src="../../public/img/logocd_gray.png" alt="logo image" class="logo_shadow" width="100">
            </div>
        </div>
    </div>
    <div class="general_container position-relative overflow-hidden poppins" v-else>
        <div class="background_logo position-absolute container bottom-0 end-0">
            <img src="../../public/img/logocd_gray.png" alt="Logo in background" class="w-100 h-100">
        </div>
        <div class="vh100_single_page carousel_body strong_dark_shadow container ">
            <div id="carouselExampleIndicators" class="carousel slide h-100 faded_in_a">
                <!-- <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1" v-if="ad.cover_image"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"
                    v-if="ad.cover_image2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"
                    v-if="ad.cover_image3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"
                    v-if="ad.cover_image4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"
                    v-if="ad.cover_image5"></button>
            </div> -->
                <div class="carousel-inner h-100 rounded_at_the_bottom">
                    <div class="carousel-item active h-100" v-if="ad.cover_image">
                        <button class="bg-transparent p-0 border-0 w-100 h-100" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">

                            <img :src="imageFromPath(ad.cover_image)" class="d-block w-100 h-100 object_cover "
                                alt="first photo of car">
                        </button>
                    </div>
                    <div class="carousel-item h-100" v-if="ad.cover_image2">
                        <button class="bg-transparent p-0 border-0 w-100 h-100" data-bs-toggle="modal"
                            data-bs-target="#exampleModal2">

                            <img :src="imageFromPath(ad.cover_image2)" class="d-block w-100 h-100 object_cover "
                                alt="second photo of car">
                        </button>
                    </div>
                    <div class="carousel-item h-100" v-if="ad.cover_image3">
                        <button class="bg-transparent p-0 border-0 w-100 h-100" data-bs-toggle="modal"
                            data-bs-target="#exampleModal3">

                            <img :src="imageFromPath(ad.cover_image3)" class="d-block w-100 h-100 object_cover "
                                alt="second photo of car">
                        </button>
                    </div>
                    <div class="carousel-item h-100" v-if="ad.cover_image4">
                        <button class="bg-transparent p-0 border-0 w-100 h-100" data-bs-toggle="modal"
                            data-bs-target="#exampleModal4">

                            <img :src="imageFromPath(ad.cover_image4)" class="d-block w-100 h-100 object_cover "
                                alt="second photo of car">
                        </button>
                    </div>
                    <div class="carousel-item h-100" v-if="ad.cover_image5">
                        <button class="bg-transparent p-0 border-0 w-100 h-100" data-bs-toggle="modal"
                            data-bs-target="#exampleModal5">

                            <img :src="imageFromPath(ad.cover_image5)" class="d-block w-100 h-100 object_cover "
                                alt="second photo of car">
                        </button>
                    </div>
                </div>
                <button class="carousel-control-prev" v-if="ad.cover_image2" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" v-if="ad.cover_image2" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- MODALS -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content  position-relative rounded-5">
                    <button type="button" class="btn-close spin_effect position-absolute top-0 end-0 p-4 text-white"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    <img :src="imageFromPath(ad.cover_image)" class="d-block w-100 h-100 object_contain rounded-5 "
                        alt="first photo of car">
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true"
            v-if="ad.cover_image2">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content  position-relative rounded-5">
                    <button type="button" class="btn-close spin_effect position-absolute top-0 end-0 p-4 "
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    <img :src="imageFromPath(ad.cover_image2)" class="d-block w-100 h-100 object_contain rounded-5 "
                        alt="first photo of car">
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true"
            v-if="ad.cover_image3">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content  position-relative rounded-5">
                    <button type="button" class="btn-close spin_effect position-absolute top-0 end-0 p-4 "
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    <img :src="imageFromPath(ad.cover_image3)" class="d-block w-100 h-100 object_contain rounded-5 "
                        alt="first photo of car">
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true"
            v-if="ad.cover_image4">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content  position-relative rounded-5">
                    <button type="button" class="btn-close spin_effect position-absolute top-0 end-0 p-4 "
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    <img :src="imageFromPath(ad.cover_image4)" class="d-block w-100 h-100 object_contain rounded-5 "
                        alt="first photo of car">
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true"
            v-if="ad.cover_image5">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content  position-relative rounded-5">
                    <button type="button" class="btn-close spin_effect position-absolute top-0 end-0 p-4 "
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    <img :src="imageFromPath(ad.cover_image5)" class="d-block w-100 h-100 object_contain rounded-5 "
                        alt="first photo of car">
                </div>
            </div>
        </div>

        <!-- INFO SIDE -->
        <div class="info_container faded_in_b">
            <div
                class=" container carousel_body d-flex justify-content-center align-items-center flex-column flex-md-row text_cloudy text-center py-5">

                <div class="col-md-6 d-flex justify-content-center align-items-md-start flex-column pe-2">
                    <h2 class="fw-bold text_light_gradient">{{ ad.name }}</h2>
                    <div class="d-flex mb-4 justify-content-center">
                        <h3 class="me-2 text_light_gradient" v-if="ad.brand_relation">{{ ad.brand_relation.name }} - </h3>
                        <h3 class="">{{ ad.model }}</h3>
                    </div>
                    <h4 v-if="ad.date_of_enrollment"> <span class="text_elegant">Immatricolazione : </span><span
                            class="fw-semibold fs_18">{{
                                ad.date_of_enrollment }}</span></h4>
                    <h4 v-if="ad.km"><span class="text_elegant">Km : </span> <span class="fw-semibold fs_18">{{ ad.km
                    }}</span>
                    </h4>
                    <h4 v-if="ad.fuel_type"> <span class="text_elegant">Carburante : </span><span
                            class="fw-semibold fs_18">{{
                                ad.fuel_type
                            }}</span></h4>
                    <h4 v-if="ad.transmission" class=" mb-4"> <span class="text_elegant">Cambio :</span> <span
                            class="fw-semibold fs_18">{{
                                ad.transmission
                            }}</span></h4>
                </div>

                <div
                    class="col-md-6 d-flex justify-content-center align-items-center align-items-md-start flex-column ps-2">
                    <h4 v-if="ad.engine_displacement"> <span class="text_elegant">Cilindrata : </span><span
                            class="fw-semibold fs_18">{{
                                ad.engine_displacement }}</span></h4>
                    <h4 v-if="ad.cv" class=" mb-4"><span class="text_elegant">Cv : </span> <span
                            class="fw-semibold fs_18">{{
                                ad.cv
                            }}</span></h4>
                    <h4 v-if="ad.car_doors_number"> <span class="text_elegant">N° portiere :</span> <span
                            class="fw-semibold fs_18">{{
                                ad.car_doors_number }}</span></h4>
                    <h4 v-if="ad.color" class=" mb-4"> <span class="text_elegant">Colore :</span> <span
                            class="fw-semibold fs_18">{{
                                ad.color }}</span>
                    </h4>
                    <h4 v-if="ad.description"> <span class="text_elegant">Dettagli :</span> </h4>
                    <p class="fw-semibold fs_18 fs_18">{{ ad.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>
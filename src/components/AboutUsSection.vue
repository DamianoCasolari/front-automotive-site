<script>
import { appearWithScroll } from '../js/utility_functions.js';

export default {
    name: 'AboutUsSection',
    data() {


        return {}
    },
    methods: {
        scrollFunction() {
            const section = document.querySelector(".about_us")
            appearWithScroll(section)
        },
        handleScroll() {
            if (document.querySelector(".about_us") != null) {
                const scrollY = window.scrollY;
                const imageContainer = document.querySelector('.about_img');
                imageContainer.style.transform = `scale(1.2) translateY(${scrollY / 8 - 30}px)`;
            }
        }
    },
    mounted() {
        this.scrollFunction()
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>
<template>
    <section class="about_us container d-none d-md-block transition_duration_10">
        <h2 class="text-center text_light_gradient display-4 py-5">About Us</h2>
        <div class="d-flex justify-content-center">
            <div class="p-3 p-lg-5 d-none d-md-block col-6 ">
                <div class="img_about_container strong_dark_shadow">
                    <img src="../../public/img/img_car_1.jpg" class="about_img w-100 max_height_600 object_cover "
                        alt="Photo of a car on the street">
                </div>
            </div>
            <p class=" text_cloudy p-md-3 p-lg-5 col-12 col-md-6 fs-3 fs-xl-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem explicabo, pariatur sapiente nemo
                laboriosam
                distinctio ipsa ullam illo quo, amet voluptas laborum eveniet rerum quae sequi assumenda excepturi tenetur.
                Eligendi vero consequatur ipsa quasi voluptas nam odio veritatis rem culpa sapiente natus voluptate
                excepturi,
                distinctio, deleniti minima nihil inventore a iste dolorem ullam. Voluptatibus qui natus explicabo

            </p>
        </div>
        <div class="d-flex justify-content-center pb-5 pt-4 ">
            <router-link :to="{ name: 'ads' }" class="text-decoration-none fw-bold fs-4 text_cloudy">
                <div
                    class="logo_side position-relative bg_slide2 px-4 py-2 rounded-5  border border-1 strong_dark_shadow btn_push">

                    <div class=" fw-light">Le nostre vetture</div>

                </div>
            </router-link>
        </div>
    </section>
    <section class="about_us position-relative d-md-none ">
        <!-- bg_car bg_translate   -->
        <h2 class="container text-center text_cloudy display-4 py-5 text_shadow position-relative z-2">About Us</h2>
        <div class="container d-flex justify-content-center">
            <div class=" position-absolute h-100 col-12 col-md-6 top-0 ">
                <img src="../../public/img/img_car_1.jpg" class="h-100 w-100 object_cover strong_dark_shadow"
                    alt="Photo of a car on the street" style="filter: brightness(0.9); object-position: left;">
            </div>
            <p class=" text_cloudy px-2 pb-4 col-12 fs-3 text_light_shadow z-2">


                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem explicabo, pariatur sapiente nemo
                laboriosam
                distinctio ipsa ullam illo quo, amet voluptas laborum eveniet rerum quae sequi assumenda excepturi tenetur.
                Eligendi vero consequatur ipsa quasi voluptas nam odio veritatis rem culpa sapiente natus voluptate
                excepturi,
                distinctio, deleniti minima nihil inventore a iste dolorem ullam. Voluptatibus qui natus explicabo

            </p>
        </div>
        <div class="d-flex justify-content-center pb-5 pt-4 position-relative z-2">
            <router-link :to="{ name: 'ads' }" class="text-decoration-none fw-bold fs-4 text_cloudy">
                <div
                    class="logo_side position-relative bg_slide2 px-4 py-2 rounded-5  border border-1 strong_dark_shadow btn_push position-relative z-2">

                    <div class="fw-light">Le nostre vetture</div>

                </div>
            </router-link>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.img_about_container {
    overflow: hidden;
}

.about_img {
    transform: scale(1.2) translateY(-30px);

}
</style>
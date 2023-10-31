<script>
export default {
    name: 'SiteHeader',
    data() {


        return {}
    }
}
</script>
<template>
    <header class="position-sticky top-0 z-3 strong_dark_shadow">
        <nav class="container h-100 d-flex justify-content-between align-items-center p-3 ">
            <div class="left_info_side d-flex ">
                <router-link :to="{ name: 'home' }" class="text-decoration-none fw-bold fs-5 text_cloudy">
                    <div class="logo_side position-relative">

                        <div class=" logo_position">Logo</div>

                    </div>
                </router-link>
            </div>
            <div class="right_info_side d-flex ">
                <router-link :to="{ name: 'ads' }" class="text-decoration-none px-2 fs-6 ">
                    <div class="logo_side position-relative">

                        <div class=" text_light_gradient hover_bright" :class="{ 'color_bright': $route.name === 'ads' }">Le
                            nostre vetture</div>

                    </div>
                </router-link>
                <router-link :to="{ name: 'contacts' }" class="text-decoration-none px-2 fs-6 text_light_gradient">
                    <!-- <img class="logo" src="../assets/logo/provaconexpand-01.svg" alt=""> -->
                    <div class="logo_side position-relative">

                        <div class=" text_light_gradient hover_bright"
                            :class="{ 'color_bright': $route.name === 'contacts' }">Contatti</div>

                    </div>
                </router-link>

            </div>
        </nav>
    </header>
</template>


<style lang="scss" scoped></style>
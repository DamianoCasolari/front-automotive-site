<script>
export default {
    name: 'SiteFooter',
    data() {


        return {}
    }
}
</script>
<template>
    <footer class="bottom-0 z-3 ">
        <nav class="container h-100 d-flex justify-content-center justify-content-md-between align-items-center p-3 ">
            <div class="left_info_side d-none d-md-block">
                <router-link :to="{ name: 'home' }" class="text-decoration-none fw-bold fs-5 text_cloudy">
                    <div class="logo_side position-relative">

                        <div class=" logo_position">Info</div>

                    </div>
                </router-link>
            </div>
            <div class="text_cloudy" style="font-size: 12px;">
                Cretaed by &copy; Damiano Casolari
            </div>
            <div class="right_info_side d-none d-md-block ">
                <div class="left_info_side d-flex ">
                    <router-link :to="{ name: 'home' }" class="text-decoration-none fw-bold fs-5 text_cloudy">
                        <div class="logo_side position-relative">

                            <div class=" logo_position">Logo</div>

                        </div>
                    </router-link>
                </div>

            </div>
        </nav>
    </footer>
</template>


<style lang="scss" scoped></style>
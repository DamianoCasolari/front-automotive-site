<script>

import axios from "axios";
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
    data() {
        // return {
        //     'base_API': 'http://127.0.0.1:8000/',
        //     'ads_path': 'api/ads',

        //     'loading': true,
        //     'error': null,
        //     'ads': null
        // }
    },
    components: {
        SiteHeader,
        SiteFooter
    },
    methods: {

    }

}


</script>

<template>
    <SiteHeader />
    <main>
        <router-view class="bg_gradient"></router-view>
    </main>
    <SiteFooter />
</template>

<style lang="scss"></style>

import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import ContactsView from './views/ContactsView.vue';
import AdsView from './views/AdsView.vue';
import AboutUsView from './views/AboutUsView.vue';
import SingleAd from './views/SingleAd.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // All routes 
        {
            'path': '/',
            'name': 'home',
            'component': HomeView

        },
        {
            'path': '/contacts',
            'name': 'contacts',
            'component': ContactsView

        },
        {
            'path': '/ads',
            'name': 'ads',
            'component': AdsView

        },
        {
            'path': '/about-us',
            'name': 'about-us',
            'component': AboutUsView

        },
        {
            'path': '/ads/:slug',
            'name': 'single-ad',
            'component': SingleAd
        },

    ]

}
)
export { router };
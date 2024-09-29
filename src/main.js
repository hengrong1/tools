import {createApp} from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'
import '@/assets/style/global.css'
import router from './router'

createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Aura,
        }
    }).use(router).use(createPinia())
    .mount("#app");
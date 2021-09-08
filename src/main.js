import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import SeoTitleMixin from './mixins/SeoTitleMixin';
const app = createApp(App);

app.use(store)
app.use(router) 
app.mixin(SeoTitleMixin)
app.mount("#app");
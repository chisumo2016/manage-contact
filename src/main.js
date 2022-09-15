import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/**FontAwesome Icon*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

/**Bootstrap CSS , JS Configuration*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

/** Main Styles CSS*/
import "./styles.css"

createApp(App).use(store).use(router).mount('#app')

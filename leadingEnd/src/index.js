import Vue from 'vue';
import App from './app.vue';
import router from './router/index.js';
import *as Server from './api/index.js';

Vue.prototype.$axios = Server;
// Vue.use(ElementUI)
new Vue({
    el:'#app',
    router,
    render: h=>h(App)
})
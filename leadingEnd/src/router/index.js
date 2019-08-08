import Rouder from 'vue-router';
import Vue from 'vue';
import Loging from '../pages/loging/index.vue';
import List from '../pages/list/index.vue';
import Submit from '../pages/submit/index.vue';
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Rouder);
Vue.use(ElementUI);
export default new Rouder({
    routes:[
        {
            redirect:'/loging',
            path:'/'
        },
        {
            name:'loging',
            path:'/loging',
            component:Loging
        },
        {
            name:'list',
            path:'/list',
            component:List
        },
        {
            name:'submit',
            path:'/submit',
            component:Submit
        }
    ]
})
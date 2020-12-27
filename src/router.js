import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home';
import Index from './pages/index';
Vue.use(Router);
 
export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
            children: [
                {
                    path: '/index',
                    component: Index,
                    name: 'index',
                }
            ]
        }
    ]
})
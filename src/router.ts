import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/index',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ './views/home/Home.vue')
        },{
            path: '/',
            redirect: '/index',
        }
    ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Setup from '@/components/setup/Setup'
import User from '@/components/user/User'
import ChangePassword from '@/components/changePassword/ChangePassword'
import Auth from '@/components/auth/Auth'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'user',
    path: '/user',
    component: User
}, {
    name: 'changePassword',
    path: '/changePassword',
    component: ChangePassword
}, {
    name: 'auth',
    path: '/auth',
    component: Auth
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

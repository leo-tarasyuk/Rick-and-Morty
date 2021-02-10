import Vue from 'vue'
import Router from 'vue-router'
import Character from './pages/Character'
import Main from './pages/Main'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/character/:id',
            component: Character
        }
    ]
})
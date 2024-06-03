import { createWebHistory, createRouter } from 'vue-router'

import AppHome from './views/AppHome.vue'
import AppBlog from './views/AppBlog.vue'
import AppCharacters from './views/AppCharacters.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'blog',
            component: AppBlog
        },
        {
            path: '/characters',
            name: 'characters',
            component: AppCharacters
        },
    ]
})

export default router
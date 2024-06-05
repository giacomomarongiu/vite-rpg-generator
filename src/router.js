import { createWebHistory, createRouter } from 'vue-router'

import AppHome from './views/AppHome.vue'
import AppBlog from './views/AppBlog.vue'
import AppCharacters from './views/AppCharacters.vue'
import SingleCharacter from './views/SingleCharacter.vue'
import NotFound from './components/NotFound.vue'

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
        {
            path: '/characters/:slug',
            name: 'singleCharacter',
            component: SingleCharacter
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
        
    ]
})

export default router
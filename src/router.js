import { createWebHistory, createRouter } from 'vue-router'

import AppHome from './views/AppHome.vue'
import AppBlog from './views/AppBlog.vue'
import AppCharacters from './views/AppCharacters.vue'
import SingleCharacter from './views/SingleCharacter.vue'
import SingleItem from './views/SingleItem.vue'
import SingleType from './views/SingleType.vue'
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
            path: '/items/:slug',
            name: 'singleItem',
            component: SingleItem
        },
        {
            path: '/types/:slug',
            name: 'singleType',
            component: SingleType
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },

    ]
})

export default router
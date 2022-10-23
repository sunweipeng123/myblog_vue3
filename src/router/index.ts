import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/Index/index.vue'
import About from '@/views/About/index.vue'

const routes:Array<RouteRecordRaw> =[
    {
        path:'/',
        redirect:'index',
        children:[
            {
                path:'index',
                name:'index',
                component:Index,
            },
            {
                path:'about',
                name:'about',
                component:About
            },
            {
                path:'tags/:tag?',
                name:'tags',
                component: () => import(/* webpackChunkName: "tags" */ '../views/Tags/index.vue')
            },
            {
                path:'categories/:category?',
                name:'categories',
                component: () => import(/* webpackChunkName: "categories" */ '../views/Categories/index.vue')
            },
            {
                path:'archives',
                name:'archives',
                component: () => import(/* webpackChunkName: "categories" */ '../views/Archives/index.vue')
            },
            {
                path:'article/:id',
                name:'article',
                component: () => import(/* webpackChunkName: "article" */ '../views/Index/ArticleDetail/index.vue')
            },
        ]
    },
    
    
]
//移动端采取scrollBehavior
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to,from,scrollBehavior){
        if(document.documentElement.scrollTop){
            return
        }
        return {top:0}
    }
})
//pc端采取后置守卫
router.afterEach((to,from)=>{
    if(document.documentElement.scrollTop>50){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    
})
export default router
const routes=[
    {path:'/login',component:login},
    {path:'/country',component:country}
]

const router= VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

const app = Vue.createApp({}).use(router).mount('#app')
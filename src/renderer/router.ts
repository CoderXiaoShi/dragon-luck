import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/Company/index'
  },
  {
    path: '/Company', 
    component: () => import('./views/Company/index.vue'),
    children: [
      {
        path: '/Company/index',
        component: () => import('./views/Company/game.vue'),
      },
      {
        path: '/Company/setting',
        component: () => import('./views/Company/setting.vue'),
      },
      {
        path: '/Company/participant',
        component: () => import('./views/Company/participant.vue'),
      },
      {
        path: '/Company/result',
        component: () => import('./views/Company/result.vue'),
      },
    ] 
  },
  // {
  //   path: '/Company/setting',
  //   component: () => import('./views/Company/setting.vue'),
  // },
  // { path: '/', component: () => import('./views/home/index.vue') },
  // { path: '/menu', component: () => import('./views/menu/index.vue') },
  // { path: '/contacts', component: () => import('./views/contacts/index.vue') },
  // { path: '/contacts/add', component: () => import('./views/contacts/add.vue') },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

window.router = router
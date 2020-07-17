import Vue from 'vue'
import VueRouter from 'vue-router'
import Lobby from '../views/Lobby.vue'
// 路由按需加載後，那麼Vue服務在第一次加載時的壓力就能夠相應的小一些
// import Mail from '@/components/Mail/Mail.vue'
// import Album from '@/components/Album/Album.vue'
// import GrowUp from '@/components/GrowUp/GrowUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Lobby',
    component: Lobby,
    children: [
      {
        path: "Mail",
        name: "Mail",
        component: () => import('@/components/Mail/Mail.vue')
      },
      {
        path: "Album",
        name: "Album",
        component: () => import('@/components/Album/Album.vue')
      },
      {
        path: "GrowUp",
        name: "GrowUp",
        component: () => import('@/components/GrowUp/GrowUp.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export default router

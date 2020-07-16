import Vue from 'vue'
import VueRouter from 'vue-router'
import Lobby from '../views/Lobby.vue'
import Mail from '@/components/Mail/Mail.vue'
import Album from '@/components/Album/Album.vue'
import GrowUp from '@/components/GrowUp/GrowUp.vue'

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
        component: Mail
      },
      {
        path: "Album",
        name: "Album",
        component: Album
      },
      {
        path: "GrowUp",
        name: "GrowUp",
        component: GrowUp
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router

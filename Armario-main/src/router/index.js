import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Modal from '@/components/Modal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/modal/',
    name: 'modal',
    props: true,
    //ver se é de fato um link, pois é chamado igual component
    component: Modal
  }
]

const router = new VueRouter({
  routes
})

export default router

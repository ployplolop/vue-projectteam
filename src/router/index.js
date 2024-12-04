import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/travle',
    name: 'travle',
    component: () => import('../views/Travle.vue')
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('../views/Food.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/Video.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/search',
    name: '/search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/north1',
    name: '/north1',
    component: () => import('../views/Noth1.vue')
  },
  {
    path: '/sorth1',
    name: '/sorth1',
    component: () => import('../views/Sorth1.vue')
  },
  {
    path: '/east1',
    name: '/east1',
    component: () => import('../views/East1.vue')
  },
  {
    path: '/weat1',
    name: '/weat1',
    component: () => import('../views/Weat1.vue')
  },
  {
    path: '/capital1',
    name: '/capital1',
    component: () => import('../views/capital1.vue')
  },
  {
    path: '/north2',
    name: '/north2',
    component: () => import('../views/Noth2.vue')
  },
  {
    path: '/sorth2',
    name: '/sorth2',
    component: () => import('../views/Sorth2.vue')
  },
  {
    path: '/east2',
    name: '/east2',
    component: () => import('../views/East2.vue')
  },
  {
    path: '/weat2',
    name: '/weat2',
    component: () => import('../views/Weat2.vue')
  },
  {
    path: '/capital2',
    name: '/capital2',
    component: () => import('../views/capital2.vue')
  },
  {
    path: '/n1',
    name: '/n1',
    component: () => import('../views/NT1.vue/n1.vue')
  },
  {
    path: '/n2',
    name: '/n2',
    component: () => import('../views/NT1.vue/n2.vue')
  },
  {
    path: '/n3',
    name: '/n3',
    component: () => import('../views/NT1.vue/n3.vue')
  },
  {
    path: '/n4',
    name: '/n4',
    component: () => import('../views/NT1.vue/n4.vue')
  },
  {
    path: '/s1',
    name: '/s1',
    component: () => import('../views/NT1.vue/s1.vue')
  },
  {
    path: '/s2',
    name: '/s2',
    component: () => import('../views/NT1.vue/s2.vue')
  },
  {
    path: '/s3',
    name: '/s3',
    component: () => import('../views/NT1.vue/s3.vue')
  },
  {
    path: '/s4',
    name: '/s4',
    component: () => import('../views/NT1.vue/s4.vue')
  },
  {
    path: '/e1',
    name: '/e1',
    component: () => import('../views/NT1.vue/e1.vue')
  },
  {
    path: '/e2',
    name: '/e2',
    component: () => import('../views/NT1.vue/e2.vue')
  },
  {
    path: '/e3',
    name: '/e3',
    component: () => import('../views/NT1.vue/e3.vue')
  },
  {
    path: '/e4',
    name: '/e4',
    component: () => import('../views/NT1.vue/e4.vue')
  },
  {
    path: '/w1',
    name: '/w1',
    component: () => import('../views/NT1.vue/w1.vue')
  },
  {
    path: '/w2',
    name: '/w2',
    component: () => import('../views/NT1.vue/w2.vue')
  },
  {
    path: '/w3',
    name: '/w3',
    component: () => import('../views/NT1.vue/w3.vue')
  },
  {
    path: '/w4',
    name: '/w4',
    component: () => import('../views/NT1.vue/w4.vue')
  },
  {
    path: '/nf1',
    name: '/nf1',
    component: () => import('../views/NF1.vue/nf1.vue')
  },
  {
    path: '/nf2',
    name: '/nf2',
    component: () => import('../views/NF1.vue/nf2.vue')
  },
  {
    path: '/nf3',
    name: '/nf3',
    component: () => import('../views/NF1.vue/nf3.vue')
  },
  {
    path: '/nf4',
    name: '/nf4',
    component: () => import('../views/NF1.vue/nf4.vue')
  },
  {
    path: '/sf1',
    name: '/sf1',
    component: () => import('../views/NF1.vue/sf1.vue')
  },
  {
    path: '/sf2',
    name: '/sf2',
    component: () => import('../views/NF1.vue/sf2.vue')
  },
  {
    path: '/sf3',
    name: '/nf3',
    component: () => import('../views/NF1.vue/sf3.vue')
  },
  {
    path: '/sf4',
    name: '/sf4',
    component: () => import('../views/NF1.vue/sf4.vue')
  },
  {
    path: '/ef1',
    name: '/ef1',
    component: () => import('../views/NF1.vue/ef1.vue')
  },
  {
    path: '/ef2',
    name: '/ef2',
    component: () => import('../views/NF1.vue/ef3.vue')
  },
  {
    path: '/ef4',
    name: '/ef4',
    component: () => import('../views/NF1.vue/ef4.vue')
  },
  {
    path: '/wf1',
    name: '/wf1',
    component: () => import('../views/NF1.vue/wf1.vue')
  },
  {
    path: '/wf2',
    name: '/wf2',
    component: () => import('../views/NF1.vue/wf2.vue')
  },
  {
    path: '/wf3',
    name: '/wf3',
    component: () => import('../views/NF1.vue/wf3.vue')
  },
  {
    path: '/wf4',
    name: '/wf4',
    component: () => import('../views/NF1.vue/wf4.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

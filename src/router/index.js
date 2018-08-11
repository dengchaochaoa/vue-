import Vue from 'vue'
import VueRouter from 'vue-router'
import Breakdown from '../pages/Breakdown/Breakdown.vue'
import Homepage from '../pages/Homepage/Homepage.vue'
import Knowledge from '../pages/Knowledge/Knowledge.vue'
import Profile from '../pages/Profile/Profile.vue'
import Shopping from '../pages/Shopping/Shopping.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/breakdown',
      component: Breakdown,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/homepage',
      component: Homepage,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/knowledge',
      component: Knowledge,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/breakdown',
      component: Breakdown,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/shopping',
      component: Shopping,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/',
      redirect: '/homepage'
    }
  ]
})

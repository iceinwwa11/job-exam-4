import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Topchart from '../views/Top-chart.vue'
import Thai from '../views/Thai.vue'
import ThaiCountry from '../views/Thaicountry.vue'
import Privacy from '../views/Privacy.vue'
import International from '../views/International.vue'
import Register from '../views/Register.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/thai',
      name: 'thai',
      component: Thai
    },
    {
      path: '/top-chart',
      name: 'top-chart',
      component: Topchart
    },{
      path: '/thai-country',
      name: 'thaicountry',
      component: ThaiCountry
    },{
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },{
      path: '/international',
      name: 'international',
      component: International
    },{
      path: '/register',
      name: 'register',
      component: Register
    },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

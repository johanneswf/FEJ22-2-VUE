import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/details/:id',
      name: 'details',
      component: DetailsView,
      // component: () => import('../views/DetailsView.vue')
      props: true
    },
    {
      path: '/about',
      name: 'about',
      // alias: '/about-us',
      alias: ['/about-us', '/about-you'],
      component: () => import('../views/AboutView.vue')
    },
    // {
      //   path: '/about-us',
      //   // redirect: '/about'
      //   redirect: { name: 'about' }
      //   // redirect: to => {
        //   //   return { path: '/about', query: { q: 'hej'} }
        //   // }
        // }
        {
          path: '/:pathMatch(.*)',
          name: 'not-found',
          component: NotFound
          // redirect: '/'
        },
      ]
    })
    
    export default router
    
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import PostsDetailPage from '../views/PostsDetailPage.vue'
import EditPostPage from '../views/EditPostPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/about',
      name: 'PostsPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostsPage.vue')
    },

{
  path: '/posts-detail-page',
  name: 'PostsDetailPage',
  component: PostsDetailPage

},

{
path: '/edit-post-page',
name: 'EditPostPage',
component: EditPostPage

},

    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router

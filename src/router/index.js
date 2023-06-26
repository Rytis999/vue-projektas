import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import EditPostPage from '../views/EditPostPage.vue'
import ArticleDetail from '../components/ArticleDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PostsPage',
      component: () => import('../views/PostsPage.vue')
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
    },
    {
      path: '/article/:id',
      name: 'ArticleDetail',
      component: ArticleDetail,
      props: true
    }
  ]
  
 
})

export default router
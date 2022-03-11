import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReviewNotesView from '../views/ReviewNotesView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {     
    path: '/engagments/microsoft/review-notes',
    component: ReviewNotesView,
        
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ReleaseDetailView from '../views/ReleaseDetailView.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: DashboardView },
    { path: '/releases/:id', name: 'release-detail', component: ReleaseDetailView },
  ],
})

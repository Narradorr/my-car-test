import { createRouter, createWebHashHistory } from 'vue-router'
import Calendar from '../views/Calendar.vue'
import Todo from '../views/Todo.vue'

const routes = [
  {
    path: '/',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/todo/:id',
    name: 'Todo',
    component: Todo,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

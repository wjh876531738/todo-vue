import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Todo from '@/components/Todo'
import Remind from '@/components/Remind'
import Memory from '@/components/Memory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: Todo
        },
        {
          path: 'remind',
          component: Remind
        },
        {
          path: 'memory',
          component: Memory
        }
      ]
    }
  ]
})

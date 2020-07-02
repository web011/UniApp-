import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import ChildrenList from '../views/ChildrenList'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children:[
      {path:'/children/list',component:ChildrenList}
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

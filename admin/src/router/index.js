import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import ChildrenSwiperList from '../views/ChildrenSwiperList'
import ChildrenSwiper from '../views/ChildrenSwiper'
import Categories from '../views/Categories'
import CategoriesList from '../views/CategoriesList'
import Cate from '../views/Cate'
import CateList from '../views/CateList'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children:[
      {path:'/children/swiper',component:ChildrenSwiper},
      {path:'/children/swiperedit/:id',component:ChildrenSwiper,props:true},
      {path:'/children/swiperlist',component:ChildrenSwiperList},
      {path:'/children/Categories/:id',component:Categories,props:true},
      {path:'/children/Categories',component:Categories,props:true},
      {path:'/children/Categorieslist',component:CategoriesList},
      {path:'/children/Cate/:id',component:Cate,props:true},
      {path:'/children/Cate',component:Cate,props:true},
      {path:'/children/Catelist',component:CateList}
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

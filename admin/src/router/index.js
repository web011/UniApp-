import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import ChildrenSwiperList from '../views/ChildrenSwiperList'
import ChildrenSwiper from '../views/ChildrenSwiper'
import Categories from '../views/Categories'
import CategoriesList from '../views/CategoriesList'
import Cate from '../views/Cate'
import CateList from '../views/CateList'
import HomeDateils from '../views/HomeDateils'
import HomeDateilsList from '../views/HomeDateilsList'
import CateDateils from '../views/CateDateils'
import CateDateilsList from '../views/CateDateilsList'
import AdminUser from '../views/AdminUser'
import AdminUserList from '../views/AdminUserList'
import Login from '../views/Login'


Vue.use(VueRouter)

  const routes = [
  {
    path:'/login',
    name:'login',
    component:Login,
    meta:{isPublic:true}
  },
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
      {path:'/children/Cate',component:Cate},
      {path:'/children/Catelist',component:CateList},


      {path:'/children/HomeDateils/:id',component:HomeDateils,props:true},
      {path:'/children/HomeDateils',component:HomeDateils},
      {path:'/children/HomeDateilsList',component:HomeDateilsList},

      {path:'/children/CateDateils/:id',component:CateDateils,props:true},
      {path:'/children/CateDateils',component:CateDateils},
      {path:'/children/CateDateilsList',component:CateDateilsList},


      {path:'/children/AdminUser/:id',component:AdminUser,props:true},
      {path:'/children/AdminUser',component:AdminUser},
      {path:'/children/AdminUserList',component:AdminUserList},
    ],
  },
]
const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next) =>{
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next();
})
export default router

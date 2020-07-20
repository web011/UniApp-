<template>
  <div class="container">
    <div style="width:20rem;hiehgt:100%">
      <div class="w-100 d-flex ai-center jc-center" style="height:5rem;border-bottom:1px solid #ddd">
        <h2>周边商城后台</h2>
      </div>
      <div class="w-100 d-flex jc-center ai-center" style="height:6.5rem;border-bottom:1px solid #ddd">
        <img :src="userimg" alt="" width="50" height="50" class="border-r">
        <div class="ml-2">
          <p class="text-font-hui fs-sm mb-2">欢迎回来</p>
          <span class="fs-xl font-b">超级管理员</span>
        </div>
      </div>
      <div class="d-flex ai-center w-100 jc-center" style="height:4rem;border-bottom:1px solid #ddd;">
        <i class="iconfont icon-1" style="font-size:1.8rem"></i>
        <span class="ml-2 font-b fs-lg">后台首页</span>
      </div>
      <div class="d-flex p-3 jc-left ai-enter flex-column">
        <span class="mb-3">内容管理</span>
        <div>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="首页轮播图" name="1">
              <div class="d-flex flex-column jc-center ai-center">
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==0}" @click="active = 0;$router.push('/children/swiper')">添加轮播图</p>
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==1}" @click="active = 1;$router.push('/children/swiperlist')">轮播图列表</p>
              </div>
            </van-collapse-item>
          </van-collapse>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="首页热销商品" name="2">
              <div class="d-flex flex-column jc-center ai-center">
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==2}" @click="active = 2;$router.push('/children/HomeDateils')">添加商品</p>
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==3}" @click="active = 3;$router.push('/children/HomeDateilsList')">商品列表</p>
              </div>
            </van-collapse-item>
          </van-collapse>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="商品分类列表" name="3">
              <div class="d-flex flex-column jc-center ai-center">
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==4}" @click="active = 4;$router.push('/children/Categories')">添加商品分类</p>
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==5}" @click="active = 5;$router.push('/children/Categorieslist')">商品分类列表</p>
              </div>
            </van-collapse-item>
          </van-collapse>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="分类列表" name="4">
              <div class="d-flex flex-column jc-center ai-center">
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==6}" @click="active = 6;$router.push('/children/Cate')">添加分类</p>
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==7}" @click="active = 7;$router.push('/children/Catelist')">分类列表</p>
              </div>
            </van-collapse-item>
          </van-collapse>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="添加分类商品" name="5">
              <div class="d-flex flex-column jc-center ai-center">
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==8}" @click="active = 8;$router.push('/children/CateDateils')">添加商品</p>
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==9}" @click="active = 9;$router.push('/children/CateDateilsList')">商品列表</p>
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
        <span class="mb-3 mt-4">数据管理</span>
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="管理员" name="6">
            <div class="d-flex flex-column jc-center ai-center">
              <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==10}" @click="active = 10;$router.push('/children/AdminUser')">添加管理员</p>
              <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==11}" @click="active = 11;$router.push('/children/AdminUserList')">管理员列表</p>
            </div>
          </van-collapse-item>
        </van-collapse>
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="用户" name="7">
            <div class="d-flex flex-column jc-center ai-center">
              <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==12}" @click="active = 12;$router.push('/children/WebUser')">添加用户</p>
              <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==13}" @click="active = 13;$router.push('/children/WebUserList')">用户列表</p>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
    <div class="container-right">
      <div class="container-right-top d-flex jc-center ai-center">
        <span class="usertext">管理员： {{user}}</span>
      </div>
      <div class="container-right-center p-3">
        <router-view :key="$route.path"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Collapse, CollapseItem } from 'vant';
import 'vant/lib/collapse/style'
import 'vant/lib/collapse-item/style'

Vue.use(Collapse);
Vue.use(CollapseItem);
export default {
  data() {
    return {
      activeName: '0',
      activeNames: '0',
      active:-1,
      items:{},
      userimg:'',
      user:''
    };
  },
  methods:{
  },
  created(){
    this.userimg = localStorage.userimg;
    this.user = localStorage.user;
  }
}
</script>
<style lang="scss">
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fff;
  .van-collapse-item__content{
    padding: 0px;
  }
  // 选中样式
  .active{
    background-color:#d88e8e;
    color: #fff;
  }
  /* 右边样式 */
  .container-right{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .container-right-top{
      width: 100%;
      height: 100px;
      background-color: #dbd7d7;
      .usertext{
        font-size:3rem
      }
    }
    .container-right-center{
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
      }
  }
}
</style>
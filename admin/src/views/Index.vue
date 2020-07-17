<template>
  <div class="container">
    <div style="width:20rem;hiehgt:100%">
      <div class="w-100 d-flex ai-center jc-center" style="height:5rem;border-bottom:1px solid #ddd">
        <h2>周边商城后台</h2>
      </div>
      <div class="w-100 d-flex jc-center ai-center" style="height:6.5rem;border-bottom:1px solid #ddd">
        <img src="../assets/mes.jpg" alt="" width="50" height="50" class="border-r">
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
        <span class="mb-3">数据管理</span>
        <div>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="首页轮播图" name="1">
              <div class="d-flex flex-column jc-center ai-center">
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==0}" @click="swiper">添加轮播图</p>
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==1}" @click="swiperlist">轮播图列表</p>
              </div>
            </van-collapse-item>
          </van-collapse>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="首页热销商品" name="2">
              <div class="d-flex flex-column jc-center ai-center">
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==3}" @click="active = 3;$router.push('/children/HomeDateils')">添加商品</p>
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==4}" @click="active = 4;$router.push('/children/HomeDateilsList')">商品列表</p>
              </div>
            </van-collapse-item>
          </van-collapse>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="商品分类列表" name="3">
              <div class="d-flex flex-column jc-center ai-center">
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==5}" @click="active = 5;$router.push('/children/Categories')">添加商品分类</p>
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==6}" @click="active = 6;$router.push('/children/Categorieslist')">商品分类列表</p>
              </div>
            </van-collapse-item>
          </van-collapse>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="分类列表" name="4">
              <div class="d-flex flex-column jc-center ai-center">
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==7}" @click="active = 7;$router.push('/children/Cate')">添加分类</p>
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==8}" @click="active = 8;$router.push('/children/Catelist')">分类列表</p>
              </div>
            </van-collapse-item>
          </van-collapse>
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="添加分类商品" name="5">
              <div class="d-flex flex-column jc-center ai-center">
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==9}" @click="active = 9;$router.push('/children/CateDateils')">添加商品</p>
                <p class="cr text-center w-100 border-r" style="height:3rem;line-height: 3rem;" :class="{'active':active==10}" @click="active = 10;$router.push('/children/CateDateilsList')">商品列表</p>
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>
    </div>
    <div class="container-right">
      <div class="container-right-top">
      </div>
      <div class="container-right-center p-3">
        <router-view></router-view>
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
      active:-1
    };
  },
  methods:{
    swiper(){
      this.active = 0;
      this.$router.push("/children/swiper")
    },
    swiperlist(){
      this.active = 1;
      this.$router.push("/children/swiperlist")
    },
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
      background-color: blue;
    }
    .container-right-center{
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
      }
  }
}
</style>
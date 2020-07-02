<template>
  <div class="container">
    <div class="container-left" @mouseover="bgbutton">
      <div class="container-left-top">
        <!-- <img src="" alt=""> -->
        <h3>**商城后台</h3>
      </div>
      <div class="container-left-top-user">
        <div class="img"></div>
        <div>
          <span style="font-size:13px;color:#ddd;">欢迎回来,</span>
          <p style="color:#fff;font-size:15px;margin-top:5px;">超级管理员</p>
        </div>
      </div>
      <div class="shoye">
        <img src="../assets/sy.png" alt="" width="20px">
        <span class="contexts">后台首页</span>
      </div>
      <div style="padding-left:10px;">
        <span class="text">数据管理</span>
      </div>
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="商品管理" name="1" size="large">
          <div class="collapse-text">
            <button @click="list">商品列表</button>
            <button>多条件搜索</button>
            <button>添加商品</button>
          </div>
        </van-collapse-item>
        <div style="padding-left:10px;">
      </div>
        <van-collapse-item title="用户管理" name="2">
          <div class="collapse-text">
            <button>用户列表</button>
            <button>用户检索</button>
          </div>
        </van-collapse-item>
      <div style="padding-left:10px;">
      </div>
        <van-collapse-item title="订单管理" name="3">
          <div class="collapse-text">
            <button>订单列表</button>
            <button>搜索订单</button>
          </div>
        </van-collapse-item>
      </van-collapse> 
      <span class="text" style="margin:40px 0 10px 10px;">内容管理</span>
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item title="首页商品管理" name="1">
          <div class="collapse-text">
            <button>轮播广告</button>
            <button>首页推荐</button>
            <button>最新上架</button>
            <button>热销单品</button>
          </div>
        </van-collapse-item>
        <van-collapse-item title="功能页面" name="2">
          <div class="collapse-text">
            <button>403错误页面</button>
            <button>404错误页面</button>
            <button>500错误页面</button>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="container-right">
      <div class="container-right-top">
      </div>
      <div class="container-right-center">
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
      titles:"111"
    };
  },
  methods:{
    list(){
      this.$router.push("/children/list")
    },
    bgbutton(event){
      
    }
  }
}
</script>
<style>
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f5f5f5;
}
/* 左边样式 */
.container-left{
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 100%;
  background-color: #2A3F54;
}
.container-left>.container-left-top{
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
}
.container-left>.container-left-top>h3{
  color: #fff;
  font-size: 17px;
}
.shoye{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.contexts{
  color: #fff;
  font-size: 14px;
  margin: 20px 0 20px 10px;
  display: inline-block;
}
.text{
  color:#fff;
  font-size:12px;
  display: inline-block;
  margin-bottom: 10px;
}
/* 修改vant里面的样式 */
[class*=van-hairline]::after{
  border: none;
}
.van-collapse-item--border::after{
  border-top: none;
}
.van-collapse-item__content{
  padding: 0;
}
.van-cell--large .van-cell__title{
  font-size: 14px;
}
.van-cell--clickable{
  text-align: left;
  padding-left: 30px;
  background-color: #2A3F54;
  color: #fff;
  font-size: 14px !important;
}
.van-cell::after{
  border: none;
}
/*  */

.container-left .collapse-text{
  display: flex !important;
  flex-direction: column !important;
  width: 100%;
  background-color: #235a91;
}
.container-left .collapse-text>button{
  padding: 10px 0 10px 0;
  cursor: pointer;
  border: none;
  text-align: center;
  font-size: 13px;
  color:rgba(255, 255, 255, 0.75);
  width: 100%;
  background-color: #235a91;
}
.container-left>.container-left-top-user{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-bottom: 15px;
  margin-top: 5px;
}
.container-left>.container-left-top-user>.img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: royalblue;
  margin-right: 20px;
}
/* 右边样式 */
.container-right{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container-right>.container-right-top{
  width: 100%;
  height: 100px;
  background-color: red;
}
.container-right>.container-right-center{
  width: 100%;
  height: 100%;
  background-color: royalblue;
}
</style>
<template>
	<view class="mine-container">
		<router-link to="/pages/personal/personal" tag="div" class="users d-flex ai-center jc-left bg-white p-2 pr-3 pl-3">
			<image class="border-r" :src="userdateils.userimg" mode=""></image>
			<h4 class="fs-lg ml-3 text-ellipse flex-1">{{userdateils.username}}</h4>
			<i class="iconfont icon-iconfontjiantou3"></i>
		</router-link>
		<view class="d-flex p-2 pr-3 pl-3 bg-white">
			<view class="text-center" style="width: 6rem;">
				<text class="text-font-hui fs-sm">游戏大区：</text>
				<p class="fs-sm">未绑定</p>
				<i class="iconfont icon-biji"></i>
			</view>
			<view class="text-center" style="width: 6rem;">
				<text class="text-font-hui fs-sm">游戏大区：</text>
				<p class="fs-sm">未绑定</p>
				<i class="iconfont icon-biji"></i>
			</view>
			<view class="text-center" style="width: 6rem;">
				<text class="text-font-hui fs-sm">游戏大区：</text>
				<p class="fs-sm">未绑定</p>
				<i class="iconfont icon-biji"></i>
			</view>
		</view>
		<view class="bg-white mb-1">
			<router-link to="/pages/order/order" class="d-flex jc-between p-2" style="border-bottom: 1px solid #efefef;">
				<text class="fs-sm">我的订单</text>
				<text class="text-font-hui fs-sm">查看全部订单 &gt;</text>
			</router-link>
			<view class="d-flex p-2 pl-3 pr-3">
				<view style="width: 5rem;text-align: center;">
					<view class="sprite sprite-dfk"></view>
					<p class="fs-md">待付款</p>
				</view>
				<view style="width: 5rem;text-align: center;">
					<view class="sprite sprite-dfh"></view>
					<p class="fs-md">待发货</p>
				</view>
				<view style="width: 5rem;text-align: center;">
					<view class="sprite sprite-dsh"></view>
					<p class="fs-md">待收货</p>
				</view>
				<view style="width: 5rem;text-align: center;">
					<view class="sprite sprite-dpj"></view>
					<p class="fs-md">待评价</p>
				</view>
			</view>
		</view>
		<view class="bg-white">
			<router-link to="/pages/cart/cart" tag="div" class="d-flex jc-left ai-center p-2 pl-3 pr-3" style="border-bottom: 1px solid #efefef;">
				<view class="sprite sprite-gwc mr-2"></view>
				<text class="fs-sm flex-1">我的购物车<text class="text-font-hui">（{{i}}）</text></text>
				<i class="iconfont icon-iconfontjiantou3"></i>
			</router-link>
			<view class="d-flex jc-left ai-center p-2 pl-3 pr-3" style="border-bottom: 1px solid #efefef;">
				<view class="sprites mr-2"></view>
				<text class="fs-sm flex-1">我的优惠劵<text class="text-font-hui">（1）</text></text>
				<i class="iconfont icon-iconfontjiantou3"></i>
			</view>
			<router-link to="/pages/collection/collection" tag="div" class="d-flex jc-left ai-center p-2 pl-3 pr-3" style="border-bottom: 1px solid #efefef;">
				<view class="sprite sprite-sc mr-2"></view>
				<text class="fs-sm flex-1">我的收藏<text class="text-font-hui">（{{n}}）</text></text>
				<i class="iconfont icon-iconfontjiantou3"></i>
			</router-link>
			<view class="d-flex jc-left ai-center p-2 pl-3 pr-3" style="border-bottom: 1px solid #efefef;">
				<view class="sprite sprite-pj mr-2"></view>
				<text class="fs-sm flex-1">我的评价<text class="text-font-hui">（1）</text></text>
				<i class="iconfont icon-iconfontjiantou3"></i>
			</view>
		</view>
		<view class="d-flex jc-left ai-center p-2 pl-3 pr-3 bg-white mt-2" style="border-bottom: 1px solid #efefef;">
			<view class="sprite sprite-dz mr-2"></view>
			<text class="fs-sm flex-1">收货地址<text class="text-font-hui">（1）</text></text>
			<i class="iconfont icon-iconfontjiantou3"></i>
		</view>
		<view class="d-flex jc-left ai-center p-2 pr-3 pl-3 mt-2 bg-white">
			<view style="width: 6rem;" class="text-center">
				<view class="sprite sprite-xt"></view>
				<p class="fs-sm">系统信息</p>
			</view>
			<view style="width: 6rem;" class="text-center">
				<view class="sprite sprite-bz"></view>
				<p class="fs-sm">帮助中心</p>
			</view>
			<view style="width: 6rem;" class="text-center">
				<view class="sprite sprite-wm"></view>
				<p class="fs-sm">关于我们</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// 接收父组件的值
		props:{
			
		},
		// 引入子组件
		components:{

		},
		data() {
			return {
				userdateils:{},
				// 获取购物车数量
				i:0,
				// 获取收藏的数量
				n:0
			}
		},
		onLoad() {
	
		},
		methods: {
			async gatuser(){
				// 获取用户信息
				const _id = localStorage._id;
				const res = await this.$http.get('/login/'+_id);
				this.userdateils = res.data;
				this.i = this.userdateils.cart.length;
				this.n = this.userdateils.collections.length;
			}
		},
		created(){
			this.gatuser();
			if(!sessionStorage.token){
				this.$router.push('/pages/login/login')
			}
		},
		// 页面一显示就执行一段代码
		activated() {
		  if(!sessionStorage.token){
			  this.userdateils = {};
			  this.$router.push('/pages/login/login')
		  }else{
			  this.gatuser();
		  }
		},
	}
</script>

<style lang="scss">
	.mine-container{
		background-color: #f0f0f0;
		.users{
			border-bottom: 1px solid #efefef;
			image{
				height: 3rem;
				width: 3rem;
			}
		}
	}
</style>

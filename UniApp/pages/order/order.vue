<template>
	<view class="order-container">
		<view class="cart-top p-2 d-flex ai-center w-100 bg-white" style="border-bottom: 1px solid #ddd;">
			<router-link to="/" tag="div" style="width: 44%;">
				<i class="iconfont icon-zuojiantou-01" style="font-size: 1.5rem;"></i>
			</router-link>
			<text class="fs-lg">我的订单</text>
		</view>
		<view class="search" style="background-color: #ddd;">
			<view class="search-top-a">
				<image src="../../static/home-img/search.png"></image>
				<input type="text" value="" class="search-top" placeholder="试试输入你想要的宝贝名称吧~"/>
			</view>
		</view>
		<ul style="border-top: 1px solid #ddd;border-bottom: 1px solid #ddd; height: 2.5rem;width: 100%;" class="pt-2 pr-3 pl-3">
			<li v-for="(item,i) in arr" :key="i" :class="{'border-b':active == i}" class="fs-md h-100" @click="active = i" >{{item}}</li>
		</ul>
		<!-- 这里show来判断有没有订单 true 显示 false 隐藏 -->
		<view style="width: 100%;height: 10rem;line-height: 10rem;" class="text-center" v-show="1">
			<text class="text-font-hui fs-xss">目前暂无相关订单</text>
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
				arr:["全部","待付款","待发货","待收货","待评价"],
				active:0
			}
		},
		onLoad() {
	
		},
		methods: {
			s(){console.log(1)}
		}
	}
</script>

<style lang="scss">
	.order-container{
		ul{
			li{
				width: 4rem;
				text-align: center;
			}
			.border-b{
				border-bottom:1px solid #f04831;
			}
		}
	}
</style>

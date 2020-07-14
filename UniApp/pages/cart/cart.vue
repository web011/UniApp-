<template>
	<view class="cart-container">
		<view class="cart-top p-2 d-flex ai-center w-100 bg-white">
			<router-link to="/" tag="div" style="width: 44%;">
				<i class="iconfont icon-1" style="font-size: 1.5rem;"></i>
			</router-link>
			<text class="fs-lg">购物车</text>
		</view>
		<!-- 循环这个标签生成多个商品 -->
		<view class="cart-text w-100 bg-white d-flex jc-left ai-center mb-2">
			<view @click="xz == true ? xz = false : xz = true">
				<i v-if="xz==false" class="iconfont icon-yuanquanweixuanfuben" style="margin-left:25rpx;"></i>
				<i v-else class="icons iconfont icon-gou text-jg-color ml-2"></i>
			</view>
			<view class="cart-text-center d-flex">
				<image src="../../static/cart.jpg" mode="" class="ml-2 border-r"></image>
				<view class="ml-2">
					<p class="fs-sm text-e" style="width: 8rem;">长城守卫军手办套装（5只）</p>
					<p class="text-jg-color fs-lg font-b">￥378.00 </p>
					<text class="text-font-hui fs-sm">现货</text>
				</view>
				<view class="ml-2 d-flex flex-column ai-center">
					<i class="iconfont icon-laji" style="font-size: 1rem;"></i>
					<view class="mt-4 mr-1">
						<text class="text-font-hui fs-xss mt-1 couns" @click="scount(-1)">-</text>
						<text class="count fs-lg">{{count}}</text>
						<text class="text-font-hui fs-xss mt-1 couns" @click="scount(1)">+</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 下面的结算 -->
		<view class="cart-bottoms d-flex jc-left ai-center bg-white">
			<view style="width: 5rem;text-align: center;border-right:1px solid #ddd" @click="quanxuan==true?quanxuan=false:quanxuan=true;xz=quanxuan;">
				<i v-if="quanxuan==false" class="iconfont icon-yuanquanweixuanfuben"></i>
				<i v-else class="icons iconfont icon-gou text-jg-color"></i>
				<p class="fs-xs">全选</p>
			</view>
			<view style="width: 5rem;text-align: center;border-right:1px solid #ddd">
				<p class="fs-xs">共计</p>
				<text class="fs-sm">1件</text>
			</view>
			<view style="width: 5rem;text-align: center;">
				<p class="fs-xs">合计</p>
				<text class="text-jg-color fs-md ml-1 font-b">￥378.00 </text>
			</view>
			<view style="width: 5rem;text-align: center;height: 100%;line-height: 2.5rem;" class="bg-jg-color text-white fs-md">
				<text>结算</text>
			</view>
		</view>
		<dateils :shows="shows"></dateils>
	</view>
</template>

<script>
	import dateils from '../../component/dateils-list/dateils-list.vue';
	export default {
		// 接收父组件的值
		props:{
			
		},
		// 引入子组件
		components:{
			dateils
		},
		data() {
			return {
				count:1,
				shows:"为你推荐",
				xz:true,
				quanxuan:true,
			}
		},
		onLoad() {
	
		},
		methods: {
			scount(n){
				this.count += n;
			},
		},
		watch:{
			count(){
				if(this.count <= 0){
					this.count = 1;
				}
			}
		}
	}
</script>

<style lang="scss">
	.cart-container{
		// 头部
		.cart-top{
			height: 3rem;
			border-bottom: 1px solid #ddd;
		}
		// 商品详情
		.cart-text{
			height: 6rem;
			.iconfont{
				font-size: 25px;
			}
			.icons{
				font-size: 28px;
			}
			.cart-text-center{
				image{
					width: 4.5rem;
					height: 5rem;
				}
			}
			.couns{
				width: 1rem;
				height: 1rem;
				display: inline-block;
				background-color: #f3f2f2;
				text-align: center;
				line-height: 1rem;
			}
			.count{
				width: 1.5rem;
				height: 1rem;
				text-align: center;
				line-height: 1rem;
				display: inline-block;
			}
		}
		// 下面的结算
		.cart-bottoms{
			z-index: 999;
			position: fixed;
			left: 0rem;
			bottom: 2.7rem;
			width: 100%;
			height: 2.5rem;
		}
	}
</style>

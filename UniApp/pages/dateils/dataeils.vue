<template>
	<view class="dateils-container">
		<!-- 头部导航栏 -->
		<view class="dateils-top d-flex ai-center jc-center">
			<i class="iconfont icon-zuojiantou-01 ml-2"></i>
			<ul class="flex-1">
				<li v-for="(item,i) in arr" :key="i"><a href="#" :class="{'text-jg-color':active==i}" @click="active = i">{{item}}</a></li>
			</ul>
			<i class="iconfont icon-shouye mr-3"></i>
		</view>
		<!-- 商品轮播 -->
		<swiper :indicator-dots="true" :autoplay="true" circular="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,i) in imgs" :key="i">
				<view class="swiper-item w-100 h-100">
					<image :src="item" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 商品名称和价格 -->
		<view class="mb-2 bg-white d-flex flex-column">
			<p class="text-ellipse fs-xss ml-3 mt-3 w-100">千年之狐李白Q版手办</p>
			<text class="text-jg-color fs-xss ml-3 mt-2 pb-2 font-b">￥258.00</text>
		</view>
		<!-- 商品款式 -->
		<view class="ks bg-white d-flex jc-between p-2 pl-3 pr-3" @click="s">
			<text class="fs-sm">请选择:款式</text>
			<text class="fs-lg">&gt;</text>
		</view>
		<!-- 点击选择款式就显示，不点击就隐藏 -->
		<view >
			<view class="showks bg-white p-3">
				<!-- 商品图片和标题和价格 -->
				<view class="d-flex">
					<image src="../../static/home-img/card-img-text1.png" mode=""></image>
					<view>
						<p class="text-jg-color fs-md ml-1 font-b">￥258.00</p>
						<text class="text-ellipse fs-md ml-2 w-100">千年之狐李白Q版手办</text>
					</view>
				</view>
				<!-- 款式 -->
				<view>
					<p class="text-font-hui fs-sm mt-3">款式</p>
					<text class="fs-xs buttons mt-2">现货</text>
				</view>
				<!-- 数量 -->
				<view class="">
					<p class="text-font-hui fs-sm mt-3">数量</p>
					<text class="text-font-hui fs-xss mt-1 couns" @click="scount(-1)">-</text>
					<text class="count fs-lg">{{count}}</text>
					<text class="text-font-hui fs-xss mt-1 couns" @click="scount(1)">+</text>
				</view>
				<!-- 加入购物车和立即购买 -->
				<view class="w-100 carts">
					<text class="text-white bg-jg-cs fs-lg">加入购物车</text>
					<text class="text-white bg-jg-color fs-lg">立即购买</text>
				</view>
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
				imgs:["https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190917135827_95564.big.jpg","https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190917135830_51349.big.jpg","https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190917135848_63799.big.jpg","https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190917135851_45758.big.jpg","https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201909/20190917135853_52254.big.jpg"],
				arr:["商品","详情","评价"],
				active:0,
				count:0
			}
		},
		onLoad(option) {
			console.log(option)
		},
		methods: {
			scount(n){
				this.count += n;
			},
			s(){console.log(1)}
		}
	}
</script>

<style lang="scss">
	.dateils-container{
		// background-color: #fff;
		// 头部导航栏
		.dateils-top{
			z-index: 1000;
			background-color: rgba(0,0,0,0.1);
			width: 100%;
			height: 3rem;
			position: fixed;
			top: 2.5rem;
			left: 0rem;
			i{
				font-size: 1.3rem;
				display: inline-block;
			}
			ul{
				width: 50%;
				li{
					width: 4rem;
					text-align: center;
					font-size: 0.7rem;
				}
			}
		}
		// 商品轮播
		swiper{
			height: 20rem;
			margin-top: 3rem;
			swiper-item{
				height: 20rem;
				image{
					height: 100%;
					width: 100%;
				}
			}
		}
		// 选择款式
		.ks{
			border-top:1px solid #999;
			border-bottom: 1px solid #999;
		}
		// 点击显示，不点隐藏
		.showks{
			position: fixed;
			left: 0rem;
			bottom: 0rem;
			width: 100%;
			height: 20rem;
			image{
				width: 3rem;
				height: 3rem;
			}
			.buttons{
				width: 4rem;
				height: 1.5rem;
				border:1px solid #999;
				display: inline-block;
				text-align: center;
				line-height: 1.5rem;
				border-radius: 0.4rem;
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
				width: 2rem;
				height: 1rem;
				text-align: center;
				line-height: 1rem;
				display: inline-block;
			}
			.carts{
				position: fixed;
				bottom: 0rem;
				left: 0rem;
				text{
					width: 50%;
					display: inline-block;
					text-align: center;
					height: 2.5rem;
					line-height: 2.5rem;
				}
			}
		}
	}
</style>

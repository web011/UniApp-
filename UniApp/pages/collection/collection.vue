<template>
	<view class="cart-container">
		<view class="cart-top p-2 d-flex ai-center w-100 bg-white">
			<router-link to="/" tag="div" style="width: 44%;">
				<i class="iconfont icon-zuojiantou-01" style="font-size: 1rem;"></i>
			</router-link>
			<text class="fs-lg">我的收藏</text>
		</view>
		<!-- 循环这个标签生成多个商品 -->
		<view class="cart-text w-100 bg-white d-flex jc-left ai-center mb-2">
			<view class="cart-text-center d-flex jc-center ai-center">
				<image src="../../static/cart.jpg" mode="" class="ml-2 border-r"></image>
				<view class="ml-2">
					<p class="fs-sm text-e" style="width: 8rem;">长城守卫军手办套装（5只）</p>
					<p class="text-jg-color fs-lg font-b">￥378.00 </p>
					<text class="text-font-hui fs-sm">有货</text>
					<p class="fs-sm">收藏时间：2020-07-14-10:27</p>
				</view>
				<view class="ml-2 d-flex flex-column ai-center">
					<view @click="ligegoumai"><p class="text-jg-color fs-md gmai">立刻购买</p></view>
					<text class="text-font-hui fs-md mt-2">删除</text>
				</view>
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
				shows:"猜你喜欢",
			}
		},
		onLoad() {
	
		},
		methods: {
			ligegoumai(){
				console.log(1)
				uni.navigateTo({
					url:`../dateils/dataeils?id=商品id`
				})
			}
		},
		watch:{
			
		}
	}
</script>

<style lang="scss">
	.cart-container{
		// 头部
		.cart-top{
			height: 2rem;
			border-bottom: 1px solid #ddd;
		}
		// 商品详情
		.cart-text{
			height: 6rem;
			.cart-text-center{
				image{
					width: 4.5rem;
					height: 5rem;
				}
			}
			.gmai{
				width: 4.5rem;
				height: 1.5rem;
				border:1px solid #f04831;
				border-radius: 50px;
				text-align: center;
				line-height: 1.5rem;
			}
		}
	}
</style>

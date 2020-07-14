<template>
	<view class="cart-container">
		<view class="cart-top">
			<i class="iconfont icon-1 fs-xss"></i>
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

			}
		},
		onLoad() {
	
		},
		methods: {
		
		}
	}
</script>

<style lang="scss">
	.cart-container{
		.cart-top{
			width: 100%;
			height: 4rem;
			i{
				width: 10rem !important;
				height: 4rem !important;
			}
		}
	}
</style>

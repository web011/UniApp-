<template>
	<view class="find-container p-2 pt-0 d-flex mt-2">
		<router-link to="/pages/find-dateils/find-dateils" tag="div" class="find-text bg-white mr-2">
			<image src="../../static/home-img/card-img-text1.png" mode=""></image>
			<p class="ml-2 text-ellipse fs-md" style="width: 89%;">钱花的值了,超级好看</p>
			<!-- 用户头像 -->
			<view class="find-text-bottom d-flex ai-center jc-center pb-2 ml-2">
				<image src="../../static/home-img/wzdp1.png" mode=""></image>
				<text class="flex-1 fs-xs ml-1">匿名用户</text>
				<text class="mr-2 fs-xs">
					<i class="iconfont icon-aixin fs-sm mr-1"><text class="ml-1">0</text></i>
					<i class="iconfont icon-liuyan"><text class="ml-1">0</text></i>
				</text>
			</view>
		</router-link>
		<router-link to="/pages/find-dateils/find-dateils" tag="div" class="find-text bg-white">
			<image src="../../static/home-img/card-img-text1.png" mode=""></image>
			<p class="ml-2 text-ellipse fs-md" style="width: 89%;">钱花的值了,超级好看</p>
			<!-- 用户头像 -->
			<view class="find-text-bottom d-flex ai-center jc-center pb-2 ml-2">
				<image src="../../static/home-img/wzdp1.png" mode=""></image>
				<text class="flex-1 fs-xs ml-1">匿名用户</text>
				<text class="mr-2 fs-xs">
					<i class="iconfont icon-aixin fs-sm mr-1"><text class="ml-1">0</text></i>
					<i class="iconfont icon-liuyan"><text class="ml-1">0</text></i>
				</text>
			</view>
		</router-link>
	</view>
</template>

<script>
	export default{
		// 引入子组件
		components:{
			
		},
		// 接收父传过来的数据
		props:{
			
		},
		data() {
			return {
				name:"ok"
			}
		},
		onLoad() {
	
		},
		methods: {
		
		}
	}
</script>

<style lang="scss">
	.find-container{
		.find-text{
			width: 50%;
			image{
				width: 100%;
				height: 10rem;
			}
			.find-text-bottom{
				image{
					width: 1rem;
					height: 1rem;
				}
				.iconfont{
					font-size:0.7rem;
				}
			}
		}
	}
</style>

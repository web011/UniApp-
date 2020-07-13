<template>
	<view class="search-container">
		<view class="search" style="background-color: hsla(0,0%,89%,.8);" @click="shows = 1">
			<router-link to="/pages/home/home" tag="text" class="fanhui">返回</router-link>
			<view class="search-top-a" style="width: 75%;">
				<image src="../../static/home-img/search.png"></image>
				<input type="text" value="" class="search-top" placeholder="试试输入你想要的宝贝名称吧~"/>
			</view>
		</view>
		<view class="p-3">
			<h4>热门搜索</h4>
			<view class="search-text">
				<!-- 循环这个text元素生成多个text -->
				<text class="fs-md mt-3 ml-3 text-ellipse">花木兰</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
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
	.search-container{
		.fanhui{
			font-size:0.8rem;
			margin-left: 0.4rem;
			border: none !important;
			background-color: hsla(0,0%,89%,.8);
			margin-right: 1rem;
		}
		.search-text{
			text{
				width: 5rem;
				height: 1.5rem;
				display: inline-block;
				border:1rpx solid #666;
				text-align: center;
				line-height: 1.5rem;
				border-radius: 50px;
				padding-left: 0.5rem;
				padding-right: 0.5rem;
			}
		}
	}
</style>

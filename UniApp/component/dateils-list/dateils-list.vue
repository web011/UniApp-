<template>
	<view class="p-3 text-left" style="padding-top:0rem;">
		<h4 v-if="shows">{{shows}}</h4>
		<view class="d-flex rexiao flex-wrap ai-center jc-center">
			<view @click="j(1)" class="mt-2 pb-1 bg-white border-r">
				<image src="../../static/home-img/rxhw1.png" class="border-r" mode=""></image>
				<view class="ml-1">
					<p class="text-ellipse fs-sm ml-2" style="width: 7.5rem;">天籁弦音蔡文姬Q版手办</p>
					<p class="text-jg-color fs-xl ml-1 font-b">￥168</p>
				</view>
			</view>
			<view @click="j(2)" class="ml-1 mt-2 pb-1 bg-white border-r">
				<image src="../../static/home-img/rxhw2.jpg" class="border-r" mode=""></image>
				<view class="ml-1">
					<p class="text-ellipse fs-sm ml-2" style="width: 7.5rem;">Myethos 游园惊梦甄姬手办</p>
					<p class="text-jg-color fs-xl ml-1 font-b">￥798</p>
				</view>
			</view>
			<view @click="j(3)" class="mt-2 pb-1 bg-white border-r">
				<image src="../../static/home-img/rxhw3.png" class="border-r" mode=""></image>
				<view class="ml-1">
					<p class="text-ellipse fs-sm ml-2" style="width: 7.5rem;">星空梦想鲁班七号/小夜灯</p>
					<p class="text-jg-color fs-xl ml-1 font-b">￥199</p>
				</view>
			</view>
			<view @click="j(4)" class="ml-1 mt-2 pb-1 bg-white border-r">
				<image src="../../static/home-img/rxhw4.png" class="border-r" mode=""></image>
				<view class="ml-1">
					<p class="text-ellipse fs-sm ml-2" style="width: 7.5rem;">云端筑梦师庄周帆布包</p>
					<p class="text-jg-color fs-xl ml-1 font-b">￥59</p>
				</view>
			</view>
			<view @click="j(5)" class="mt-2 pb-1 bg-white border-r">
				<image src="../../static/home-img/rxhw5.png" class="border-r" mode=""></image>
				<view class="ml-1">
					<p class="text-ellipse fs-sm ml-2" style="width: 7.5rem;">妲己机器人礼包</p>
					<p class="text-jg-color fs-xl ml-1 font-b">￥699</p>
				</view>
			</view>
			<view @click="j(6)" class="ml-1 mt-2 pb-1 bg-white border-r">
				<image src="../../static/home-img/rxhw6.png" class="border-r" mode=""></image>
				<view class="ml-1">
					<p class="text-ellipse fs-sm ml-2" style="width: 7.5rem;">王都密探李元芳Q版手办</p>
					<p class="text-jg-color fs-xl ml-1 font-b">￥168</p>
				</view>
			</view>
			<view @click="j(7)" class="mt-2 pb-1 bg-white border-r">
				<image src="../../static/home-img/rxhw7.jpg" class="border-r" mode=""></image>
				<view class="ml-1">
					<p class="text-ellipse fs-sm ml-2" style="width: 7.5rem;">吃饱饱系列毛绒公仔28厘米（多款式可选）</p>
					<p class="text-jg-color fs-xl ml-1 font-b">￥128</p>
				</view>
			</view>
			<view @click="j(8)" class="ml-1 mt-2 pb-1 bg-white border-r">
				<image src="../../static/home-img/rxhw8.png" class="border-r" mode=""></image>
				<view class="ml-1">
					<p class="text-ellipse fs-sm ml-2" style="width: 7.5rem;">绝代智谋诸葛亮运动款保温杯</p>
					<p class="text-jg-color fs-xl ml-1 font-b">￥168</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		// 接收父传过来的数据
		props:{
			shows:{type:String}
		},
		data() {
			return {
				name:"ok"
			}
		},
		onLoad() {
	
		},
		methods: {
			j(n){
				console.log(1)
				uni.navigateTo({
					url:`../dateils/dataeils?id=${n}&name=uname`
				})
			}
		}
	}
</script>
	

<style lang="scss">
	.rexiao{
		image{
			width: 8.7rem;
			height: 8.7rem;
		}
	}
</style>

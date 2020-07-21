<template>
	<view class="p-3 text-left" style="padding-top:0rem;">
		<h4 v-if="shows">{{shows}}</h4>
		<view class="d-flex rexiao flex-wrap ai-center jc-left">
			<view class="mt-2 pb-1 bg-white border-r mr-1" v-for="(item,i) of dateils" :key="i" @click="j(item._id)">
				<image :src="item.imgurl || item.showimg" class="border-r" mode=""></image>
				<view class="ml-1">
					<p class="text-ellipse fs-sm ml-2" style="width: 7.5rem;">{{item.title}}</p>
					<p class="text-jg-color fs-xl ml-1 font-b">￥{{item.price}}</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		// 接收父传过来的数据
		props:{
			shows:{type:String},
			dateils:Array | Object
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
				uni.navigateTo({
					url:`../dateils/dataeils?id=${n}&name=uname`
				})
			}
		},
		created(){

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

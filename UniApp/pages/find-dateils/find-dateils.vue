<template>
	<view class="find-dateils-container">
		<view class="d-flex ai-center jc-left">
			<router-link to="/pages/find/find" tag="p" class="m-2 fs-md" style="margin-right: 6.5rem;">返回</router-link>
			<text class="fs-sm">好评详情</text>
		</view>
		<view class="imgs">
			<image class="w-100" src="../../static/home-img/card-img-text1.png" mode=""></image>
		</view>
		<view class="pl-2 pr-2">
			<view class="bottom-dateils pl-2 d-flex ai-center jc-left bg-white">
				<image src="../../static/home-img/card-img-text1.png" mode=""></image>
				<view class="d-flex flex-column w-100" style="height: 3rem; background-color: #ddd;">
					<p class="text-ellipse fs-md ml-2 mt-1" style="width: 10rem;">李白Q版手办</p>
					<text class="text-jg-color fs-md ml-2 font-b">￥138</text>
				</view>
			</view>
		</view>
		<view class="mt-2 bottom-dateils-user d-flex ai-center jc-center pr-2 pl-2">
			<image src="../../static/home-img/card-img-text1.png" mode=""></image>
			<view class="fs-md flex-1 ml-2">
				<view>匿名用户</view>
				<text class="fs-xs">2020/7/13</text>
			</view>
			<i class="iconfont icon-aixin"></i>
			<text class="ml-1">1</text>
		</view>
		<view class="pl-2 pr-2 fs-md text-font-hui">钱花的值！超级棒</view>
		<!-- 放评论区域 -->
		<view class="pinglun p-2 bg-white mt-2">
			<h4>全部评论</h4>
			<view style="background-color: #f1f1f1;height: 10rem;" class="mt-2 p-2">
				<view class="flex-wrap fs-md" style="overflow: auto;height: 9rem;">
					<!-- 循环这个元素 -->
					<view class="w-100 h-100 d-flex ai-center jc-center" v-show="arr.length==0">
						目前没有评论，请开始你的表扬~
					</view>
					<view class="d-flex ai-center mb-2" v-for="(item) in arr">
						<image src="../../static/home-img/card-img-text1.png" mode=""></image>
						<view class="ml-2 mr-1">
							<p>匿名用户</p>
							<text class="fs-sm">2020/7/13</text>
						</view>
						<view class="bg-white w-100 pl-2 pr-2 text-e" style="height: 2.5rem;">{{item}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 发送评论 -->
		<view class="pl-2 pr-2 bg-white mt-3 d-flex ai-center" style="height: 3rem;">
			<input v-model="pinglun" class="p-2" style="border:1px solid #ddd; height: 2rem; width: 80%;" type="text" value="" placeholder="说点什么吧~"/>
			<text @click="texts" style="background-color: #ddd; width: 3.5rem;height: 2rem;text-align: center;line-height: 2rem;" class="ml-2">发送</text>
		</view>
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
				pinglun:"",
				arr:[]
			}
		},
		onLoad() {
	
		},
		methods: {
			texts(){
				if(this.pinglun){
					this.arr.push(this.pinglun);
				}else{
					console.log("内容不能为空")
				}
			}
		},
		watch:{
			
		}
	}
</script>

<style lang="scss">
	.find-dateils-container{
		.imgs{
			image{
				height: 18rem;
			}
		}
		.bottom-dateils{
			image{
				width: 3rem;
				height: 3rem;
			}
		}
		.bottom-dateils-user{
			image{
				width: 2rem;
				height: 2rem;
			}
		}
		.pinglun{
			image{
				width: 2.5rem;
				height: 2rem;
			}
		}
	}
</style>

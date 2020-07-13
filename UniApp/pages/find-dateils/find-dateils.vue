<template>
	<view class="find-dateils-container">
		<view class="d-flex ai-center jc-left">
			<p class="m-2 fs-md" style="margin-right: 6.5rem;">返回</p>
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
		<view class="pinglun p-2 bg-white mt-2">
			<h4>全部评论</h4>
			<!-- 放评论区域 -->
			<view style="background-color: #ddd;height: 10rem;" class="p-2">
				<text>111111111111111111111111111111111111111111111111111111111111</text>
			</view>
		</view>
	</view>
</template>

<script>
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
			
		}
	}
</style>

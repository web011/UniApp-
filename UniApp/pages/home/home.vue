<template>
	<view class="home">
		<!-- 搜索框 -->
		<view class="search">
			<router-link to="/pages/search/search" tag="div" class="search-top-a">
				<image src="../../static/home-img/search.png"></image>
				<input type="text" value="" class="search-top" placeholder="试试输入你想要的宝贝名称吧~"/>
			</router-link>
		</view>
		<!-- 轮播图 -->
		<view class="swiper-container">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="200" circular="true">
				<swiper-item>
					<view class="swiper-item d-flex jc-center ai-center p-r">
						<view class="p-a-left" style="background: url(../../static/home-img/swiper-img5.jpg);"></view>
						<image :src="swipers[0].url" mode=""></image>
						<view class="p-a-right" style="background: url(../../static/home-img/swiper-img5.jpg);"></view>	
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item d-flex jc-center ai-center p-r">
						<view class="p-a-left" style="background: url(../../static/home-img/swiper-img1.jpg);"></view>
						<image :src="swipers[1].url" mode=""></image>
						<view class="p-a-right" style="background: url(../../static/home-img/swiper-img3.jpg);"></view>	
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item d-flex jc-center ai-center p-r">
						<!-- 第五张图片来替换第二张图片 -->
						<view class="p-a-left" style="background: url(../../static/home-img/swiper-img5.jpg);"></view>
						<image :src="swipers[2].url" mode=""></image>
						<view class="p-a-right" style="background: url(../../static/home-img/swiper-img4.png);"></view>	
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item d-flex jc-center ai-center p-r">
						<view class="p-a-left" style="background: url(../../static/home-img/swiper-img3.jpg);"></view>
						<image :src="swipers[3].url" mode=""></image>
						<view class="p-a-right" style="background: url(../../static/home-img/swiper-img5.jpg);"></view>	
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item d-flex jc-center ai-center p-r">
						<view class="p-a-left" style="background: url(../../static/home-img/swiper-img4.png);"></view>
						<image :src="swipers[4].url" mode=""></image>
						<view class="p-a-right" style="background: url(../../static/home-img/swiper-img1.jpg);"></view>	
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 商品详情 -->
		<view class="p-3 d-flex ai-center jc-between">
			<router-link to="/pages/cate/cate?id=0&name=uname" tag="div" class="p-details text-center" @click="j(0)" style="position: relative;">
				<image src="../../static/home-img/top-details1-1.png" mode="" style="width: 1.5rem;height: 0.7rem;position: absolute;p: -0.1rem;left: 1.9rem; z-index: 999;"></image>
				<image src="../../static/home-img/top-details1.png" mode=""></image>
				<view class="fs-xs">鲜货上架</view>
			</router-link>
			<view class="p-details text-center" @click="j(2)">
				<image src="../../static/home-img/top-details2.png" mode=""></image>
				<view class="fs-xs">服饰专区</view>
			</view>
			<view class="p-details text-center" @click="j(3)">
				<image src="../../static/home-img/top-details3.png" mode=""></image>
				<view class="fs-xs">毛绒玩偶</view>
			</view>
			<view class="p-details text-center" @click="j(4)">
				<image src="../../static/home-img/top-details4.png" mode=""></image>
				<view class="fs-xs">生活用品</view>
			</view>
		</view>
		<!-- 商品图片 -->
		<view class="details-imgs p-3 d-flex ai-center jc-between">
			<image src="../../static/home-img/details-img1.png" mode=""></image>
			<image src="../../static/home-img/details-img2.png" mode=""></image>
		</view>
		<image src="../../static/home-img/details-img3.gif" mode="" class="gif-img mb-3"></image>
		<!-- card卡片图片详情 -->
		<view class="d-flex jc-center ai-center mb-3" style="position: relative;">
			<image src="../../static/home-img/card-img.png" mode="">
				<view class="card-img-text d-flex ai-center jc-center mt-3">
					<view>
						<image src="../../static/home-img/card-img-text1.png" mode=""></image>
						<p class="text-ellipse fs-xs ml-2" style="width: 3.9rem;">李白Q版手办</p>
						<p class="text-jg-color fs-md ml-1 font-b">￥258</p>
					</view>
					<view>
						<image src="../../static/home-img/card-img-text2.png" mode=""></image>
						<p class="text-ellipse fs-xs ml-2" style="width: 3.9rem;">李白印花T恤</p>
						<p class="text-jg-color fs-md ml-1 font-b">￥138</p>
					</view>
					<view>
						<image src="../../static/home-img/card-img-text3.png" mode=""></image>
						<p class="text-ellipse fs-xs ml-2" style="width: 3.9rem;">王者荣耀不二生活 青莲剑仙-李白拼图</p>
						<p class="text-jg-color fs-md ml-1 font-b">￥39</p>
					</view>
				</view>
			</image>
		</view>
		<view class="d-flex jc-center ai-center" style="position: relative;">
			<image src="../../static/home-img/card-img2.png" mode="">
				<view class="card-img-text d-flex ai-center jc-center mt-3">
					<view class="">
						<image src="../../static/home-img/card-img2-text1.png" mode=""></image>
						<p class="text-ellipse fs-xs ml-2" style="width: 3.9rem;">公孙离绕线器</p>
						<p class="text-jg-color fs-md ml-1 font-b">￥19.9</p>
					</view>
					<view class="">
						<image src="../../static/home-img/card-img2-text2.png" mode=""></image>
						<p class="text-ellipse fs-xs ml-2" style="width: 3.9rem;">公孙离Q版手办</p>
						<p class="text-jg-color fs-md ml-1 font-b">￥168</p>
					</view>
					<view class="">
						<image src="../../static/home-img/card-img2-text3.png" mode=""></image>
						<p class="text-ellipse fs-xs ml-2" style="width: 3.9rem;">公孙离双层手机壳</p>
						<p class="text-jg-color fs-md ml-1 font-b">￥68</p>
					</view>
				</view>
			</image>
		</view>
		<!-- 王者大牌商品详情 -->
		<view class="p-3">
			<h4>王者大牌</h4>
			<view class="wzdp mt-2 d-flex flex-wrap">
				<view>
					<image src="../../static/home-img/wzdp1.png" mode=""></image>
				</view>
				<view>
					<image src="../../static/home-img/wzdp2.png" mode=""></image>
				</view>
				<view>
					<image src="../../static/home-img/wzdp3.png" mode=""></image>
				</view>
				<view>
					<image src="../../static/home-img/wzdp4.png" mode=""></image>
				</view>
				<view>
					<image src="../../static/home-img/wzdp5.png" mode=""></image>
				</view>
				<view>
					<image src="../../static/home-img/wzdp6.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 热销好物 -->
		<dateils :shows="shows" :dateils="dateils"></dateils>
		<!-- 右下角的活动推荐 -->
		<router-link to="/" tag="div" style="position: fixed;bottom :5rem;right: 0rem;">
			<image src="../../static/home-img/icon-tj.png" mode="" style="width: 3.5rem;height: 3.5rem;"></image>
		</router-link>
	</view>
</template>

<script>
	import dateils from '../../component/dateils-list/dateils-list.vue';
	export default {
		components:{
			dateils
		},
		data() {
			return {
				shows:"热销好物",
				// 获取轮播图
				swipers:[{},{},{},{},{}],
				// 获取热销好物
				dateils:{},
				
			}
		},
		onLoad() {

		},
		methods: {
			async fetchswiper(){
				const res = await this.$http.get('swiper');
				this.swipers = res.data;
				const res1 = await this.$http.get('homedateils');
				this.dateils = res1.data;
			},
			j(n){
				console.log(n)
				uni.navigateTo({
					url:`../cate/cate`
				})
			}
		},
		created() {
			this.fetchswiper();
		}
	}
</script>

<style lang="scss">
@import '../../static/scss/_variables';
	.home{
		.swiper{
			background-color: #1F3695;
			width: 100%;
			height: 8rem;
		}
		.p-details{
			image{
				width: 2.7rem;
				height: 2.7rem;
				
			}
		}
		.details-imgs{
			padding-p: 0rem !important;
			image{
				width: 49%;
				height: 9rem;
				border-radius: 0.3rem;
			}
		}
		.gif-img{
			width: 100%;
			height: 4rem;
		}
		.card-img-text{
			position: absolute;
			top: 4rem;
			left: 1.3rem;
			image{
				width: 4.5rem;
				height: 4.5rem;
				margin-right: 0.8rem;
				// margin-botm: 0.4rem;
			}
		}
		.wzdp{
			image{
				width: 5.8rem;
				height: 5.8rem;
				margin-right: 0.2rem;
			}
		}
		.rexiao{
			image{
				width: 8.7rem;
				height: 8.7rem;
			}
		}
		swiper{
			height: 9rem;
			.swiper-item{
				image{
					width: 90%;
					height: 8rem;
					margin-top: 0.5rem;
					border-radius: 0.3rem;
				}
				.p-a-left{
					position: absolute;
					top: 0rpx;
					left: 0rpx;
					width: 0.5rem;
					height: 8rem;
					margin-top: 0.5rem;
					border-top-right-radius: 0.3rem;
					border-bottom-right-radius: 0.3rem;
				}
				.p-a-right{
					position: absolute;
					top: 0rpx;
					right: 0rpx;
					width: 0.5rem;
					height: 8rem;
					margin-top: 0.5rem;
					border-bottom-left-radius: 0.3rem;
					border-top-left-radius: 0.3rem;
				}
			}
		}
	}
</style>

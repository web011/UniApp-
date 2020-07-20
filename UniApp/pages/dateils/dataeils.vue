<template>
	<view class="dateils-container" id="s0">
		<!-- 头部导航栏 -->
		<view class="dateils-top d-flex ai-center jc-center">
			<router-link to="/" tag="div">
				<i class="iconfont icon-zuojiantou-01 ml-2"></i>
			</router-link>
			<ul class="flex-1">
				<li v-for="(item,i) in arr" :key="i"><a :href="`#s${i}`" :class="{'text-jg-color':active==i}" @click="active = i; pl = true;">{{item}}</a></li>
				<li @click="active = 3;pl = false;" :class="{'text-jg-color':active==3}">评价</li>
			</ul>
			<router-link to="/pages/cart/cart" tag="div">
				<i class="iconfont icon-shouye mr-3"></i>
			</router-link>
		</view>
		<view v-show="pl==true">
			<!-- 商品轮播 -->
			<swiper :indicator-dots="true" :autoplay="true" circular="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,i) of dateils.commodityswiper || dateils.dateilsswiper" :key="i">
					<view class="swiper-item w-100 h-100">
						<image :src="item" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- 商品名称和价格 -->
			<view class="mb-2 bg-white d-flex flex-column">
				<p class="text-ellipse fs-xss ml-3 mt-3 w-100">{{dateils.title}}</p>
				<text class="text-jg-color fs-xss ml-3 mt-2 pb-2 font-b">{{dateils.price}}</text>
			</view>
			<!-- 商品款式 -->
			<!-- 点击选择款式就显示加入购物车或者立即购买的样式 -->
			<view class="ks bg-white d-flex jc-between p-2 pl-3 pr-3" @click="show = true;qd = false;">
				<text class="fs-sm">请选择:款式</text>
				<text class="fs-lg">&gt;</text>
			</view>
			<view class="w-100 bg-white p-2 pl-3 pr-3">
				<i class="iconfont icon-gou mr-1" style="font-size:12px;">7天无忧退换货</i>
				<i class="iconfont icon-gou mr-1" style="font-size:12px;">100%官方正品</i>
				<i class="iconfont icon-gou mr-1" style="font-size:12px;">满99元包邮</i>
			</view>
			<!-- 用户评价 -->
			<view class="userpj p-1 pl-3 pr-3 mt-2 bg-white">
				<view class="d-flex w-100 jc-left ai-center" style="height: 2rem;">
					<h6 class="mr-2">用户评价</h6>
					<text>|</text>
					<text class="ml-2 fs-sm">玩家综合评分：</text>
					<text class="fs-sm text-jg-color font-b mr-1">5.0</text>
					<image src="../../static/home-img/userpf.png" mode=""></image>
				</view>
				<view class="d-flex mt-2">
					<image src="../../static/tabbar/home2.png" mode="" style="width: 2rem;height: 2rem;" class="mr-2 mt-2"></image>
					<view>
						<p class="fs-sm">王者荣耀召唤师</p>
						<view class="d-flex jc-center ai-center">
							<text class="fs-xs">商品评分：</text>
							<text class="fs-sm text-jg-color font-b mr-1">5.0</text>
							<image src="../../static/home-img/userpf.png" mode=""></image>
						</view>
						<p class="fs-sm">还不错</p>
						<image src="../../static/home-img/userimg.jpg" mode="" style="width: 4rem;height: 3.5rem;"></image>
					</view>
				</view>
				<view class="w-100 d-flex jc-center mt-4">
					<text class="ckqbpl fs-sm text-jg-color" @click="active = 3;pl = false;">查看全部评论</text>
				</view>
			</view>
			<!-- 商品详情 -->
			<view id="s1" class="mb-4">
				<image v-for="item of dateils.dateils || dateils.dateilsicon" :src="item" mode="" style="width: 100%;height: 21.5rem;"></image>
			</view>
			<!-- 点击选择款式就显示，不点击就隐藏 -->
			<view v-show="show">
				<view class="topshows" @click="show = false"></view>
				<view class="showks bg-white p-3">
					<!-- 商品图片和标题和价格 -->
					<view class="d-flex">
						<image src="../../static/home-img/card-img-text1.png" mode=""></image>
						<view class="flex-1">
							<p class="text-jg-color fs-md ml-1 font-b">￥258.00</p>
							<text class="text-ellipse fs-md ml-2 w-100">千年之狐李白Q版手办</text>
						</view>
						<text @click="show = false">x</text>
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
					<!-- 点击选择款式显示这个 -->
					<view class="w-100 carts">
						<text class="text-white bg-jg-cs fs-lg">加入购物车</text>
						<text class="text-white bg-jg-color fs-lg">立即购买</text>
					</view>
					<view class="w-100 carts">
						<!-- 点击立刻购买和加入购物车显示这个 -->
						<text class="text-white bg-jg-color fs-lg" style="width: 100%;" v-show="qd">确定</text>
					</view>
				</view>
			</view>
			<!-- 添加购物车和立即购买 -->
			<view class="w-100 cart-bottom bg-white d-flex jc-center ai-center pt-1" v-show="show==false">
				<router-link to="/" style="width: 15%; height: 100%;" class="d-flex flex-column ai-center jc-center">
					<i class="iconfont icon-1"></i>
					<text class="fs-xs">首页</text>
				</router-link>
				<view style="width: 15%; height: 100%;" class="d-flex flex-column ai-center jc-center">
					<i class="iconfont icon-kefu"></i>
					<text class="fs-xs">客服</text>
				</view>
				<!-- 收藏用三目运算符来判断是否收藏，当然如果发送请求就需要写一个函数名了 -->
				<view  @click="collection == false ? collection = true : collection = false" style="width: 15%; height: 100%;" class="d-flex flex-column ai-center jc-center">
					<!-- 未收藏 -->
					<i v-if="collection" class="iconfont icon-shoucang1 text-jg-color"></i>
					<!-- 已收藏 -->
					<i v-else class="iconfont icon-shoucang text-jg-color"></i>
					<text class="fs-xs">收藏</text>
				</view>
				<view class="cart-bottoms">
					<!-- 点击下面立即购买和加入购物车就显示确定样式 -->
					<text class="text-white bg-jg-cs fs-lg" style="border-top-left-radius: 50px;border-bottom-left-radius: 50px;" @click="qd = true;show = true;">加入购物车</text>
					<text class="text-white bg-jg-color fs-lg mr-1" style="border-top-right-radius: 50px;border-bottom-right-radius: 50px;" @click="qd = true;show = true;">立即购买</text>
				</view>
			</view>
		</view>
		<view v-show="pl==false" class="mt-5">
			<view class="userpj mt-2 bg-white">
				<view class="d-flex pl-3 pr-3 w-100 jc-left ai-center" style="height: 2rem;background-color: #f2f2f2;">
					<h6 class="mr-2">用户评价</h6>
					<text>|</text>
					<text class="ml-2 fs-sm">玩家综合评分：</text>
					<text class="fs-sm text-jg-color font-b mr-1">5.0</text>
					<image src="../../static/home-img/userpf.png" mode=""></image>
				</view>
				<!-- 从服务器获取数据来循环这个view来生成多个评论 -->
				<view class="d-flex mt-2 pr-3 pl-3" v-for="item in 4" :key="item">
					<image src="../../static/tabbar/home2.png" mode="" style="width: 2rem;height: 2rem;" class="mr-2 mt-2"></image>
					<view>
						<p class="fs-sm">王者荣耀召唤师</p>
						<view class="d-flex jc-center ai-center">
							<text class="fs-xs">商品评分：</text>
							<text class="fs-sm text-jg-color font-b mr-1">5.0</text>
							<image src="../../static/home-img/userpf.png" mode=""></image>
						</view>
						<p class="fs-sm">还不错</p>
						<image src="../../static/home-img/userimg.jpg" mode="" style="width: 4rem;height: 3.5rem;"></image>
					</view>
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
				arr:["商品","详情"],
				active:0,
				count:0,
				show:false,
				// 未收藏false，收藏true
				collection:false,
				pl:true,
				qd:true,
				_id:'',
				dateils:{}
			}
		},
		onLoad(option) {
			console.log(option)
			this._id = option.id;
		},
		methods: {
			scount(n){
				this.count += n;
			},
			// 收藏
			collections(){},
			// 通过传过来的id查找商品
			async fetch(){
				const res = await this.$http.get(`dateils/${this._id}`);
				this.dateils = res.data;
				console.log(this.dateils)
			}
		},
		watch:{
			count(){
				if(this.count < 0){
					this.count = 0;
				}
			}
		},
		created() {
			this.fetch();
		}
	}
</script>

<style lang="scss">
	.dateils-container{
		// background-color: #fff;
		// 头部导航栏
		.dateils-top{
			z-index: 999;
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
		// 用户评分
		.userpj{
			image{
				width: 2.5rem;
				height: 0.5rem;
			}
			.ckqbpl{
				width: 5rem;
				height: 1.5rem;
				border-radius: 50px;
				display: inline-block;
				border: 1px solid #f04831;
				text-align: center;
				line-height: 1.5rem;
			}
		}
		// 点击显示，不点隐藏
		.topshows{
			position: fixed;
			top: 0;
			width: 100%;
			height: 50rem;
			background:rgba(0,0,0,0.5);
		}
		.showks{
			position: fixed;
			left: 0rem;
			bottom: 0rem;
			width: 100%;
			height: 20rem;
			margin-bottom: -0rem;	
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
				z-index: 999;
				text{
					width: 50%;
					display: inline-block;
					text-align: center;
					height: 2.5rem;
					line-height: 2.5rem;
				}
			}
		}
		// 下面的固定样式
		.cart-bottom{
			position: fixed;
			left: 0rem;
			bottom: 0rem;
			height: 3rem;
			.cart-bottoms{
				text{
					width: 95px;
					height: 2.5rem;
					display: inline-block;
					text-align: center;
					line-height: 2.5rem;
				}
			}
		}
	}
</style>

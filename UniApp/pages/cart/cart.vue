<template>
	<view class="cart-container">
		<view class="cart-top p-2 d-flex ai-center w-100 bg-white">
			<router-link to="/" tag="div" style="width: 44%;">
				<i class="iconfont icon-1" style="font-size: 1.5rem;"></i>
			</router-link>
			<text class="fs-lg">购物车</text>
		</view>
		<!-- 循环这个标签生成多个商品 -->
		<view class="cart-text w-100 bg-white d-flex jc-left ai-center mb-2" v-for="(item,i) of userdateils.cart" :key="i">
			<view @click="boxitem(item)">
				<!-- 没选中 -->
				<i v-if="item.box==false" class="iconfont icon-yuanquanweixuanfuben" style="margin-left:25rpx;"></i>
				<!-- 选中 -->
				<i v-else class="icons iconfont icon-gou text-jg-color ml-2"></i>
			</view>
			<view class="cart-text-center d-flex">
				<image :src="item.imgurl" mode="" class="ml-2 border-r"></image>
				<view class="ml-2">
					<p class="fs-sm text-e" style="width: 8rem;">{{item.title}}</p>
					<p class="text-jg-color fs-lg font-b">￥{{item.price}}</p>
					<text class="text-font-hui fs-sm">现货</text>
				</view>
				<view class="ml-2 d-flex flex-column ai-center">
					<i class="iconfont icon-laji" style="font-size: 1rem;" @click="cartdelete(item._id)"></i>
					<view class="mt-4 mr-1">
						<text class="text-font-hui fs-xss mt-1 couns" @click="item.count >= 1 ? scount(item,-1,item._id) : ''">-</text>
						<text class="count fs-lg">{{item.count}}</text>
						<text class="text-font-hui fs-xss mt-1 couns" @click="item.count >= 1 ? scount(item,1,item._id) : ''">+</text>
					</view>
				</view>
			</view>
		</view>
		<view class="w-100 d-flex jc-center ai-center fs-xl text-font-hui" style="height: 5rem;" v-show="i == 0">
			目前没有商品加入购物车
		</view>
		<!-- 下面的结算 -->
		<view class="cart-bottoms d-flex jc-left ai-center bg-white">
			<view style="width: 5rem;text-align: center;border-right:1px solid #ddd" @click="quanxuans">
				<i v-if="quanxuan==false" class="iconfont icon-yuanquanweixuanfuben"></i>
				<i v-else class="icons iconfont icon-gou text-jg-color"></i>
				<p class="fs-xs">全选</p>
			</view>
			<view style="width: 5rem;text-align: center;border-right:1px solid #ddd">
				<p class="fs-xs">共计</p>
				<text class="fs-sm">{{i}}件</text>
			</view>
			<view style="width: 5rem;text-align: center;">
				<p class="fs-xs">合计</p>
				<text class="text-jg-color fs-md ml-1 font-b">￥{{cartnumber.toFixed(2)}}</text>
			</view>
			<view style="width: 5rem;text-align: center;height: 100%;line-height: 2.5rem;" class="bg-jg-color text-white fs-md">
				<text>结算</text>
			</view>
		</view>
		<dateils :shows="shows" :dateils="dateils"></dateils>
		<view style="width: 100%;height: 1.7rem;"></view>
	</view>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import dateils from '../../component/dateils-list/dateils-list.vue';
	export default {
		// 接收父组件的值
		props:{
			
		},
		// 引入子组件
		components:{
			dateils
		},
		computed:{
			cartnumber(){
				var i = 0;
				var count = 0;
				for(var s of this.userdateils.cart){
					if(s.box){
						i+=Number(s.price);
						count+=s.count;
					}
				}
				return count*i
			}
		},
		data() {
			return {
				shows:"为你推荐",
				box:true,
				quanxuan:true,
				dateils:{},
				userdateils:{
					cart:[]
				},
				// 计算总共有多少件商品 
				i:0
			}
		},
		onLoad() {
	
		},
		methods: {
			// 商品选中
			async boxitem(item){
				const _id = localStorage._id;
				// 购物车长度
				var i = 0;
				// box的数量
				var box = 0;
				if(item.box){
					item.box = false;
					const res1 = await this.$http.put('login/'+_id,this.userdateils);
				}else{
					item.box = true;
					const res1 = await this.$http.put('login/'+_id,this.userdateils);
				}
				for(var s of this.userdateils.cart){
					i++;
					box+=s.box;
				}
				if(i === box) {
					this.quanxuan = true;
				}else{
					this.quanxuan =false;
				}
			},
			// 全选按钮
			quanxuans(){
				if(this.quanxuan === true){
					this.quanxuan = false;
					for(var s of this.userdateils.cart){
						s.box = false;
					}
				}else{
					this.quanxuan = true;
					for(var s of this.userdateils.cart){
						s.box = true;
					}
				}
			},
			async scount(item,n,id){
				const _id = localStorage._id;
				item.count += n;
				const res = await this.$http.delete('cart/'+_id+'/'+id);
				this.userdateils = res.data;
				this.dateils.count = item.count;
				this.userdateils.cart.unshift(item);
				if(item.count == 0){
					MessageBox.confirm('是否要删除该商品吗？').then(async action => {
					  const res = await this.$http.delete('cart/'+_id+'/'+id);
					  this.gatuser();
					  Toast('删除成功');
					});
					item.count = 1;
				}
				const res1 = await this.$http.put('login/'+_id,this.userdateils);
			},
			async cartdateils(){
				const res1 = await this.$http.get('homedateils');
				this.dateils = res1.data;
			},
			async gatuser(){
				// 获取用户信息
				const _id = localStorage._id;
				const res = await this.$http.get('/login/'+_id);
				this.userdateils = res.data;
				this.i = this.userdateils.cart.length
			},
			async cartdelete(id){
				const _id = localStorage._id;
				MessageBox.confirm('是否要删除该商品吗？').then(async action => {
				  const res = await this.$http.delete('cart/'+_id+'/'+id);
				  this.gatuser();
				  Toast('删除成功');
				});
			}
		},
		watch:{
			
		},
		created(){
			this.cartdateils();
			this.gatuser();
			if(!sessionStorage.token){
				this.$router.push('/pages/login/login')
			}
		},
		// 页面一显示就执行一段代码
		activated() {
			this.gatuser();
			if(!sessionStorage.token){
				this.$router.push('/pages/login/login')
			}
		},
	}
</script>

<style lang="scss">
	.cart-container{
		// 头部
		.cart-top{
			height: 3rem;
			border-bottom: 1px solid #ddd;
		}
		// 商品详情
		.cart-text{
			height: 6rem;
			.iconfont{
				font-size: 25px;
			}
			.icons{
				font-size: 28px;
			}
			.cart-text-center{
				image{
					width: 4.5rem;
					height: 5rem;
				}
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
				width: 1.5rem;
				height: 1rem;
				text-align: center;
				line-height: 1rem;
				display: inline-block;
			}
		}
		// 下面的结算
		.cart-bottoms{
			z-index: 999;
			position: fixed;
			left: 0rem;
			bottom: 2.7rem;
			width: 100%;
			height: 2.5rem;
		}
	}
</style>

<template>
	<view class="cart-container">
		<view class="cart-top p-2 d-flex ai-center w-100 bg-white">
			<router-link to="/" tag="div" style="width: 44%;">
				<i class="iconfont icon-zuojiantou-01" style="font-size: 1rem;"></i>
			</router-link>
			<text class="fs-lg">我的收藏</text>
		</view>
		<!-- 循环这个标签生成多个商品 -->
		<view class="cart-text w-100 bg-white d-flex jc-left ai-center mb-2" v-for="(item,i) of userdateils.collections" :key="i">
			<view class="cart-text-center d-flex jc-center ai-center">
				<image :src="item.imgurl" mode="" class="ml-2 border-r"></image>
				<view class="ml-2">
					<p class="fs-sm text-e" style="width: 8rem;">{{item.title}}</p>
					<p class="text-jg-color fs-lg font-b">{{item.price}}</p>
					<text class="text-font-hui fs-sm">有货</text>
					<p class="fs-xs">收藏时间：{{item.data}}</p>
				</view>
				<view class="ml-2 d-flex flex-column ai-center">
					<view @click="ligegoumai(item._id)"><p class="text-jg-color fs-md gmai">立刻购买</p></view>
					<text @click="deletes(item._id)" class="text-font-hui fs-md mt-2">删除</text>
				</view>
			</view>
		</view>
		<view class="w-100 d-flex jc-center ai-center fs-xl" style="height: 5rem;" v-show="userdateils.collections==0">
			暂时没有收藏商品
		</view>
		<dateils :shows="shows" :dateils="dateils"></dateils>
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
		data() {
			return {
				shows:"猜你喜欢",
				userdateils:{},
				dateils:{}
			}
		},
		onLoad() {
	
		},
		methods: {
			ligegoumai(id){
				uni.navigateTo({
					url:`../dateils/dataeils?id=${id}&name=uname`
				})
			},
			async gatuser(){
				// 获取用户信息
				const _id = localStorage._id;
				const res = await this.$http.get('/login/'+_id);
				this.userdateils = res.data;
				// 获取猜你喜欢商品
				const res1 = await this.$http.get('homedateils');
				this.dateils = res1.data;
			},
			async deletes(id){
				MessageBox.confirm('是否要删除该收藏吗？').then(async action => {
				  const res = await this.$http.delete('login/'+this.userdateils._id+'/'+id);
				  this.gatuser();
				  Toast('删除成功');
				});
			}
		},
		watch:{
			
		},
		created() {
			this.gatuser();
		},
		// 页面一显示就执行一段代码
		activated() {
			this.gatuser();
		},
	}
</script>

<style lang="scss">
	.cart-container{
		// 头部
		.cart-top{
			height: 2rem;
			border-bottom: 1px solid #ddd;
		}
		// 商品详情
		.cart-text{
			height: 6rem;
			.cart-text-center{
				image{
					width: 4.5rem;
					height: 5rem;
				}
			}
			.gmai{
				width: 4.5rem;
				height: 1.5rem;
				border:1px solid #f04831;
				border-radius: 50px;
				text-align: center;
				line-height: 1.5rem;
			}
		}
	}
</style>

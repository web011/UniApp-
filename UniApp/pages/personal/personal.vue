<template>
	<view class="personal-container">
		<view class="cart-top p-2 d-flex ai-center w-100 bg-white">
			<router-link to="/" tag="div" style="width: 44%;">
				<i class="iconfont icon-zuojiantou-01" style="font-size: 1.5rem;"></i>
			</router-link>
			<text class="fs-lg">个人资料</text>
		</view>
		<view class="bg-white" style="border-top: 1px solid #efefef;">
			<view class="d-flex jc-between ai-center p-2 pr-3 pl-3">
				<text class="fs-md">头像</text>
				<image :src="userdateils.userimg" mode="" style="width: 3rem;height: 3rem;" class="border-r"></image>
			</view>
		</view>
		<view class="bg-white" style="border-top: 1px solid #efefef;">
			<view class="d-flex jc-between ai-center p-3 pr-3 pl-3">
				<text class="fs-md">昵称</text>
				<text class="text-font-hui fs-lg">{{userdateils.username}}</text>
			</view>
		</view>
		<view class="bg-white" style="border-top: 1px solid #efefef;">
			<view class="d-flex jc-between ai-center p-3 pr-3 pl-3">
				<text class="fs-md">性别</text>
				<text class="text-font-hui fs-lg">{{userdateils.sex}}</text>
			</view>
		</view>
		<view class="bg-white" style="border-top: 1px solid #efefef;">
			<view class="d-flex jc-between ai-center p-3 pr-3 pl-3">
				<text class="fs-md">生日</text>
				<text class="text-font-hui fs-lg">{{userdateils.born}}</text>
			</view>
		</view>
		<view class="bg-white" style="border-top: 1px solid #efefef;">
			<view class="d-flex jc-between ai-center p-3 pr-3 pl-3">
				<text class="fs-md">所在地</text>
				<text class="text-font-hui fs-lg">{{userdateils.address}}<i class="iconfont icon-iconfontjiantou3"></i></text>
			</view>
		</view>
		<view class="bg-white" style="border-top: 1px solid #efefef;border-bottom: 1px solid #efefef;">
			<view class="text-right p-2 pr-3 pl-3">
				<text class="fs-md text-jg-color" @click="retreat">退出当前用户</text>
			</view>
		</view>
		<view class="baocun">
			<text>保存</text>
		</view>
		<!-- 选择所在地 -->
		<view>
			
		</view>
	</view>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import { Toast } from 'mint-ui';
	export default {
		// 接收父组件的值
		props:{
			
		},
		// 引入子组件
		components:{

		},
		data() {
			return {
				userdateils:{}
			}
		},
		onLoad() {
	
		},
		methods: {
			async gatuser(){
				// 获取用户信息
				const _id = localStorage._id;
				const res = await this.$http.get('/login/'+_id);
				this.userdateils = res.data;
			},
			// 用户退出登陆
			retreat(){
				MessageBox.confirm('是否要退出：'+this.userdateils.username).then(action => {
				  sessionStorage.token = '';
				  localStorage._id = '';
				  this.$router.push('/');
				  Toast('退出成功');
				});
			}
		},
		created(){
			this.gatuser();
			if(!sessionStorage.token){
				this.$router.push('/pages/login/login')
			}
		}
	}
</script>

<style lang="scss">
	html{background-color: #fff;}
	body{background-color: #fff;}
	.personal-container{
		background-color: #fff;
		height: 600px;
		.users{
			image{
				height: 3rem;
				width: 3rem;
			}
		}
		.baocun{
			position: fixed;
			left: 0rem;
			bottom: 0rem;
			width: 100%;
			height: 3rem;
			text-align: center;
			line-height: 3rem;
			border-top:1px solid #ddd;
			text{
				display: inline-block;
				width: 4rem;
				height: 1.5rem;
				background-color: #f04831;
				color: #fff;
				border-radius: 50px;
				text-align: center;
				line-height: 1.5rem;
				font-size: 13px;
			}
		}
	}
</style>

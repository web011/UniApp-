<template>
	<view class="login-container p-3">
		<view class="w-100 d-flex jc-center ai-center">
			<image src="../../static/home-img/login.jpg" class="mt-5" style="width: 8rem;height: 8rem;background-color: #f0f0f0;" mode=""></image>
		</view>
		<view class="login">
			<input type="text" v-model="model.username" value=""style="background-color: #f2f2f2;height: 2.5rem;" placeholder="请输入QQ账号" class="pl-3 pr-3 pt-1 pb-1" />
			<input type="password" v-model="model.password" value=""style="background-color: #f2f2f2;height: 2.5rem;" placeholder="请输入账号密码" class="pl-3 pr-3 pt-1 pb-1" />
		</view>
		<button type="default" style="background-color: #146fdf;color: #fff;" class="mt-4" @click="login">登陆</button>
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
				model:{}
			}
		},
		onLoad() {
	
		},
		methods: {
			login(){
				console.log(this.model)
			}
		},
		created(){
			
		}
	}
</script>

<style lang="scss">
	.login-container{
		width: 100%;
		height: 33rem;
		background-color: #f9f9f9 !important;
	}
</style>

<template>
	<view class="cate">
		<view class="search" style="background-color: hsla(0,0%,89%,.8);">
			<router-link to="" tag="div" class="search-top-a">
				<image src="../../static/home-img/search.png"></image>
				<input type="text" value="" class="search-top" placeholder="试试输入你想要的宝贝名称吧~"/>
			</router-link>
		</view>
		<dateils></dateils>
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
				
			}
		},
		onLoad() {
	
		},
		methods: {
		
		}
	}
</script>

<style>
</style>

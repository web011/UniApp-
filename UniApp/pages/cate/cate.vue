<template>
	<view class="cate">
		<!-- search -->
		<view class="search" style="background-color: hsla(0,0%,89%,.8);">
			<router-link to="" tag="div" class="search-top-a">
				<image src="../../static/home-img/search.png"></image>
				<input type="text" value="" class="search-top" placeholder="试试输入你想要的宝贝名称吧~"/>
			</router-link>
		</view>
		<!-- nav -->
		<scroll-view class="scroll-view_H" scroll-x="true">
			<!-- 内容 -->
			<view id="demo1" class="scroll-view-item_H" v-for="(item,i) in fenlei" :key="i" :class="{'text-jg-color':fenleis==i}" @click="fenleis = i">{{item}}</view>
		</scroll-view>
		<!-- price-nav -->
		<ul type="none" class="d-flex fs-md ai-center jc-center p-0">
			<li v-for="(item,i) in searchtext" :key="i" :class="{'text-jg-color':active==i}" @click="active = i">{{item}}</li>
			<li :class="{'text-jg-color':active==4}" @click="jiage">
				<text v-if="active==4">价格从高到底</text>
				<text v-else-if="active==5" :class="{'text-jg-color':active==5}">价格从底到高</text>
				<text v-else-if="active!==4">价格</text>
			</li>
		</ul>
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
				searchtext:["默认","最热销","新上架"],
				active:0,
				old: {
					scrollTop: 0
				},
				fenlei:["全部","手办模玩","数码3C","服饰","毛绒玩偶","生活用品","智能机器人","金银饰品","数据线","食品","图书"],
				fenleis:0
			}
		},
		onLoad() {
	
		},
		methods: {
			jiage(){
				if(this.active!==4){
					this.active = 4;
				}else{
					this.active = 5;
				}
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTopd
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon:"none",
					title:"纵向滚动 scrollTop 值已被修改为 0"
				})
			},
		}
	}
</script>

<style lang="scss">
	.cate{
		ul{
			border: 1px solid #ddd;
			li{
				text-align: center;
				width: 4.5rem;
				height: 1.5rem;
				line-height: 1.5rem;
			}
		}
		.scroll-view_H {
			white-space: nowrap;
			width: 100%;
		}
		.scroll-view-item_H {
			display: inline-block;
			width: 4rem;
			height: 2.5rem;
			line-height: 2.5rem;
			text-align: center;
			font-size: 0.7em;
		}
	}
</style>

<template>
	<view class="">
		<view class="user_range">

			<titles :titles="title"></titles>

			<view class="search bgcf">
				<input type="text" value="" placeholder="搜索" v-model="value" @input="searchCustomer" />
			</view>
			<view class="user_range_addr bgcf mTop16">
				<view class="user_range_addr_title">
					合肥
				</view>
				<uni-list>
					<uni-list-item title="中国石化锦绣大道加油站" :note="'地址:'+note"></uni-list-item>
					<uni-list-item title="中国石化锦绣大道加油站" :note="'地址:'+note"></uni-list-item>
				</uni-list>
			</view>

			<view class="user_range_addr bgcf mTop16">
				<view class="user_range_addr_title">
					芜湖
				</view>
				<uni-list>
					<uni-list-item title="中国石化锦绣大道加油站" :note="'地址:'+note"></uni-list-item>
					<uni-list-item title="中国石化锦绣大道加油站" :note="'地址:'+note"></uni-list-item>
				</uni-list>
			</view>

		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		data() {
			return {
				title: '优惠券详情',
				note: "安徽省合肥市包河区锦绣大道",
				value: ''
			}
		},
		methods: {
			
		},
		components: {
			uniIcon,
			uniList,
			uniListItem
		}
	}
</script>

<style lang="scss">
	.user_range {
		width: 100;

		.search {
			width: 100%;
			background-color: #fff;
			padding: 8px;
			box-shadow: 0px 3px 6px 0 rgba(0, 0, 0, 0.16);

			input {
				height: 30px;
				background-color: #e5e5e5;
				border-radius: 15px;
				width: 100%;
				padding: 5px 16px;

			}
		}

		.user_range_addr {
			width: 100%;

			.user_range_addr_title {
				text-align: center;
				font-size: 18px;
				padding: 10px 0;
			}

			uni-list {
				.uni-list-cell__container {
					padding: 0;
				}

			}
		}
	}
</style>

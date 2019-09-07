<template>
	<view>

		<titles :titles="title"></titles>

		<view class="bgcf myVIP shadow0130 ">
			<view class="myVIP_list flex border-Bottom">
				<text>卡号</text>
				<input type="text" value="1231321321321" />
			</view>
			<view class="myVIP_list flex border-Bottom">
				<text>会员级别</text>
				<input type="text" value="普通会员" />
			</view>
			<view class="myVIP_list  flex " @tap="setPhoneNumber">
				<text>手机号</text>
				<input type="text" value="1231321321321" disabled="true" />
				<view class="myVIP_list_phone flex">
					<view>修改</view>
					<image src="../../static/img/right.png" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<uniList>
			<uniListItem title="修改密码" @tap="setPassword"></uniListItem>
		</uniList>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		data() {
			return {
				title: '我的会员卡'
			};
		},
		methods: {
			setPassword() {
				uni.navigateTo({
					url: './modifyPwd/modifyPwd'
				})
			},
			setPhoneNumber(){
				uni.navigateTo({
					url: './modifyPhoneNumber/modifyPhoneNumber'
				})
			},
		},
		components: {
			uniList,
			uniListItem,
			uniIcon
		}
	}
</script>

<style lang="scss">
	.myVIP {
		font-size: 16px;
		margin: 16px 0 12px;
		padding-left: 15px;
		color: $text-61color;

		.myVIP_list {
			padding: 12px 15px 12px 0;
			align-content: center;
			align-items: center;
			position: relative;

			text {
				width: 80px;
			}

			view {
				image {
					width: 8px;
					height: 12px;
				}
			}

			.myVIP_list_phone {
				position: absolute;
				width: 40px;
				top: 30%;
				right: 20px;

				view {
					font-size: 14px;
					color: #c7c7c7;
				}

				image {
					position: absolute;
					top: 25%;
					right: 0;
				}
			}
		}
	}
</style>

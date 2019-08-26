<template>
	<view class="">
		<view class="header flex">
			<view class="header_bar">

			</view>
			<view class="header_title">
				<view>安徽石油公众号</view>
			</view>
		</view>
		<view class="content">
			<view class="content_left">
				<text class="content_left_tit">中国石化安徽石油</text>
				<image src="../../static/img/vip.png" mode="aspectFit"></image>
				<text>NO.10293848712</text>
			</view>
			<view class="content_right">
				<image src="../../static/img/1.png" mode="aspectFit"></image>
				<text class="content_right_name">小胖</text>
			</view>
		</view>
		<view class="bgcf shadow0130">
			<uniList>
				<uniListItem title="自助加油" thumb="../../static/img/self-service.png"></uniListItem>
				<uniListItem title="自助加油记录" thumb="../../static/img/self-service-record.png"></uniListItem>
			</uniList>
		</view>
		<view class="bgcf mTB12 shadow0130">
			<uniList>
				<uniListItem title="我的卡券" thumb="../../static/img/My-card-ticket.png"></uniListItem>
			</uniList>
		</view>
		<view class="bgcf mTB12 shadow0130">
			<uniList>
				<uniListItem title="申请开票" thumb="../../static/img/Application-invoicing.png"></uniListItem>
				<uniListItem title="开票历史" thumb="../../static/img/Invoice-Record.png"></uniListItem>
				<uniListItem title="抬头管理" thumb="../../static/img/Head-up-Management.png"></uniListItem>
			</uniList>
		</view>
	</view>

</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		},
		components: {
			uniList,
			uniListItem
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 192px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		background:url(../../static/img/index_bg.png)no-repeat;
		background-size:100% 100%;
		margin-top: 8px;
		color:$uni-text-color-inverse;
		.content_left{
				width: 60%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align:center;
			image{
				width:75px;
				height: 35px;
				margin: 27px auto 25px;
			}
			.content_left_tit{
				font-size: 20px;
				font-weight: 600;
			}
		}
		.content_right{
			width: 40%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align:center;
			image{
				width:80px;
				height: 80px;
					margin: 0 auto;
			}
			.content_right_name{
				font-size: 16px;
			}
		}
	}

.header_bar{
	height: var(--status-bar-height);
	width: 100%;
	background: #fff;
}
	.header_title {
		background-color: #fff;
		text-align: center;

		view {
			font-size: 20px;
			font-weight: normal;
			color: #424242;
		}
	}
</style>

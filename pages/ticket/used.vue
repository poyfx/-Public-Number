<template>
	<view>
		<view class="tic">
			<view class="header flex">
				<view class="header_bar">
				</view>
				<view class="header_title flex">
					<view class="left" @tap="back">
						<uni-icon type="arrowleft" size="27"></uni-icon>
					</view>
					<view>我的卡券</view>
				</view>
			</view>
			<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" textFlex></wuc-tab>
			<view class="tic_ticket ">
				<view class="tic_ticket_nouse flex">
					<view class="tic_ticket_left">
						<view class="tic_ticket_left_money">
							<text>￥</text>100
						</view>
						<view class="tic_ticket_left_text">
							现金券
						</view>
					</view>
					<view class="tic_ticket_center">
						<view class="tic_ticket_center_text">
							中石化加油站
						</view>
						<view class="tic_ticket_center_date">
							有限期至：2016-12-12
						</view>
					</view>
					<view class="tic_ticket_right">
						<text>去使用</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import ticketNav from "@/components/ticket/ticket-nav.vue"
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	export default {
		data() {
			return {
				TabCur: 1,
				tabList: [{
						name: '未使用'
					}, {
						name: '已使用'
					},
					{
						name: '已过期'
					}
				],
			};
		},
		methods: {
			tabChange(e) {
				console.log(e)
				if (e == 0) {
					uni.navigateTo({
						url: '../../pages/ticket/ticket'
					})
				} else if (e == 2) {
					uni.navigateTo({
						url: '../../pages/ticket/expired'
					})
				}
			}
		},
		components: {
			uniIcon,
			ticketNav,
			WucTab
		},
	}
</script>

<style lang="scss">
	$border:#f9243d;
	$money:#ff5343;

	.tic {
		.tic_ticket {
			padding: 16px 16px 0;

			.tic_ticket_nouse {
				width: 100%;
				height: 100px;
				background: url(../../static/img/ticket.png) no-repeat;
				background-size: 100% 100%;
				align-content: center;
				align-items: center;
				text-align: center;

				.tic_ticket_left {
					width: 33%;
					height: 100%;
					padding-top: 13px;

					.tic_ticket_left_money {
						color: $money;
						font-size: 34px;
						font-weight: Medium;

						text {
							font-size: 16px;
						}
					}

					.tic_ticket_left_text {
						font-size: 16px;
						color: $text-9ecolor;
					}
				}

				.tic_ticket_center {
					width: 50%;
					height: 100%;
					padding-top: 13px;

					.tic_ticket_center_text {
						color: $text-61color;
						font-size: 20px;
						font-weight: 400;
						margin-bottom: 24px;
					}

					.tic_ticket_center_date {
						font-size: 12px;
						color: $text-9ecolor;
					}
				}

				.tic_ticket_right {
					width: 25%;

					text {
						width: 58px;
						height: 24px;


						font-size: 12px;

						border-radius: 12px;
						padding: 3px 11px;
						margin-right: 12px;

						background-color: #3AD080;
						color: #fff;

					}
				}
			}

		}
	}
</style>

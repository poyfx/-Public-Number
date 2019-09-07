<template>
	<view>
		<view class="detail">

			<titles :titles="title"></titles>

			<view class="detail_content flex bgcf">
				<view class="detail_img">
					<image src="../../static/img/logo.png" mode="aspectFit"></image>
				</view>
				<view class="detail_code">
					<view class="detail_code_caseTicket">100.00元现金券</view>
					<view class="detail_code_code"><image src="../../static/logo.png" mode="aspectFit"></image></view>
					<view class="detail_code_ABC">DeB6A5t4anrQ0Mq5TDkGxQK4d8luEqbSBYQ9RXS4</view>
					<button class="btn refresh_code">点击刷新二维码</button>
					<button class="btn user_range" @tap="lookRange">
						查看使用范围
					</button>
				</view>
				<view class="detali_foot">
					<view class="detali_foot_prompt">
						有效期至:<text>2019-12-05 00:00:00</text>
					</view>
					<view class="detali_foot_prompt">
						使用规则:
					</view>

					<view class="flex detali_foot_remind">
						1、<text>此权益仅限每日8:00~17:00至指定中石化站点使用，其他时间均不能核销使用。</text>
					</view>
					<view class="flex detali_foot_remind">
						2、<text>此权益一经购买不可退换、不兑现金、不找零、不可用于充值油卡。加油站不接受截屏核销，仅限客户本人使用。</text>
					</view>
					<view class="flex detali_foot_remind">
						3、<text>此权益一经购买不可退换、不兑现金、不找零、不可用于充值油卡。加油站不接受截屏核销，仅限客户本人使用。</text>
					</view>
				</view>

			</view>
		</view>


	</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		data() {
			return {
				title: '优惠券详情'
			};
		},
		methods: {
			lookRange() {
				uni.navigateTo({
					url: './used_range/used_range'
				})
			},
			
		},
		components: {
			uniIcon
		}
	}
</script>

<style lang="scss">
	.detail {
		width: 100%;
		height: 100%;

		.detail_content {
			flex-direction: column;
			justify-content: center;
			margin: 16px 8px 20px;

			.detail_img {
				margin: 0 auto;
				padding: 8px 0 7px;

				image {
					width: 200px;
					height: 74px;

				}
			}

			.detail_code {
				border-top: 1px dashed #DAC9C7;
				border-bottom: 1px dashed #DAC9C7;
				text-align: center;
				font-size: 12px;
				padding-bottom: 8px;

				.detail_code_caseTicket {
					font-size: 26px;
					color: #424242;
					font-weight: 500;
				}

				.detail_code_code {
					width: 160px;
					height: 160px;
					margin: 8px auto;
					image{
						width: 100%;
						height: 100%;
					}
				}

				.detail_code_ABC {

					color: #757575;
				}

				.refresh_code {
					margin: 8px auto;
					font-size: 12px;
					padding: 4px 0;
				}

				.user_range {
					border: 1px solid #FF5343;
					background-color: #fff;
					color: #FF5343;
					font-size: 12px;
					padding: 4px 0;
				}
			}

			.detali_foot {
				padding: 12px 8px 0;

				.detali_foot_remind,
				text {
					color: #757575;
					font-size: 14px;
				}

				.detali_foot_prompt {
					line-height: 28px;

					text {
						margin-left: 8px;
						color: #616161;
					}

				}

				.detali_foot_remind {
					margin: 8px 0;
				}
			}
		}
	}
</style>

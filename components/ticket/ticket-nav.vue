<template>
	<view class="">
		<view class="nav flex">
			<view class="nav_nouse " :class="index == 1?active:''" ref="nav_nouse" @tap="chooseNo(1)">未使用</view>
			<view class="nav_used" :class="index == 2?active:''" ref="nav_used" @tap="chooseUsed(2)">已使用</view>
			<view class="nav_expired" :class="index == 3?active:''" ref="nav_expired" @tap="chooseNoTime(3)">已过期</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: '2',
				active:'active'
			};
		},
		methods: {
			chooseNo(val) {
				this.index = val;
				uni.navigateTo({
					url: '../../pages/ticket/ticket'
				})
			},
			chooseUsed(val) {
				console.log(val)
				this.index = val;
				uni.navigateTo({
					url: '../../pages/ticket/used'
				})
			},
			chooseNoTime(val) {
				this.index = val;
				uni.navigateTo({
					url: '../../pages/ticket/expired'
				})
			},

			// choose(e) {
			// 	if (e == 1) {
			// 		console.log(this.$refs.nav_nouse)
			// 		this.$refs.nav_nouse.class = "active";
			// 		this.$refs.nav_used.class = "";
			// 		this.$refs.nav_expired.class = "";
			// 	} else if (e == 2) {
			// 		console.log(this.$refs.nav_used)
			// 		this.$refs.nav_nouse.class = "";
			// 		this.$refs.nav_used.class = "active";
			// 		this.$refs.nav_expired.class = "";
			// 	} else {
			// 		this.$refs.nav_nouse.class = "";
			// 		this.$refs.nav_used.class = "";
			// 		this.$refs.nav_expired.class = "active";
			// 	}
			// }
		}
	}
</script>

<style lang="scss">
	$border:#f9243d;

	.nav {
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
		background: #fff;
		width: 100%;
		view {
			padding: 13px 0 14px;
			color: $text-9ecolor;
			width: 100%;
			text-align: center;
			font-size: 16px;
			font-weight: 600;
		}


		.active {
			border-bottom: 2px solid $border;
			color: $text-61color;
		}
	}
</style>

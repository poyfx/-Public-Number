<template>
	<view class="">
		<view class="nav flex">
			<navigator url="../../pages/ticket/ticket"><view class="nav_nouse active" ref="nav_nouse" @tap="choose(1)">未使用</view></navigator>
			<navigator url="../../pages/ticket/used"><view class="nav_used" ref="nav_used" @tap="choose(2)">已使用</view></navigator>
			<navigator url="../../pages/ticket/expired"><view class="nav_expired" ref="nav_expired" @tap="choose(3)">已过期</view></navigator>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			choose(e){
				if(e == 1){
					console.log(this.$refs.nav_nouse)
					this.$refs.nav_nouse.class="active";
					this.$refs.nav_used.class="";
					this.$refs.nav_expired.class="";
				}else if(e == 2){
					console.log(this.$refs.nav_used)
					this.$refs.nav_nouse.class="";
					this.$refs.nav_used.class="active";
					this.$refs.nav_expired.class="";
				}else{
					this.$refs.nav_nouse.class="";
					this.$refs.nav_used.class="";
					this.$refs.nav_expired.class="active";
				}
			}
		}
	}
</script>

<style lang="scss">
	$border:#f9243d;
	.nav {
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
		background: #fff;
		navigator{
			width: 33.3%;
			view{
				padding: 13px 0 14px;
				color: $text-9ecolor;
				width: 100%;
				text-align: center;
				font-size: 16px;
				font-weight: 600;
			}
		}

		.active {
			border-bottom: 2px solid $border;
			color: $text-61color;
		}
	}
</style>

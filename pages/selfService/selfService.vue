<template>
	<view>
		<view class="header flex">
			<view class="header_bar">
			
			</view>
			<view class="header_title flex">
				<view class="left" @tap="back">
					<uni-icon type="arrowleft" size="27"></uni-icon>
				</view>
				<view>自助加油站</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			uniIcon
		}
	}
</script>

<style lang="scss">

</style>

<template>
	<view>
		<view class="header_title flex">
			<view class="left" @tap="back">
				<uni-icon type="arrowleft" size="27"></uni-icon>
			</view>
			<view>{{titles}}</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		props:{
			titles:{
				type:String,
				value:'',
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
		},
		components:{
			uniIcon
		}
	}
</script>

<style lang="scss">

</style>

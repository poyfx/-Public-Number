<template>
	<view>
		<view class="header flex ">
			<view class="header_bar">
			
			</view>
			<view class="header_title flex">
				<view class="left" @tap="back">
					<uni-icon type="arrowleft" size="27"></uni-icon>
				</view>
				<view>修改手机号</view>
			</view>
		</view>
		<view class="bgcf mTop16 modify_content">
			<view class="flex modify_list border-Bottom">
				<text>旧手机号</text>
				<input type="text" placeholder="请输入旧的手机号码" value="" />
			</view>
			<view class="flex modify_list">
				<text>验证码</text>
				<input type="text" placeholder="请输入验证码" value="" />
				<view class="code">
					获取验证码
				</view>
			</view>
			
		</view>
		<view class="btn_box">
			<button class="btn">下一步</button>
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
.modify_content{
	padding-left:15px;
	font-size:16px;
	.modify_list{
		align-center:center;
		align-items:center;
		text,input{
			padding: 10px 0;
		}
		text{
			width: 80px;
		}
		.code{
			padding: 10px 12px;
			border-left: 1px solid #F0E7E6;
			color: #3B95F2;
		}
	}
}
.btn_box{
	width: 90%;
	margin: 0 5%;
	position: absolute;
	bottom: 110px;
}
</style>

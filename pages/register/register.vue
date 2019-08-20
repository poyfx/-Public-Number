<template>
	<view>
		<view class="reg">
			<view class="header flex">
				<view class="header_bar">
				
				</view>
				<view class="header_title flex">
					<view class="left" @tap="back">
						<uni-icon type="arrowleft" size="27"></uni-icon>
					</view>
					<view>注册</view>
				</view>
			</view>
			<view class="reg_img">
				<image src="../../static/img/logo.png" mode="aspectFit"></image>
			</view>
			<view class="reg_input">
				<view class="reg_inpu_phone">
					<input type="tel" placeholder="手机号" />
				</view>
				<view class="reg_inpu_code">
					<input type="text" placeholder="验证码" />
					<text>获取验证码</text>
				</view>
				<view class="reg_input_password">
					<input :type="type" placeholder="密码" />
					<image :class="show ? shows : nos" ref="reg_input_img" src="../../static/img/eye.png" mode="aspectFit" @tap="showpwd"></image>
				</view>
			</view>
			<view class="reg_btn">
				<button @tap="go">注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		data() {
			return {
				show:false,
				type:'password',
				shows:"reg_input_img_show",
				nos:"reg_input_img_no",
			};
		},
		methods:{
			showpwd(){
				this.show =!this.show;
				if(this.show){
					this.type = "text"
				}else{
					this.type = "password"
				}
			},
			go(){
				uni.navigateTo({
					url:'../ticket/ticket'
				})
			},
		},
		components:{
			uniIcon
		}
	}
</script>

<style lang="scss">
	.reg {
		.reg_img {
			text-align: center;
			margin: 40px 0 40px;

			image {
				width: 200px;
				height: 74px;
			}
		}

		.reg_input {
			width: 100%;
			box-sizing: border-box;
			.reg_inpu_code{
				position:relative;
				text{
					font-size: 16px;
					color: #007AFF;
					position: absolute;
					top: 25%;
					right: 7%;
				}
			}
			.reg_input_password {
				position:relative;
				.reg_input_img_show {
					width: 24px;
					height: 24px;
					position: absolute;
					top: 25%;
					right: 8%;
				}
				.reg_input_img_no {
					width: 24px;
					height: 24px;
					position: absolute;
					top: 25%;
					right: 8%;
					opacity: 0.4;
				}
			}


			input {
				border: 1px solid #e5e5e5;
				padding: 12px;
				margin: 12px 16px;
				border-radius: 4px;
				background: $input-bgc;
			}
		}

		.reg_btn {
			width: 100%;
			margin-top: 96px;

			button {
				margin: 0 20px;
				color: $uni-bg-color;
				background-color: $title-color;
			}
		}
	}
</style>

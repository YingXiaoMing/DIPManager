<template>
	<view class="login-container">
		
		<view class="circle-left"></view>
		<view class="circle-bottom-right"></view>
		<!-- 页面内容 -->
		<view class="page-content">


			<!-- 4分之一的圆 -->
			
			<!-- 右上角免密登录 -->
			<view class="free-login-btn">
				<text @click="goFreeLogin">免密登录</text>
			</view>
			
			<!-- 登录标题 -->
			<view class="login-title">
				<text>欢迎登录</text>
			</view>
			
			<!-- 表单输入区域 -->
			<view class="input-section">
				<u-form :model="form" ref="uForm" >
					<u-form-item border-bottom="true">
						<u--input 
							v-model="form.phone" 
							placeholder="请输入您的手机号" 
							clearable
						/>
					</u-form-item>
					<u-form-item border-bottom="true">
						<u--input 
							v-model="form.password"
							placeholder="输入密码" 
							type="password"
							clearable
						/>
					</u-form-item>
				</u-form>
			</view>
			
			<!-- 登录按钮 -->
			<view class="login-btn-wrap">
				<u-button text="登录" type="primary" shape="circle" @click="handleLogin"></u-button>
			</view>
			<!-- 协议同意 -->
			<view class="agreement-section">
				<checkbox-group @change="checkboxGroupChange">
					<view class="checkbox-container">
						<checkbox value="agree" :checked="isAgree" color="#3c9cff" style="transform: scale(0.7);"/>
						<text class="agreement-text">
							同意《<text class="link-text">中国移动认证服务条款</text>》和某某《<text class="link-text">用户协议</text>》、《<text class="link-text">隐私政策</text>》并使用本手机号登录
						</text>
					</view>
				</checkbox-group>
			</view>
		</view>
	</view>
</template>

<script>
import routes from '@/common/routes.js'
import { statusBarMixin } from '@/mixins/statusBar.js'

export default {
	mixins: [statusBarMixin],
	data() {
		return {
			form: {
				phone: 'admin',
				password: 'admin',
			},
			isAgree: true,
		}
	},
	computed: {
		contentStyle() {
			return {
				height: `calc(100vh - ${this.statusBarHeight}px)`,
				paddingTop: `${this.statusBarHeight}px`
			}
		}
	},
	methods: {
		goBack() {
			uni.navigateBack();
		},
		goFreeLogin() {
			// 跳转到免密登录页面
			routes.toFreeLogin();
		},
		handleLogin() {
			if (!this.form.phone) {
				uni.$u.toast('请输入手机号');
				return;
			}
			if (!this.form.password) {
				uni.$u.toast('请输入密码');
				return;
			}
			if (!this.isAgree) {
				uni.$u.toast('请同意用户协议和隐私政策');
				return;
			}
			routes.toDipManager();


		},
		checkboxChange(e) {
			console.log('checkbox change:', e);
			this.isAgree = e.detail.value;
		},
		toggleAgreement() {
			this.isAgree = !this.isAgree;
		},
		checkboxGroupChange(e) {
			console.log('checkbox group change:', e);
			this.isAgree = e.detail.value.length > 0;
		}
	}
}
</script>

<style lang="scss" scoped>
.login-container {
	background-color: #f6f7fa;
	box-sizing: border-box;
	.circle-left {
		position: fixed;
		width: 460rpx;
		height: 460rpx;
		background-color: rgba(22, 152, 253, 0.1);
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 460rpx;
	}
	.circle-bottom-right {
		position: fixed;
		right: 0;
		bottom: 0;
		width: 250rpx;
		height: 250rpx;
		background-color: rgba(22, 152, 253, 0.1);
		border-top-left-radius: 250rpx;
		border-top-right-radius: 0;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

	}


	.page-content {
		position: relative;
		min-height: calc(100vh - 44rpx);
		padding: 20rpx 40rpx;
		display: flex;
		flex-direction: column;
	}
	
	
	.free-login-btn {
		position: fixed;
		right: 30rpx;
		top: 220rpx;
		font-size: 28rpx;
		color: #333;
	}
	
	.login-title {
		margin-top: 300rpx;
		font-size: 50rpx;
		font-weight: bold;
		color: #333;
		position: relative;
		margin-bottom: 80rpx;
	
	}
	
	
	
	.login-btn-wrap {
		margin-top: 80rpx;
	}
	
	.agreement-section {
		position: relative;
		margin-top: auto;
		margin-bottom: 10rpx;
		font-size: 24rpx;
		color: #999;
		width: 100%;
		
		.checkbox-container {
			display: flex;
			align-items: flex-start;
			// align-items: center;
		}
		
		.agreement-text {
			margin-top: 4rpx;
			margin-left: 10rpx;
			line-height: 1.5;
		}
		
		.link-text {
			color: #3c9cff;
		}
	}
}
</style>

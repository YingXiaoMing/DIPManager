<template>
	<view class="code-login-container">
		<!-- 背景装饰 -->
		<view class="circle-left"></view>
		<view class="circle-bottom-right"></view>
		
		<view class="page-content">
			<!-- 返回按钮 -->
			<view class="back-btn">
				<u-icon name="arrow-left" size="20" color="#333" @click="goBack"></u-icon>
			</view>
			
			<!-- 右上角密码登录 -->
			<view class="pwd-login-btn">
				<text @click="goPwdLogin">密码登录</text>
			</view>
			
			<!-- 登录标题 -->
			<view class="login-title">
				<text>输入验证码</text>
			</view>
			
			<!-- 验证码发送提示 -->
			<view class="verify-hint">
				<text>验证码已发送至181****5678</text>
			</view>
			
			<!-- 验证码输入区域 -->
			<view class="code-input-area">
				<u-code-input v-model="value"></u-code-input>
			</view>
			
			<!-- 隐藏的真实输入框 -->
			<input 
				type="number" 
				maxlength="4" 
				v-model="codeValueStr" 
				focus 
				class="hidden-input"
				@input="onCodeInput"
			/>
		</view>
	</view>
</template>

<script>
import routes from '@/common/routes.js'
export default {
	data() {
		return {
			phone: '181****5678', // 实际使用时应该从路由参数或其他地方获取
			codeValueStr: '', // 验证码字符串
			codeValue: [], // 验证码数组
			currentIndex: 0, // 当前输入位置
            value: ''
		}
	},
	methods: {
		goBack() {
            routes.toFreeLogin();
		},
		goPwdLogin() {
            routes.toLogin();
		},
		// 处理验证码输入
		onCodeInput(e) {
			const val = e.detail.value;
			this.codeValue = val.split('');
			this.currentIndex = val.length;
			
			// 当输入完成4位验证码时，自动提交
			if (val.length === 4) {
				this.submitCode();
			}
		},
		// 提交验证码
		submitCode() {
			if (this.codeValueStr.length !== 4) {
				uni.$u.toast('请输入4位验证码');
				return;
			}
			
			// 显示加载提示
			uni.showLoading({
				title: '验证中'
			});
			
			// 模拟验证过程
			setTimeout(() => {
				uni.hideLoading();
				
				// 登录成功，跳转到主页
				uni.showToast({
					title: '登录成功',
					icon: 'success'
				});
				
				setTimeout(() => {
					uni.switchTab({
						url: '/pages/index/index'
					});
				}, 1500);
			}, 1000);
		}
	},
	onLoad(options) {
		if (options.phone) {
			this.phone = options.phone;
		}
	}
}
</script>

<style lang="scss" scoped>
.code-login-container {
	background-color: #f6f7fa;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	
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
	
	.back-btn {
		position: fixed;
		left: 30rpx;
		top: 220rpx;
		z-index: 10;
	}
	
	.pwd-login-btn {
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
		margin-bottom: 40rpx;
	}
	
	.verify-hint {
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #666;
	}
	
	.code-input-area {
		margin-top: 60rpx;
		display: flex;
		justify-content: space-between;
		
		.code-input-box {
			width: 120rpx;
			height: 120rpx;
			background-color: #1698fd;
			border-radius: 20rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
			
			&.active {
				border: 2rpx solid #1698fd;
			}
			
			.code-text {
				font-size: 60rpx;
				font-weight: bold;
				color: #ffffff;
			}
		}
	}
	
	.hidden-input {
		position: absolute;
		top: -9999rpx;
		left: -9999rpx;
		width: 0;
		height: 0;
		opacity: 0;
	}
}
</style>

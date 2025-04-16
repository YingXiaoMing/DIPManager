<template>
	<view class="free-login-container">

        <view class="circle-left"></view>
		<view class="circle-bottom-right"></view>

        <view class="page-content">
            <view class="back-btn">
			    <u-icon name="arrow-left" size="20" color="#333" @click="goBack"></u-icon>
            </view>
            <!-- 右上角密码登录 -->
            <view class="pwd-login-btn">
                <text @click="goPwdLogin">密码登录</text>
            </view>
            
            <!-- 登录标题 -->
            <view class="login-title">
                <text>一键登录</text>
            </view>
            
            <!-- 手机号显示 -->
            <view class="phone-section">
                <text class="phone-text">+86 {{formatPhone(phone)}}</text>
            </view>
            
            <!-- 获取验证码按钮 -->
            <view class="verify-btn-wrap">
                <u-button text="获取验证码" type="primary" shape="circle" @click="getVerifyCode"></u-button>
            </view>
            
            <!-- 底部协议 -->
            <view class="agreement-section">
                <checkbox-group @change="checkboxGroupChange">
                    <view class="checkbox-container">
                        <checkbox value="agree" :checked="isAgree" color="#3c9cff" style="transform: scale(0.7);"/>
                        <text class="agreement-text">
                            同意<text class="link-text">《中国移动认证服务条款》</text>和<text class="link-text">《用户协议》</text>、<text class="link-text">《隐私政策》</text>并使用本手机号登录
                        </text>
                    </view>
                </checkbox-group>
            </view>
        </view>
		<!-- 返回按钮 -->
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			phone: '181****5678', // 实际使用时应该从路由参数或其他地方获取
			isAgree: false,
		}
	},
	methods: {
		goBack() {
			uni.navigateBack();
		},
		goPwdLogin() {
			uni.navigateBack();
		},
		formatPhone(phone) {
			return phone || '';
		},
		getVerifyCode() {
			if (!this.isAgree) {
				uni.$u.toast('请同意用户协议和隐私政策');
				return;
			}
			// 获取验证码逻辑
			uni.showLoading({
				title: '获取中'
			});
			
			// 模拟请求
			setTimeout(() => {
				uni.hideLoading();
				uni.showToast({
					title: '验证码已发送',
					icon: 'none'
				});
			}, 1000);
		},
		checkboxGroupChange(e) {
			this.isAgree = e.detail.value.length > 0;
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
.free-login-container {
	background-color: #f6f7fa;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
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
		margin-bottom: 80rpx;
	}
	
	.phone-section {
		margin-top: 60rpx;
		text-align: center;
		
		.phone-text {
			font-size: 40rpx;
			color: #333;
			font-weight: 500;
		}
	}
	
	.verify-btn-wrap {
		margin-top: 80rpx;
		padding: 0 40rpx;
	}
	
	.agreement-section {
		margin-top: auto;
		margin-bottom: 40rpx;
		font-size: 24rpx;
		color: #999;
		width: 100%;
		
		.checkbox-container {
			display: flex;
			align-items: flex-start;
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

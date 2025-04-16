<script>
	export default {
		onLaunch: function() {
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 使用 SCSS 变量 */
	.page-content {
		position: relative;
		min-height: calc(100vh - 44rpx);
		padding: 20rpx 40rpx;
		display: flex;
		flex-direction: column;
	}
	/*每个页面公共css */
</style>

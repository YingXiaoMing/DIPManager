export const statusBarMixin = {
	data() {
		return {
			statusBarHeight: 0
		}
	},
	created() {
		// 从全局变量或存储中获取状态栏高度
		try {
			const app = getApp();
			this.statusBarHeight = app.globalData?.statusBarHeight || uni.getStorageSync('statusBarHeight') || 0;
		} catch (e) {
			// 如果获取失败，直接获取系统信息
			const systemInfo = uni.getSystemInfoSync();
			this.statusBarHeight = systemInfo.statusBarHeight;
		}
	},
	computed: {
		statusBarStyle() {
			return {
				height: this.statusBarHeight + 'px'
			}
		},
		pageContentStyle() {
			return {
				paddingTop: this.statusBarHeight + 'px'
			}
		}
	}
} 
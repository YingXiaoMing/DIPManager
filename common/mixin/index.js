export const globalMixin = {
	data() {
		return {
			headerHeight: 0,
			_basePageContentStyle: {}
		}
	},
	created() {
		const NAV_BAR_HEIGHT = 44
		const statusHeight = uni.getSystemInfoSync().statusBarHeight
		this.headerHeight = statusHeight + NAV_BAR_HEIGHT + 'px'
		this._basePageContentStyle = {
			paddingTop: this.headerHeight,
			height: `calc(100vh - ${this.headerHeight})`,
			minHeight: `calc(100vh - ${this.headerHeight})`,
			backgroundColor: 'red'
		}
	}
}

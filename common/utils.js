export const gotoPage = (router) => {
	const pages = getCurrentPages();
	// console.log(pages)
	if (pages.length >= 9) {
		// let delta = pages.length - 2; // 返回到上一级页面
		// uni.navigateBack({
		//   delta: delta
		// });
		uni.redirectTo({url: router})
	}
	setTimeout(() => {
		uni.navigateTo({
			url: router
		});
	}, 300); // 给出足够的时间让页面返回
}
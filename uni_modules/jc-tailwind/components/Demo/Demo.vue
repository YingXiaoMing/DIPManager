<script setup>
	// 废弃
	import { ref, computed, getCurrentInstance, onMounted, nextTick } from 'vue'
	const props = defineProps({
		title: '',
		maxHeight: {
			default: 200
		}
	})
	const instance = getCurrentInstance()
	const demoContentRef = ref()
	const more = ref(true)
	const showMore = ref(false)
	const styles = computed(() => {
		return more.value ? {
			maxHeight: `${props.maxHeight}rpx`,
			overflow: 'hidden',
		} : {}
	})


	onMounted(getDemoContentRef)
	nextTick(getDemoContentRef)

	function callback(data) {
		const { height } = data
		showMore.value = height > uni.upx2px(props.maxHeight)
		more.value = height > uni.upx2px(props.maxHeight)
	}

	function getDemoContentRef() {
		let query = uni.createSelectorQuery().in(instance)
		query.select('.demoContent')
			.fields({ rect: true, size: true, scrollOffset: true }, callback)
			// .boundingClientRect(callback)
			.exec()
	}

	function toggleMore() {
		more.value = !more.value
	}
</script>

<template>
	<view>
		<view class="p-2 bg-slate-500 sticky t-0 flex item-center">
			<view class="flex-1 font-medium font-bold text-base text-slate-50">{{title}}</view>
			<view class="text-slate-200 text-center p-0-5 text-xs font-light" @tap="toggleMore" v-if="showMore">
				<text v-if="more">更多 ↓</text>
				<text v-else>收起 ↑ </text>
			</view>
		</view>
		<view class="p-2 bg-white" :style="styles" :class="{more: showMore && more}">
			<view class="demoContent">
				<slot></slot>
			</view>
		</view>
	</view>
</template>



<style lang="scss" scoped>
	.more {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			height: 64rpx;
			width: 100%;
			border-radius: 4rpx 4rpx 0 0;
			background: linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.5));
			// backdrop-filter: blur(4rpx) saturate(50%);
			// box-shadow: 0 -4rpx 8rpx rgba(0, 0, 0, .25);
		}
	}
</style>
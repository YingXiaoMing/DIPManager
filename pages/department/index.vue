<template>
	<view class="content">
		<view class="flex flex-row w-full h-7 py-3 px-1">
			<view class="w-3_4 flex flex-row pl-3">
				<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400">
					<label class="text-xs">出院日期</label>
					<u-icon name="arrow-down" size="12"></u-icon>
				</view>
				<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400">
					<label class="text-xs">出院科室</label>
					<u-icon name="arrow-down" size="12"></u-icon>
				</view>
				<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400">
					<label class="text-xs">结算日期</label>
					<u-icon name="arrow-down" size="12"></u-icon>
				</view>
			</view>
			<view class="w-1_4 flex flex-row items-center justify-center" @click="show = true">
				<u-image src="/static/filter.png" width="14" height="14"></u-image>
				<label class="text-sm ml-2 font-bold">筛选</label>
			</view>
		</view>
		<u-popup mode="top" :show="show" round="10" :safeAreaInsetBottom="false">
			<view class="flex flex-row w-full h-7 py-3 px-1">
				<view class="w-3_4 flex flex-row pl-3">
					<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400">
						<label class="text-xs">出院日期</label>
						<u-icon name="arrow-down" size="12"></u-icon>
					</view>
					<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400">
						<label class="text-xs">出院科室</label>
						<u-icon name="arrow-down" size="12"></u-icon>
					</view>
					<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400">
						<label class="text-xs">结算日期</label>
						<u-icon name="arrow-down" size="12"></u-icon>
					</view>
				</view>
				<view class="w-1_4 flex flex-row items-center justify-center" @click="show = false">

					<u-icon name="arrow-up-fill" size="16"></u-icon>
					<label class="text-sm ml-2 font-bold">收起</label>
				</view>
			</view>
			<view class="flex flex-row w-full px-1 flex-wrap">
				<view class="w-1_4 flex flex-row border-b py-2 items-cente justify-center border-black__15">
					<label class="text-sm">患者姓名</label>
					<view class="ml-1 mt-1.5">
						<u-icon name="arrow-down" size="12" ></u-icon>
					</view>
				</view>
				<view class="w-1_4 flex flex-row border-b py-2 items-cente justify-center border-black__15">
					<label class="text-sm">病人流水号</label>
					<view class="ml-1 mt-1.5">
						<u-icon name="arrow-down" size="12"></u-icon>
					</view>
				</view>
				<view class="w-1_4 flex flex-row border-b py-2 items-cente justify-center border-black__15">
					<label class="text-sm">住院号</label>
					<view class="ml-1 mt-1.5">
						<u-icon name="arrow-down" size="12"></u-icon>
					</view>
				</view>
				<view class="w-1_4 flex flex-row border-b border-black__15 py-2 items-cente justify-center">
					<label class="text-sm">病种名称</label>
					<view class="ml-1 mt-1.5">
						<u-icon name="arrow-down" size="12"></u-icon>
					</view>
				</view>
				<view class="w-1_4 flex flex-row border-b py-2 items-cente justify-center border-black__15">
					<label class="text-sm">诊断编码</label>
					<view class="ml-1 mt-1.5">
						<u-icon name="arrow-down" size="12"></u-icon>
					</view>
				</view>
				<view class="w-1_4 flex flex-row border-b py-2 items-cente justify-center border-black__15">
					<label class="text-sm">结算类型</label>
					<view class="ml-1 mt-1.5">
						<u-icon name="arrow-down" size="12"></u-icon>
					</view>
				</view>
				<view class="w-1_4 flex flex-row border-b py-2 items-cente justify-center border-black__15">
					<label class="text-sm">经治医生</label>
					<view class="ml-1 mt-1.5">
						<u-icon name="arrow-down" size="12"></u-icon>

					</view>
				</view>
				<view class="w-1_4 border-b border-black__15"></view>
			</view>
			<view class="flex flex-row w-full px-1 flex-wrap py-3">
				<view class="w-1_2 flex justify-center items-center">
					<checkbox value="agree" :checked="isAgree" color="#3c9cff" style="transform: scale(0.7);"/>
					<label class="text-sm font-black">标题展示过滤条件</label>
				</view>
				<view class="w-1_2 flex justify-center self-center">
					<label class="text-sm font-black">查看已选参数</label>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				title: 'Hello',
				show: false,
				isAgree: true,
				tableData: [],
				loading: false

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

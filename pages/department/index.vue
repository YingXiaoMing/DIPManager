<template>
	<view class="content">
		<view class="flex flex-row w-full h-7 py-3 px-1">
			<view class="w-3_4 flex flex-row pl-3">
				<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400" @click="show = true">
					<label class="text-xs">出院日期</label>
					<u-icon name="arrow-down" size="12"></u-icon>
				</view>
				<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400" @click="show = true">
					<label class="text-xs">出院科室</label>
					<u-icon name="arrow-down" size="12"></u-icon>
				</view>
				<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400" @click="show = true">
					<label class="text-xs">结算日期</label>
					<u-icon name="arrow-down" size="12"></u-icon>
				</view>
			</view>
			<view class="w-1_4 flex flex-row items-center justify-center" @click="show = true">
				<u-image src="/static/filter.png" width="14" height="14"></u-image>
				<label class="text-sm ml-2 font-bold">筛选</label>
			</view>
		</view>
		<view class="content-container">
			<u-list
				@scrolltolower="loadMore"
				@scrolltoupper="refresh"
				:enableBackToTop="true"
			>
				<view class="department-list">
					<view 
						class="department-item" 
						v-for="(item, index) in departmentList" 
						:key="index"
					>
						<view class="item-header">
							<text class="dept-name">{{item.deptName}}</text>
						</view>
						<view class="item-content">
							<view class="content-row">
								<view class="content-item">
									<text class="item-label">人次</text>
									<text class="item-value">{{item.patientCount}}</text>
								</view>
								<view class="content-item">
									<text class="item-label">总金额</text>
									<text class="item-value">{{item.totalAmount}}</text>
								</view>
								<view class="content-item">
									<text class="item-label">病种定额</text>
									<text class="item-value">{{item.diseaseQuota}}</text>
								</view>
							</view>
							<view class="content-row">
								<view class="content-item">
									<text class="item-label">标准分值</text>
									<text class="item-value">{{item.standardValue}}</text>
								</view>
								<view class="content-item">
									<text class="item-label">实际分值</text>
									<text class="item-value">{{item.actualValue}}</text>
								</view>
								<view class="content-item">
									<text class="item-label">预估保险费用</text>
									<text class="item-value">{{item.estimatedInsurance}}</text>
								</view>
							</view>
							<view class="content-row">
								<view class="content-item special-item">
									<text class="item-label">预估盈亏</text>
									<text class="item-value" :class="{'profit': item.estimatedProfit > 0, 'loss': item.estimatedProfit < 0}">
										{{item.estimatedProfit}}
									</text>
								</view>
							</view>
						</view>
					</view>
					<u-loadmore :status="loadStatus" @loadmore="loadMore" />
					<view v-if="loading" class="loading-container">
						<u-loading-icon></u-loading-icon>
					</view>
				</view>
			</u-list>
		</view>
		<u-popup mode="top" :show="show" round="10" @close="show = false" :safeAreaInsetBottom="false">
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
				loading: false,
				departmentList: [],
				page: 1,
				pageSize: 10,
				total: 0,
				loadStatus: 'loadmore',
			}
		},
		onLoad() {
			this.getDepartmentList();
		},
		methods: {
			getDepartmentList(type = 'init') {
				if (type === 'refresh') {
					this.page = 1;
				}
				
				this.loading = true;
				const mockData = this.getMockData();
					
				if (type === 'refresh' || type === 'init') {
					this.departmentList = mockData;
				} else {
					this.departmentList = [...this.departmentList, ...mockData];
				}
				
				this.loading = false;
				
				if (this.page * this.pageSize >= this.total) {
					this.loadStatus = 'nomore';
				} else {
					this.loadStatus = 'loadmore';
				}
				
			},
			
			getMockData() {
				this.total = 35;
				
				const departments = ['中医科', '外科', '儿科', '妇科', '神经科', '骨科', '眼科', '耳鼻喉科', '口腔科', '皮肤科'];
				const result = [];
				
				const startIndex = (this.page - 1) * this.pageSize;
				const endIndex = Math.min(startIndex + this.pageSize, this.total);
				
				for (let i = startIndex; i < endIndex; i++) {
					const deptIndex = i % departments.length;
					const profit = Math.floor(Math.random() * 20000) - 10000;
					
					result.push({
						deptName: departments[deptIndex],
						patientCount: Math.floor(Math.random() * 100) + 1,
						totalAmount: (Math.random() * 100000 + 10000).toFixed(2),
						diseaseQuota: (Math.random() * 50000 + 5000).toFixed(2),
						standardValue: (Math.random() * 100 + 50).toFixed(2),
						actualValue: (Math.random() * 100 + 50).toFixed(2),
						estimatedInsurance: (Math.random() * 80000 + 20000).toFixed(2),
						estimatedProfit: profit.toFixed(2)
					});
				}
				
				return result;
			},
			
			refresh() {
				this.getDepartmentList('refresh');
			},
			
			loadMore() {
				if (this.loadStatus !== 'loadmore') return;
				
				this.loadStatus = 'loading';
				this.page += 1;
				this.getDepartmentList('loadmore');
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
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
	
	.content-container {
		width: 100%;
		overflow: hidden;
	}
	
	.department-list {
		padding: 10rpx;
	}
	
	.department-item {
		background-color: #ffffff;
		border-radius: 12rpx;
		margin-bottom: 20rpx;
		box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}
	
	.item-header {
		padding: 20rpx;
		background-color: #f0f6ff;
		border-bottom: 1rpx solid #e5e5e5;
	}
	
	.dept-name {
		font-size: 32rpx;
		font-weight: bold;
		color: #333;
	}
	
	.item-content {
		padding: 20rpx;
	}
	
	.content-row {
		display: flex;
		margin-bottom: 15rpx;
	}
	
	.content-row:last-child {
		margin-bottom: 0;
	}
	
	.content-item {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.special-item {
		flex: 2;
	}
	
	.item-label {
		font-size: 24rpx;
		color: #999;
		margin-bottom: 8rpx;
	}
	
	.item-value {
		font-size: 28rpx;
		color: #333;
		font-weight: 500;
	}
	
	.profit {
		color: #16a085;
	}
	
	.loss {
		color: #e74c3c;
	}
	
	.loading-container {
		padding: 20rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

<template>
    <view class="content">
        <view class="flex flex-row w-full h-7 py-3 px-1">
			<view class="w-3_4 flex flex-row pl-3">
				<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400">
					<label class="text-xs">结算日期</label>
					<u-icon name="arrow-down" size="12"></u-icon>
				</view>
				<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400">
					<label class="text-xs">出院日期</label>
					<u-icon name="arrow-down" size="12"></u-icon>
				</view>
			</view>
			<view class="w-1_4 flex flex-row items-center justify-center" @click="show = true">
				<u-image src="/static/filter.png" width="14" height="14"></u-image>
				<label class="text-sm ml-2 font-bold">筛选</label>
			</view>
		</view>
        <view class="content-container">
            <view class="cards-container">
                <view class="grid-row">
                    <!-- 人次分析卡片 -->
                    <view class="analysis-card">
                        <view class="card-header">
                            <text class="header-title">偏差类型</text>
                            <text class="header-title">人次</text>
                        </view>
                        <view class="card-content">
                            <view class="content-row">
                                <text class="row-label">/</text>
                                <text class="row-value">{{statistics.normal.count}}</text>
                            </view>
                            <view class="content-row highlight-low">
                                <text class="row-label">低倍案例</text>
                                <text class="row-value">{{statistics.low.count}}</text>
                            </view>
                            <view class="content-row highlight-normal">
                                <text class="row-label">正常案例</text>
                                <text class="row-value">{{statistics.medium.count}}</text>
                            </view>
                            <view class="content-row highlight-high">
                                <text class="row-label">高倍案例</text>
                                <text class="row-value">{{statistics.high.count}}</text>
                            </view>
                            <view class="content-row total-row">
                                <text class="row-label">列总计</text>
                                <text class="row-value">{{statistics.total.count}}</text>
                            </view>
                        </view>
                    </view>
                    
                    <!-- 总金额分析卡片 -->
                    <view class="analysis-card">
                        <view class="card-header">
                            <text class="header-title">偏差类型</text>
                            <text class="header-title">总金额</text>
                        </view>
                        <view class="card-content">
                            <view class="content-row">
                                <text class="row-label">/</text>
                                <text class="row-value">{{statistics.normal.amount}}</text>
                            </view>
                            <view class="content-row highlight-low">
                                <text class="row-label">低倍案例</text>
                                <text class="row-value">{{statistics.low.amount}}</text>
                            </view>
                            <view class="content-row highlight-normal">
                                <text class="row-label">正常案例</text>
                                <text class="row-value">{{statistics.medium.amount}}</text>
                            </view>
                            <view class="content-row highlight-high">
                                <text class="row-label">高倍案例</text>
                                <text class="row-value">{{statistics.high.amount}}</text>
                            </view>
                            <view class="content-row total-row">
                                <text class="row-label">列总计</text>
                                <text class="row-value">{{statistics.total.amount}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                
                <view class="grid-row">
                    <!-- 病种类型分析卡片 -->
                    <view class="analysis-card">
                        <view class="card-header">
                            <text class="header-title">偏差类型</text>
                            <text class="header-title">病种类型</text>
                        </view>
                        <view class="card-content">
                            <view class="content-row">
                                <text class="row-label">病种类型</text>
                                <text class="row-value">{{statistics.normal.count}}</text>
                            </view>
                            <view class="content-row highlight-low">
                                <text class="row-label">低倍案例</text>
                                <text class="row-value">{{statistics.low.count}}</text>
                            </view>
                            <view class="content-row highlight-normal">
                                <text class="row-label">正常案例</text>
                                <text class="row-value">{{statistics.medium.count}}</text>
                            </view>
                            <view class="content-row">
                                <text class="row-label">/</text>
                                <text class="row-value">{{statistics.high.count}}</text>
                            </view>
                            <view class="content-row total-row">
                                <text class="row-label">列总计</text>
                                <text class="row-value">{{statistics.total.count}}</text>
                            </view>
                        </view>
                    </view>
                    
                    <!-- 偏差原因分析卡片 -->
                    <view class="analysis-card">
                        <view class="card-header">
                            <text class="header-title">偏差类型</text>
                            <text class="header-title">偏差原因</text>
                        </view>
                        <view class="card-content">
                            <view class="content-row">
                                <text class="row-label">偏差原因</text>
                                <text class="row-value">{{statistics.normal.count}}</text>
                            </view>
                            <view class="content-row highlight-low">
                                <text class="row-label">低倍案例</text>
                                <text class="row-value">{{statistics.low.count}}</text>
                            </view>
                            <view class="content-row highlight-normal">
                                <text class="row-label">正常案例</text>
                                <text class="row-value">{{statistics.medium.count}}</text>
                            </view>
                            <view class="content-row highlight-high">
                                <text class="row-label">高倍案例</text>
                                <text class="row-value">{{statistics.high.count}}</text>
                            </view>
                            <view class="content-row total-row">
                                <text class="row-label">列总计</text>
                                <text class="row-value">{{statistics.total.count}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                
                <view class="grid-row">
                    <!-- 标准分值分析卡片 -->
                    <view class="analysis-card">
                        <view class="card-header">
                            <text class="header-title">偏差类型</text>
                            <text class="header-title">标准分值</text>
                        </view>
                        <view class="card-content">
                            <view class="content-row">
                                <text class="row-label">标准分值</text>
                                <text class="row-value">{{statistics.normal.count}}</text>
                            </view>
                            <view class="content-row highlight-low">
                                <text class="row-label">低倍案例</text>
                                <text class="row-value">{{statistics.low.count}}</text>
                            </view>
                            <view class="content-row highlight-normal">
                                <text class="row-label">正常案例</text>
                                <text class="row-value">{{statistics.medium.count}}</text>
                            </view>
                            <view class="content-row highlight-high">
                                <text class="row-label">高倍案例</text>
                                <text class="row-value">{{statistics.high.count}}</text>
                            </view>
                            <view class="content-row total-row">
                                <text class="row-label">列总计</text>
                                <text class="row-value">{{statistics.total.count}}</text>
                            </view>
                        </view>
                    </view>
                    
                    <!-- 实际分值分析卡片 -->
                    <view class="analysis-card">
                        <view class="card-header">
                            <text class="header-title">偏差类型</text>
                            <text class="header-title">实际分值</text>
                        </view>
                        <view class="card-content">
                            <view class="content-row">
                                <text class="row-label">实际分值</text>
                                <text class="row-value">{{statistics.normal.count}}</text>
                            </view>
                            <view class="content-row highlight-low">
                                <text class="row-label">低倍案例</text>
                                <text class="row-value">{{statistics.low.count}}</text>
                            </view>
                            <view class="content-row highlight-normal">
                                <text class="row-label">正常案例</text>
                                <text class="row-value">{{statistics.medium.count}}</text>
                            </view>
                            <view class="content-row highlight-high">
                                <text class="row-label">高倍案例</text>
                                <text class="row-value">{{statistics.high.count}}</text>
                            </view>
                            <view class="content-row total-row">
                                <text class="row-label">列总计</text>
                                <text class="row-value">{{statistics.total.count}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                
                <view class="grid-row">
                    <!-- 预估费用分析卡片 -->
                    <view class="analysis-card">
                        <view class="card-header">
                            <text class="header-title">偏差类型</text>
                            <text class="header-title">预估指标费用</text>
                        </view>
                        <view class="card-content">
                            <view class="content-row">
                                <text class="row-label">预估指标费用</text>
                                <text class="row-value">{{statistics.normal.count}}</text>
                            </view>
                            <view class="content-row highlight-low">
                                <text class="row-label">低倍案例</text>
                                <text class="row-value">{{statistics.low.count}}</text>
                            </view>
                            <view class="content-row highlight-normal">
                                <text class="row-label">正常案例</text>
                                <text class="row-value">{{statistics.medium.count}}</text>
                            </view>
                            <view class="content-row highlight-high">
                                <text class="row-label">高倍案例</text>
                                <text class="row-value">{{statistics.high.count}}</text>
                            </view>
                            <view class="content-row total-row">
                                <text class="row-label">列总计</text>
                                <text class="row-value">{{statistics.total.count}}</text>
                            </view>
                        </view>
                    </view>
                    
                    <!-- 预估盈亏分析卡片 -->
                    <view class="analysis-card">
                        <view class="card-header">
                            <text class="header-title">偏差类型</text>
                            <text class="header-title">预估盈亏</text>
                        </view>
                        <view class="card-content">
                            <view class="content-row">
                                <text class="row-label">预估盈亏</text>
                                <text class="row-value">{{statistics.normal.count}}</text>
                            </view>
                            <view class="content-row highlight-low">
                                <text class="row-label">低倍案例</text>
                                <text class="row-value">{{statistics.low.count}}</text>
                            </view>
                            <view class="content-row highlight-normal">
                                <text class="row-label">正常案例</text>
                                <text class="row-value">{{statistics.medium.count}}</text>
                            </view>
                            <view class="content-row highlight-high">
                                <text class="row-label">高倍案例</text>
                                <text class="row-value">{{statistics.high.count}}</text>
                            </view>
                            <view class="content-row total-row">
                                <text class="row-label">列总计</text>
                                <text class="row-value">{{statistics.total.count}}</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <u-popup mode="top" :show="show" round="10" :safeAreaInsetBottom="false">
			<view class="flex flex-row w-full h-7 py-3 px-1">
				<view class="w-3_4 flex flex-row pl-3">
					<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400">
						<label class="text-xs">结算日期</label>
						<u-icon name="arrow-down" size="12"></u-icon>
					</view>
					<view class="flex flex-row  items-center  rounded-full border border-solid px-2 mr-2 border-gray-400">
						<label class="text-xs">出院日期</label>
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
					<label class="text-sm">出院科室</label>
					<view class="ml-1 mt-1.5">
						<u-icon name="arrow-down" size="12" ></u-icon>
					</view>
				</view>
				<view class="w-1_4 flex flex-row border-b py-2 items-cente justify-center border-black__15">
					<label class="text-sm">偏差类型</label>
					<view class="ml-1 mt-1.5">
						<u-icon name="arrow-down" size="12"></u-icon>
					</view>
				</view>
				<view class="w-1_4 flex flex-row border-b py-2 items-cente justify-center border-black__15">
					<label class="text-sm">患者姓名</label>
					<view class="ml-1 mt-1.5">
						<u-icon name="arrow-down" size="12"></u-icon>
					</view>
				</view>
				<view class="w-1_4 flex flex-row border-b border-black__15 py-2 items-cente justify-center">
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
				<view class="w-1_4 flex flex-row border-b py-2 items-cente justify-center border-black__15">
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
					<label class="text-sm">经治医生</label>
					<view class="ml-1 mt-1.5">
						<u-icon name="arrow-down" size="12"></u-icon>
					</view>
				</view>
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
            show: false,
            isAgree: true,
            statistics: {
                normal: {
                    count: 15069,
                    amount: 15069
                },
                low: {
                    count: 52635,
                    amount: 52635
                },
                medium: {
                    count: 12365,
                    amount: 12365
                },
                high: {
                    count: 156,
                    amount: 156
                },
                total: {
                    count: 53336,
                    amount: 53336
                }
            }
        }
    },
    methods: {
        initStatisticsData() {
            // 实际开发中从接口获取数据
            // 这里使用模拟数据
        }
    },
    onLoad() {
        this.initStatisticsData();
    }
}
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.content-container {
    overflow-y: auto;
    padding: 10rpx;
}

.cards-container {
    padding: 10rpx 5rpx;
}

.grid-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 15rpx;
}

.analysis-card {
    flex: 1;
    background-color: #e5f3fd;
    border-radius: 10rpx;
    margin: 5rpx;
    overflow: hidden;
}

.card-header {
    background-color: #a8d5f8;
    display: flex;
    justify-content: space-between;
    padding: 15rpx;
}

.header-title {
    font-size: 28rpx;
    font-weight: 500;
    color: #333;
}

.card-content {
    padding: 10rpx 0;
}

.content-row {
    display: flex;
    justify-content: space-between;
    padding: 8rpx 15rpx;
}

.row-label {
    font-size: 26rpx;
    color: #333;
}

.row-value {
    font-size: 26rpx;
    color: #333;
    font-weight: 500;
}

.highlight-low {
    color: #2196f3;
}

.highlight-low .row-label,
.highlight-low .row-value {
    color: #2196f3;
}

.highlight-normal {
    color: #4caf50;
}

.highlight-normal .row-label,
.highlight-normal .row-value {
    color: #4caf50;
}

.highlight-high {
    color: #f44336;
}

.highlight-high .row-label,
.highlight-high .row-value {
    color: #f44336;
}

.total-row {
    font-weight: bold;
    border-top: 1px solid #d0e6f7;
    margin-top: 6rpx;
    padding-top: 10rpx;
}
</style>
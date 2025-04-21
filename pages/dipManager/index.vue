<template>
	<view class="dip-container">
		
		<!-- 筛选条件区域 -->
		<view class="filter-area">
			<u-dropdown :close-on-click-mask="true" :border-bottom="true">
				<u-dropdown-item v-model="timeValue" title="时间范围" :options="timeOptions"></u-dropdown-item>
				<u-dropdown-item v-model="conditionValue" title="类型" :options="conditionOptions"></u-dropdown-item>
			</u-dropdown>
		</view>
		
		<!-- 内容区域 -->
		<view class="content-area">
			<!-- 住院住院人次分布 -->
			<view class="chart-card">
				<view class="card-title">住院住院人次分布</view>
				<view class="card-content empty-content" v-if="!hasData">
					<!-- 空数据展示 -->
				</view>
				<view class="card-content" v-else>
					<!-- 这里将放置图表 -->
				</view>
			</view>
			
			<!-- 偏差病例分布情况 -->
			<view class="chart-row">
				<view class="chart-card half-card">
					<view class="card-title">住院费用分布</view>
					<view class="pie-chart">
						<qiun-data-charts
							style="width: 100%;height: 300rpx;"
							type="pie"
							:chartData="costDistribution"
							:opts="pieOpts"
						/>
					</view>
				</view>
				<view class="chart-card half-card">
					<view class="card-title">偏差病例分布情况</view>
					<view class="pie-chart">
						<qiun-data-charts
							style="width: 100%;height: 300rpx"
							type="pie"
							:chartData="paymentDistribution"
							:opts="pieOpts"
						/>
					</view>
				</view>
			</view>
			
			<!-- 病种类型分布情况 -->
			<view class="chart-card">
				<view class="card-title">病种类型分布情况</view>
				<view class="ring-chart">
					<qiun-data-charts
						type="ring"
						style="width: 100%;height: 300rpx"
						:chartData="diseaseDistribution"
						:opts="ringOpts"
					/>
				</view>
			</view>
			
			<!-- 人员变更平均住院人次变化趋势图 -->
			<view class="chart-card">
				<view class="card-title">人员类型-平均每人每次住院总费用</view>
				<view class="line-chart">
					<qiun-data-charts 
						type="line"
						style="width: 100%;height: 500rpx"
						:chartData="averageHospitalizationTrend"
						:opts="lineOpts"
					/>
				</view>
			</view>
			
			<!-- 人群类型对比趋势 -->
			<view class="chart-card">
				<view class="card-title">人群类型-预估盈亏</view>
				<view class="line-chart">
					<qiun-data-charts 
						type="line"
						:chartData="populationTypeTrend"
						:opts="lineOpts"
					/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 筛选条件数据
				timeValue: '0',
				timeOptions: [
					{ value: '0', label: '最近一周' },
					{ value: '1', label: '最近一月' },
					{ value: '2', label: '最近一季' },
					{ value: '3', label: '最近一年' }
				],
				conditionValue: '0',
				conditionOptions: [
					{ value: '0', label: '全部' },
					{ value: '1', label: '住院' },
					{ value: '2', label: '门诊' }
				],
				
				// 控制是否有数据展示
				hasData: true,
				
				// 图表配置项
				pieOpts: {
					height: 150,
					color: ['#FC6CA0', '#906BFF', '#FF9A7F', '#6BA3FF', '#6FC8FF'],
					padding: [5, 5, 5, 5],
					legend: {
						show: true,
						position: 'top',
						lineHeight: 12,
						float: 'left',
						fontSize: 12,
						itemGap: 5
					},
					extra: {
						pie: {
							activeOpacity: 0.5,
							activeRadius: 10,
							offsetAngle: 0,
							labelWidth: 1,
							border: true,
							borderWidth: 1,
							borderColor: "#FFFFFF"
						}
					}
				},
				ringOpts: {
					title: {
						name: ''
					},
					subtitle: {
						name: ''
					},
					color: ['#906BFF', '#6FC8FF', '#6BA3FF', '#FF9A7F'],
					padding: [5, 5, 5, 5],
					legend: {
						show: true,
						position: 'right',
						lineHeight: 25,
					},
					extra: {
						ring: {
							ringWidth: 30,
							activeOpacity: 0.5,
							activeRadius: 10,
							offsetAngle: 0,
							labelWidth: 15,
							border: false,
							borderWidth: 3,
							borderColor: "#FFFFFF"
						}
					}
				},
				lineOpts: {
					color: ['#906BFF', '#6FC8FF', '#6BA3FF'],
					padding: [5, 5, 5, 5],
					dataLabel: false,
					enableScroll: false,
					legend: {
						show: true,
						position: 'top',
						lineHeight: 16,
						fontSize: 8,
						float: 'left',
					},
					xAxis: {
						disableGrid: true,
						rotateLabel: false
					},
					yAxis: {
						gridType: "dash",
						dashLength: 2,
					},
					extra: {
						line: {
							type: "curve",
							width: 2,
							activeType: "hollow",
							linearType: "custom",
							onShadow: true,
							animation: "horizontal"
						}
					}
				},
				
				// 图表数据
				costDistribution: {
					series: [{
						data: [
							{ name: '其他', value: 70.32 },
							{ name: '居民', value: 17.66 },
							{ name: '职工', value: 12.02 },
						]
					}]
				},
				paymentDistribution: {
					series: [{
						data: [
							{ name: '正常病例', value: 91.01 },
							{ name: '高倍病例', value: 5.85 },
							{ name: '低倍病例', value: 3.14 }
						]
					}]
				},
				diseaseDistribution: {
					series: [{
						data: [
							{ name: '正常病种', value: 40 },
							{ name: '核心病种', value: 25 },
							{ name: '综合病种', value: 20 },
						]
					}]
				},
				averageHospitalizationTrend: {
					categories: ['2024-06', '2024-07', '2024-08','2024-09', '2024-10'],
					series: [{
						name: '其他-次均总金额',
						data: [31000, 32000, 34050,34000,36000]
					},{
						name: '居民-次均总金额',
						data: [33050, 32050, 33050,34050,36050]
					}, {
						name: '职工-次均总金额',
						data: [32100, 32100, 33100,32100,33100]
					}]
				},
				populationTypeTrend: {
					categories: ['2020-09', '2020-10', '2021-01', '2021-05', '2022-01', '2022-05', '2023-01', '2023-05', '2024-01', '2024-06'],
					series: [{
						name: '其他-预估盈亏',
						data: [45000, 47000, 43000, 49000, 52000, 55000, 50000, 55000, 48000, 53000]
					}, {
						name: '居民-预估盈亏',
						data: [25000, 27000, 23000, 29000, 32000, 35000, 30000, 35000, 28000, 33000]
					}, {
						name: '职工-预估盈亏',
						data: [27000, 29000, 25000, 29000, 32000, 35000, 30000, 35000, 28000, 33000]
					}]
				}
			}
		},
		onLoad() {
			// 加载数据
			this.loadData();
		},
		methods: {
			// 加载数据方法
			loadData() {
				// 实际应用中这里应当从API获取数据
				// 这里使用模拟数据
				this.hasData = true;
				
				// 根据筛选条件过滤数据
				console.log("时间范围:", this.timeValue, "类型:", this.conditionValue);
			},
			
			// 时间筛选条件改变
			timeChange(index) {
				// 重新加载数据
				this.loadData();
			},
			
			// 条件筛选改变
			conditionChange(index) {
				// 重新加载数据
				this.loadData();
			}
		}
	}
</script>

<style lang="scss">
	.dip-container {
		background-color: #f5f7fa;
		min-height: 100vh;
	}
	
	.header {
		background-color: #0086f6;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		
		.header-title {
			color: #ffffff;
			font-size: 36rpx;
			font-weight: 500;
		}
	}
	
	.filter-area {
		display: flex;
		background-color: #ffffff;
		padding: 0;
		border-bottom: 1rpx solid #ebeef5;
	}
	
	.content-area {
		padding: 20rpx;
	}
	
	.chart-card {
		background-color: #ffffff;
		border-radius: 12rpx;
		margin-bottom: 20rpx;
		padding: 20rpx;
		box-shadow: 0 2rpx 12rpx 0 rgba(0, 0, 0, 0.1);
		
		.card-title {
			font-size: 28rpx;
			color: #303133;
			font-weight: 500;
			margin-bottom: 20rpx;
			padding-left: 20rpx;
			border-left: 6rpx solid #0086f6;
		}
		
		.empty-content {
			height: 300rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	
	.chart-row {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		column-gap: 10rpx;
		.half-card {
			
			width: 44%;
		}
	}
	
	.pie-chart, .ring-chart {
		height: 300rpx;
		width: 100%;
	}
	
	.line-chart {
		height: 500rpx;
		width: 100%;
	}
</style>


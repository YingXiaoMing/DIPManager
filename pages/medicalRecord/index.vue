<template>
    <view class="content">
        <view class="filter-container">
            <view class="filter-row">
                <view class="filter-item date-filter">
                    <view class="search-container">
                        <u-form :model="model" ref="form1" style="width:100%">
                            <u-form-item prop="date" labelWidth="80" @click="showCalendar = true; hideKeyboard()" label="出院日期:">
                                <u--input disabled disabledColor="#ffffff" v-model="model.rangeDate"
                                placeholder="请选择开始日期和结束日期"></u--input>
                            </u-form-item>
                        </u-form>
                    </view>
                    <view class="search-btn">查询</view>
                </view>
            </view>
            <view class="filter-row">
                <view class="filter-tags">
                    <view class="tag-item" @click="show = true">
                        <text class="tag-text">出院科室</text>
                        <u-icon name="arrow-down" size="12"></u-icon>
                    </view>
                    <view class="tag-item" @click="show = true">
                        <text class="tag-text">患者性别</text>
                        <u-icon name="arrow-down" size="12"></u-icon>
                    </view>
                </view>
                <view class="filter-actions">
                    <view class="filter-btn" @click="show = true">
                        <u-icon name="list" size="16"></u-icon>
                        <text class="btn-text">筛选</text>
                    </view>
                </view>
            </view>
            <view class="filter-options">
                <view class="option-item active">
                    <u-icon name="checkmark" color="#007AFF" size="14"></u-icon>
                    <text class="option-text">仅显示已过滤条件</text>
                </view>
                <view class="option-item">
                    <text class="option-text">查看已选参数</text>
                </view>
            </view>
        </view>
        
        <view class="table-header">
            <text class="header-title">病案出院入组类型</text>
        </view>
        
        <view class="table-container">
            <view class="table">
                <view class="table-head">
                    <view class="head-cell dept">
                        <text class="cell-header-text">出院科室</text>
                        <u-icon name="arrow-down-fill" size="12" color="#fff"></u-icon>
                    </view>
                    <view class="head-cell count">
                        <text class="cell-header-text">人次</text>
                        <u-icon name="arrow-down-fill" size="12" color="#fff"></u-icon>
                    </view>
                </view>
                
                <view class="table-body">
                    <view 
                        class="table-row" 
                        v-for="(item, index) in tableData" 
                        :key="index"
                    >
                        <view class="body-cell dept">
                            <text 
                                class="cell-text"
                                :class="{'case-type': item.isCategory}"
                            >{{item.department}}</text>
                        </view>
                        <view class="body-cell count">
                            <text class="cell-text">{{item.count}}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        
        <view class="pagination">
            <view class="page-info">
                <text>共{{totalItems}}条</text>
            </view>
            <view class="page-controls">
                <view class="page-btn prev" @click="prevPage">
                    <u-icon name="arrow-left" size="14"></u-icon>
                </view>
                <text 
                    v-for="page in displayPages" 
                    :key="page"
                    class="page-num"
                    :class="{'active': currentPage === page}"
                    @click="goToPage(page)"
                >{{page}}</text>
                <text v-if="hasMorePages" class="page-ellipsis">...</text>
                <text 
                    v-if="hasMorePages"
                    class="page-num" 
                    @click="goToPage(totalPages)"
                >{{totalPages}}</text>
                <view class="page-btn next" @click="nextPage">
                    <u-icon name="arrow-right" size="14"></u-icon>
                </view>
            </view>
        </view>
        
        <!-- 筛选弹窗 -->
        <u-popup mode="bottom" :show="show" @close="show = false">
            <view class="filter-popup">
                <view class="popup-header">
                    <text class="popup-title">筛选条件</text>
                    <view class="popup-close" @click="show = false">
                        <u-icon name="close" size="16"></u-icon>
                    </view>
                </view>
                <view class="popup-content">
                    <view class="filter-section">
                        <view class="section-title">出院科室</view>
                        <view class="section-options">
                            <view 
                                class="option-tag" 
                                v-for="(item, index) in departmentOptions" 
                                :key="index"
                                :class="{'selected': selectedDepartments.includes(item.value)}"
                                @click="toggleOption('department', item.value)"
                            >
                                {{item.label}}
                            </view>
                        </view>
                    </view>
                    <view class="filter-section">
                        <view class="section-title">患者性别</view>
                        <view class="section-options">
                            <view 
                                class="option-tag" 
                                v-for="(item, index) in genderOptions" 
                                :key="index"
                                :class="{'selected': selectedGenders.includes(item.value)}"
                                @click="toggleOption('gender', item.value)"
                            >
                                {{item.label}}
                            </view>
                        </view>
                    </view>
                </view>
                <view class="popup-footer">
                    <view class="footer-btn reset" @click="resetFilters">重置</view>
                    <view class="footer-btn confirm" @click="applyFilters">确认</view>
                </view>
            </view>
        </u-popup>


        <u-calendar
            :show="showCalendar"
            mode="range"
            @confirm="calendarConfirm"
            @close="calendarClose"
            startText="开始日期"
            endText="结束日期"
            confirmDisabledText="请选择结束日期"
        ></u-calendar>
    </view>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            showCalendar: false,
            activeDropdown: '',
            model: {
                rangeDate: ''
            },
            // 表格数据
            tableData: [
                { department: '产科', count: 15069, isCategory: false },
                { department: '儿科', count: 52635, isCategory: false },
                { department: '内分泌代谢科', count: 12365, isCategory: false },
                { department: '妇科', count: 156, isCategory: false },
                { department: '内分泌代谢科', count: 53336, isCategory: false },
                { department: '/', count: 156, isCategory: false },
                { department: '低倍病例', count: 156, isCategory: false },
                { department: '正常病例', count: 156, isCategory: false },
                { department: '高倍病例', count: 156, isCategory: false },
                { department: '列总计', count: 156, isCategory: false }
            ],
            // 分页数据
            currentPage: 1,
            pageSize: 10,
            totalItems: 25,
            totalPages: 6,
            // 筛选选项
            departmentOptions: [
                { label: '全部', value: 'all' },
                { label: '产科', value: 'obstetrics' },
                { label: '儿科', value: 'pediatrics' },
                { label: '内分泌代谢科', value: 'endocrinology' },
                { label: '妇科', value: 'gynecology' }
            ],
            genderOptions: [
                { label: '全部', value: 'all' },
                { label: '男', value: 'male' },
                { label: '女', value: 'female' }
            ],
            selectedDepartments: ['all'],
            selectedGenders: ['all']
        }
    },
    computed: {
        displayPages() {
            // 显示当前页附近的页码
            const pages = [];
            let start = Math.max(1, this.currentPage - 1);
            let end = Math.min(start + 2, this.totalPages);
            
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            
            return pages;
        },


        
        hasMorePages() {
            return this.totalPages > this.displayPages[this.displayPages.length - 1];
        }
    },
    methods: {
        hideKeyboard() {
            uni.hideKeyboard()
        },
        toggleDropdown(type) {
            this.activeDropdown = this.activeDropdown === type ? '' : type;
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.loadData();
            }
        },
        calendarConfirm(e) {
            this.showCalendar = false;
            this.model.rangeDate = `${e[0]} - ${e[e.length - 1]}`;
            this.$refs.form1.validateField('date')
        },
        calendarClose() {
            this.showCalendar = false;
            this.$refs.form1.validateField('date')
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.loadData();
            }
        },
        goToPage(page) {
            this.currentPage = page;
            this.loadData();
        },
        loadData() {
            // 实际开发中从接口获取数据
            // 这里使用模拟数据
        },
        toggleOption(type, value) {
            if (type === 'department') {
                if (value === 'all') {
                    this.selectedDepartments = ['all'];
                } else {
                    // 移除"全部"选项
                    if (this.selectedDepartments.includes('all')) {
                        this.selectedDepartments = [];
                    }
                    
                    if (this.selectedDepartments.includes(value)) {
                        this.selectedDepartments = this.selectedDepartments.filter(item => item !== value);
                    } else {
                        this.selectedDepartments.push(value);
                    }
                    
                    // 如果没有选中任何项，自动选中"全部"
                    if (this.selectedDepartments.length === 0) {
                        this.selectedDepartments = ['all'];
                    }
                }
            } else if (type === 'gender') {
                if (value === 'all') {
                    this.selectedGenders = ['all'];
                } else {
                    // 移除"全部"选项
                    if (this.selectedGenders.includes('all')) {
                        this.selectedGenders = [];
                    }
                    
                    if (this.selectedGenders.includes(value)) {
                        this.selectedGenders = this.selectedGenders.filter(item => item !== value);
                    } else {
                        this.selectedGenders.push(value);
                    }
                    
                    // 如果没有选中任何项，自动选中"全部"
                    if (this.selectedGenders.length === 0) {
                        this.selectedGenders = ['all'];
                    }
                }
            }
        },
        resetFilters() {
            this.selectedDepartments = ['all'];
            this.selectedGenders = ['all'];
        },
        applyFilters() {
            this.show = false;
            this.loadData();
        }
    },
    onLoad() {
        this.loadData();
    }
}
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f5f7fa;
}

.filter-container {
    background-color: #fff;
    padding: 20rpx;
    margin-bottom: 20rpx;
}

.filter-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
}

.filter-item {
    display: flex;
    align-items: center;
}

.date-filter {
    width: 100%;
}

.filter-label {
    font-size: 24rpx;
    color: #333;
    margin-right: 6rpx;
}

.filter-input {
    width: 200rpx;
    height: 60rpx;
    border: 1px solid #e5e5e5;
    border-radius: 8rpx;
    padding: 0 10rpx;
    font-size: 24rpx;
}

.to-text {
    margin: 0 10rpx;
    font-size: 24rpx;
    color: #666;
}

.search-btn {
    width: 58rpx;
    margin-left: 20rpx;
    padding: 20rpx 20rpx;
    background-color: #007AFF;
    color: #fff;
    border-radius: 8rpx;
    font-size: 24rpx;
}
.search-container {
    width: calc(100vw - 78rpx);
}

.filter-tags {
    display: flex;
    flex-wrap: wrap;
}

.tag-item {
    display: flex;
    align-items: center;
    padding: 6rpx 20rpx;
    border: 1px solid #e5e5e5;
    border-radius: 30rpx;
    margin-right: 20rpx;
    margin-bottom: 10rpx;
}

.tag-text {
    font-size: 24rpx;
    color: #333;
    margin-right: 6rpx;
}

.filter-actions {
    display: flex;
}

.filter-btn {
    display: flex;
    align-items: center;
    padding: 10rpx 20rpx;
}

.btn-text {
    font-size: 24rpx;
    color: #333;
    margin-left: 6rpx;
}

.filter-options {
    display: flex;
    justify-content: space-between;
    margin-top: 10rpx;
}

.option-item {
    display: flex;
    align-items: center;
}

.option-text {
    font-size: 24rpx;
    color: #666;
    margin-left: 6rpx;
}

.active .option-text {
    color: #007AFF;
}

.table-header {
    padding: 20rpx;
    background-color: #fff;
    margin-bottom: 2rpx;
    border-bottom: 1px solid #f0f0f0;
}

.header-title {
    font-size: 28rpx;
    font-weight: 500;
    color: #333;
    padding-left: 10rpx;
}

.table-container {
    background-color: #f5f7fa;
    overflow-y: auto;
    padding: 15rpx;
}

.table {
    padding: 0;
    border-radius: 12rpx;
    overflow: hidden;
    box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
    margin: 0 5rpx;
    background-color: #fff;
}

.table-head {
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    background-color: #0086f6;
    border-top-left-radius: 12rpx;
    border-top-right-radius: 12rpx;
}

.head-cell {
    padding: 25rpx 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dept {
    flex: 3;
}

.count {
    flex: 1;
}

.cell-text {
    font-size: 26rpx;
    color: #333;
    font-weight: normal;
}
.cell-header-text {
    font-size: 26rpx;
    color: #ffffff;
    font-weight: 500;
}

.table-body {
    background-color: #fff;
}

.table-row {
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    border-right: 1px solid #f5f5f5;
    border-left: 1px solid #f5f5f5;
}

.table-row:last-child {
    border-bottom-left-radius: 12rpx;
    border-bottom-right-radius: 12rpx;
}

.body-cell {
    padding: 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
}

.case-type {
    color: #007AFF;
}

.pagination {
    padding: 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
}

.page-info {
    font-size: 24rpx;
    color: #666;
}

.page-controls {
    display: flex;
    align-items: center;
}

.page-btn {
    width: 60rpx;
    height: 60rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e5e5;
    border-radius: 6rpx;
    margin: 0 5rpx;
}

.page-num {
    width: 60rpx;
    height: 60rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e5e5;
    border-radius: 6rpx;
    margin: 0 5rpx;
    font-size: 24rpx;
    color: #333;
}

.page-num.active {
    background-color: #007AFF;
    color: #fff;
    border-color: #007AFF;
}

.page-ellipsis {
    width: 60rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24rpx;
    color: #333;
}

.filter-popup {
    background-color: #fff;
    border-top-left-radius: 20rpx;
    border-top-right-radius: 20rpx;
}

.popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30rpx;
    border-bottom: 1px solid #f5f5f5;
}

.popup-title {
    font-size: 32rpx;
    font-weight: bold;
    color: #333;
}

.popup-content {
    padding: 30rpx;
    max-height: 60vh;
    overflow-y: auto;
}

.filter-section {
    margin-bottom: 40rpx;
}

.section-title {
    font-size: 28rpx;
    font-weight: 500;
    color: #333;
    margin-bottom: 20rpx;
}

.section-options {
    display: flex;
    flex-wrap: wrap;
}

.option-tag {
    padding: 12rpx 30rpx;
    border: 1px solid #e5e5e5;
    border-radius: 30rpx;
    margin-right: 20rpx;
    margin-bottom: 20rpx;
    font-size: 26rpx;
    color: #333;
}

.option-tag.selected {
    background-color: #e6f4ff;
    color: #007AFF;
    border-color: #007AFF;
}

.popup-footer {
    display: flex;
    border-top: 1px solid #f5f5f5;
    padding: 20rpx;
}

.footer-btn {
    flex: 1;
    height: 80rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10rpx;
    font-size: 28rpx;
}

.reset {
    background-color: #f5f5f5;
    color: #666;
    margin-right: 20rpx;
}

.confirm {
    background-color: #007AFF;
    color: #fff;
}
</style>
export default {
    // 登录相关路由
    loginUri: "pages/login/index",
    freeLoginUri: "pages/freeLogin/index",
    codeLoginUri: 'pages/codeLogin/index',
    
    // 主页相关路由
    indexUri: "pages/index/index",

    // DIP管理路由

    dipManagerUri: "pages/dipManager/index",
    // 部门管理路由
    departmentUri: "pages/department/index",


    
    // 可以添加路由跳转方法
    toLogin(options = {}) {
        uni.navigateTo({
            url: '/' + this.loginUri,
            ...options
        });
    },

    //添加跳转DIP路由的方法
    toDipManager(options = {}) {
        uni.switchTab({
            url: '/' + this.dipManagerUri,
            ...options
        });
    },
    
    //添加跳转科室盈亏分析路由的方法
    toDepartment(options = {}) {
        uni.switchTab({
            url: '/' + this.departmentUri,
            ...options
        });
    },
    



    
    toFreeLogin(options = {}) {
        uni.navigateTo({
            url: '/' + this.freeLoginUri,
            ...options
        });
    },

    toCodeLogin(options = {}) {
        uni.navigateTo({
            url: '/' + this.codeLoginUri,
            ...options
        })
    },
    
    toIndex(options = {}) {
        uni.switchTab({
            url: '/' + this.indexUri,
            ...options
        });
    }
}
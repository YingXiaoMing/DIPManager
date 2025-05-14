# tailwind css


- 官方文档： [点击前往](https://tailwindcss.com/)
- 作者其它插件：
	- [tailwind 纯css版](https://ext.dcloud.net.cn/plugin?id=11731)
	- [jc-scroll-indicator 滚动指示器](https://ext.dcloud.net.cn/plugin?id=11921)
	- [jc-scroll-tabs](https://ext.dcloud.net.cn/plugin?id=11943)
	- [jc-form](https://ext.dcloud.net.cn/plugin?id=12174)
	- [jc-modal](https://ext.dcloud.net.cn/plugin?id=12276)
	- [jc-pager](https://ext.dcloud.net.cn/plugin?id=12362)

> 支持：H5、微信小程序（其他小程序未测试）
> 小程序不支持class中含有 / . 等特殊符号，会被转换为空格。所以有以下改动

-  ```/``` 变为 _ 例如 ```w-1/2 变为 w-1_2``` 
- ```.``` 变为 - 例如 ```w-2.5 变为 w-2-5```
- 渐变色位置 例如 ```from-0-5```
- 颜色透明度只支持black和white ```/``` 变为双下划线 ```__``` 例如 ```bg-black/50``` 变为 ```bg-black__50``` 支持的属性有 ```bg-``` ```text-``` ```border-``` ```active-``` 相要使用其他颜色透明度需要自行设置如： ```@include setOpacity('bg-red-500', --bg-opacity)```


#### 颜色透明度变量

```css
--bg-opacity // 背景
--text-opacity // 文字
--border-opacity // 边框
--from-opacity // 渐变起点
--to-opacity // 渐变终点
--shadow-opacity // 阴影
--active-opacity // 活动
```


### 引入方式

* 1、 App.vue 引入基础样式（注意style标签需声明scss属性支持）

```html
<style lang="scss">
	@import "./uni_modules/jc-tailwind/index.scss";
</style>
```


* 2、 查看示例

```html
<template>
	<jc-tailwind />
</template>
```


* 3、 可以自定义项目颜色，支持透明度的写法如下

```html
	[class*='bg-xx'] {background-color: rgb(0 178 106 / var(--bg-opacity));}
	[class*='text-xx'] {color: rgb(0 178 106 / var(--text-opacity));}
	[class*='border-xx'] {border-color: rgb(0 178 106 / var(--border-opacity));}
	//设置透明度
	@include setOpacity('bg-xx', --bg-opacity);
	@include setOpacity('text-xx', --text-opacity);
	@include setOpacity('border-xx', --border-opacity);
```


<script setup>
	import useVars from '../../hooks/useVars.js'
	import useColor from '../../hooks/useColor.js'

	const { pxs, percents, border_radius, xls, opacitys } = useVars()
	const { colors, color } = useColor()

	function copy(data) {
		uni.setClipboardData({ data: `${data}` })
	}
</script>

<template>
	<JcDemo :hasShowClass="false" title="透明度">
		<template v-for="d, i in opacitys" :key="i">
			<view class="px-2 py-1 border-b border-slate-100" @tap="copy(d.opacity)">
				{{d.value}}  
				<text class="text-slate-300 text-xs font-mono ml-2">// {{d.calc}} = {{d.opacity}}</text>
			</view>
		</template>
	</JcDemo>
	
	<JcDemo :hasShowClass="false" title="尺寸">
		<template v-for="d, i in pxs" :key="i">
			<view class="px-2 py-1 border-b border-slate-100" @tap="copy(d.rpx)">
				{{d.value}}  
				<text class="text-slate-300 text-xs font-mono ml-2">// {{d.rpx}}rpx</text>
			</view>
		</template>
	</JcDemo>
	
	<JcDemo :hasShowClass="false" title="百分比">
		<template v-for="d, i in percents" :key="i">
			<view class="px-2 py-1 border-b border-slate-100" @tap="copy(d.percent)">
				{{d.value}}
				<text class="text-slate-300 text-xs font-mono ml-2">// {{d.percent}}</text>
			</view>
		</template>
	</JcDemo>
	
	<JcDemo :hasShowClass="false" title="圆角">
		<template v-for="d, i in border_radius" :key="i">
			<view class="px-2 py-1 border-b border-slate-100" @tap="copy(d.rpx)">
				{{d.value}}
				<text class="text-slate-300 text-xs font-mono ml-2">// {{d.rpx}}rpx</text>
			</view>
		</template>
	</JcDemo>
	
	<JcDemo :hasShowClass="false" title="文字">
		<template v-for="d, i in xls" :key="i">
			<view class="px-2 py-1 border-b border-slate-100" @tap="copy(d.rpx)">
				{{d.value}}
				<text class="text-slate-300 text-xs font-mono ml-2">// {{d.rpx}}</text>
			</view>
		</template>
	</JcDemo>
	
	<JcDemo :hasShowClass="false" title="颜色">
		<template v-for="d, i in color" :key="i">
			<view class="px-2 py-1 border-b border-slate-100 flex items-center" @tap="copy(d.color)">
				{{d.value}}  
				<text class="text-slate-300 text-xs font-mono ml-2">// {{d.color}}</text>
				<text class="w-6 h-6 ml-4 border border-slate-200" :style="{background: d.color}"></text>
			</view>
		</template>
	</JcDemo>
	
	
</template>

<style>
</style>
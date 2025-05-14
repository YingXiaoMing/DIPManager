<script setup>
	import { onMounted, ref } from "vue"
	
	import useColor from '../../hooks/useColor.js'
	import useVars from '../../hooks/useVars.js'
	
	const { colors, color } = useColor()
	const { pxs, percents } = useVars()
	
	// const baseColors = ['slate','gray','zinc','neutral','stone','red','orange','amber','yellow','lime','green','emerald','teal','cyan','sky','blue','indigo','violet','purple','fuchsia','pink','rose']
	const baseColors = ['red','orange','amber','yellow','lime','green','emerald','teal','cyan','sky','blue','indigo','violet','purple','fuchsia','pink','rose']
	
	const baseDir = ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
	
	function getRandColorName() {
		const index = ~~(Math.random() * baseColors.length)
		return baseColors[index]
	}
	
	function getRandDir() {
		const index = ~~(Math.random() * baseDir.length)
		return baseDir[index]
	}
	
	function getRandGradientColor() {
		return `bg-gradient-to-${getRandDir()} from-${getRandColorName()}-500 to-${getRandColorName()}-500 `
	}
	
	const lists = ref([
		{ bg: '', name: 'Variable', info: '预设变量' },
		{ bg: '', name: 'Layout', info: '布局' },
		{ bg: '', name: 'Flexbox & Grid', info: '弹性盒子 & 网格布局' },
		{ bg: '', name: 'Spacing', info: '间距' },
		{ bg: '', name: 'Sizing', info: '尺寸' },
		{ bg: '', name: 'Typography', info: '排版' },
		{ bg: '', name: 'Backgrounds', info: '背景' },
		{ bg: '', name: 'Borders', info: '边框' },
		{ bg: '', name: 'Effects', info: '效果' },
		{ bg: '', name: 'Filters', info: '滤镜' },
		{ bg: '', name: 'Transitions & Animation', info: '过渡与动画' },
		{ bg: '', name: 'Transforms', info: '变换' },
		{ bg: '', name: 'Interactivity', info: '互动' },
	])
	
	const current = ref('')
	
	function change(d) {
		current.value = d.name
	}
	
	function getRandBg() {
		lists.value.map((v) => {
			v.bg = getRandGradientColor()
			return v
		})
	}
	getRandBg()
	setInterval(getRandBg, 3000)
</script>

<template>
	<view class="bg-white">
		<template v-if="current">
			<view class="opacity-70 bg-slate-800 text-slate-100 flex items-center justify-center fixed bottom-5 right-5 w-14 h-14 rounded-full z-20" @tap="change({name: ''})">
				<text>返回</text>
			</view>
			
			<TwReadme v-if="current == 'Variable'" />
			<TwLayout v-if="current == 'Layout'" />
			<TwFlexboxGrid v-if="current == 'Flexbox & Grid'" />
			<TwSpacing v-if="current == 'Spacing'" />
			<TwSizing v-if="current == 'Sizing'" />
			<TwTypography v-if="current == 'Typography'" />
			<TwBackgrounds v-if="current == 'Backgrounds'" />
			<TwBorders v-if="current == 'Borders'" />
			<TwEffects v-if="current == 'Effects'" />
			<TwFilters v-if="current == 'Filters'" />
			<TwTransitionsAnimation v-if="current == 'Transitions & Animation'" />
			<TwTransforms v-if="current == 'Transforms'" />
			<TwInteractivity v-if="current == 'Interactivity'" />
		</template>
		<template v-else>
			<view class="p-2">
				<view class="grid grid-cols-2 gap-2">
					<template v-for="d, i in lists" :key="i">
						<view class="p-1 border border-slate-100 rounded flex flex-col justify-between" @tap="change(d)" :class="[d.name.length > 20 ? 'col-span-2' : '', d.bg]">
							<view class="bg-black__25 p-1 rounded">
								<view class="text-cyan-50 font-bold font-mono text-base flex-1">{{d.name}}</view>
								<view class="text-violet-200 mt-2 text-right">{{d.info}}</view>
							</view>
						</view>
					</template>
				</view>
			</view>
		</template>
	</view>
</template>

<style>
</style>
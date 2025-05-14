<script setup>
	import useBorders from '../../hooks/useBorders.js'
	const { BorderRadius, BorderWidth, BorderColor, BorderStyle, DivideWidth, DivideColor, DivideStyle, OutlineWidth, OutlineColor, OutlineStyle, OutlineOffset, RingWidth, RingColor, RingOffsetWidth, RingOffsetColor } = useBorders()
</script>

<template>
	<view>
		<JcDemo v-bind="BorderRadius">
			<view class="grid grid-cols-2 gap-4 text-white text-sm text-center font-bold leading-6">
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">rounded</view>
					<view class="p-4 shadow-sm bg-purple-500 w-16 h-16 rounded"></view>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">rounded-md</view>
					<view class="p-4 shadow-sm bg-purple-500 w-16 h-16 rounded-md"></view>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">rounded-lg</view>
					<view class="p-4 shadow-sm bg-purple-500 w-16 h-16 rounded-lg"></view>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">rounded-full</view>
					<view class="p-4 shadow-sm bg-purple-500 w-16 h-16 rounded-full"></view>
				</view>
			</view>
		</JcDemo>

		<JcDemo v-bind="BorderWidth">
			<div class="grid grid-cols-2 gap-4 text-white text-sm text-center font-bold leading-6">
				<div class="flex flex-col items-center shrink-0">
					<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border</p>
					<div class="p-4 shadow-sm bg-white w-16 h-16 border-indigo-600 border"></div>
				</div>
				<div class="flex flex-col items-center shrink-0">
					<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-2</p>
					<div class="p-4 shadow-sm bg-white w-16 h-16 border-indigo-600 border-2"></div>
				</div>
				<div class="flex flex-col items-center shrink-0">
					<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-4</p>
					<div class="p-4 shadow-sm bg-white w-16 h-16 border-indigo-600 border-4"></div>
				</div>
				<div class="flex flex-col items-center shrink-0">
					<p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-8</p>
					<div class="p-4 shadow-sm bg-white w-16 h-16 border-indigo-600 border-8"></div>
				</div>
			</div>
		</JcDemo>
		<JcDemo v-bind="BorderColor">
			<view class="relative rounded-xl overflow-auto p-8">
			<view class="max-w-xs mx-auto space-y-1">
				<view class="text-slate-900 text-sm font-medium">Email address</view>
				<view>
					<input type="text" placeholder="jane@example.com" class="font-sans block text-sm leading-5 py-2 px-3 border-2 border-rose-600 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-rose-200 focus:border-rose-500">
				</view>
			</view>
			</view>
		</JcDemo>
		<JcDemo v-bind="BorderStyle"></JcDemo>

		<!-- <JcDemo v-bind="DivideWidth"></JcDemo>
		<JcDemo v-bind="DivideColor"></JcDemo>
		<JcDemo v-bind="DivideStyle"></JcDemo>
		<JcDemo v-bind="OutlineWidth"></JcDemo>
		<JcDemo v-bind="OutlineColor"></JcDemo>
		<JcDemo v-bind="OutlineStyle"></JcDemo>
		<JcDemo v-bind="OutlineOffset"></JcDemo>
		<JcDemo v-bind="RingWidth"></JcDemo>
		<JcDemo v-bind="RingColor"></JcDemo>
		<JcDemo v-bind="RingOffsetWidth"></JcDemo>
		<JcDemo v-bind="RingOffsetColor"></JcDemo> -->
	</view>
</template>
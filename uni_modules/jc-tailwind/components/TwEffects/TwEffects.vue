<script setup>
	import useEffects from '../../hooks/useEffects.js'
	const { BoxShadow, BoxShadowColor, Opacity, MixBlendMode, BackgroundBlendMode } = useEffects()
</script>

<template>
	<view>
		<JcDemo v-bind="BoxShadow">
			<view class="grid grid-cols-2 gap-12 font-mono font-bold shrink-0 p-8">
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-md</view>
					<view class="w-24 h-24 rounded-lg bg-white shadow-md"></view>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-lg</view>
					<view class="w-24 h-24 rounded-lg bg-white shadow-lg"></view>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-xl</view>
					<view class="w-24 h-24 rounded-lg bg-white shadow-xl"></view>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-2xl</view>
					<view class="w-24 h-24 rounded-lg bg-white shadow-2xl"></view>
				</view>
			</view>

		</JcDemo>
		<JcDemo v-bind="BoxShadowColor">
			<view class="grid grid-cols-2 justify-center gap-2 p-4">
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-cyan-500</view>
					<button class="py-2 px-3 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-cyan-500 focus:outline-none">Subscribe</button>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-blue-500</view>
					<button class="py-2 px-3 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500 focus:outline-none">Subscribe</button>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-indigo-500</view>
					<button class="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500 focus:outline-none">Subscribe</button>
				</view>
			</view>
			
			<view class="grid grid-cols-2 justify-center gap-2 p-4 mt-2">
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-cyan-500__50</view>
					<view class="shadow-lg shadow-cyan-500__50 rounded-md">
						<button class="py-2 px-3 bg-cyan-500 text-white rounded-md text-sm font-semibold rounded-md ">Subscribe</button>
					</view>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-blue-500__50</view>
					<view class="shadow-lg shadow-blue-500__50 rounded-md">
						<button class="py-2 px-3 bg-blue-500 text-white rounded-md text-sm font-semibold rounded-md ">Subscribe</button>
					</view>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3">shadow-indigo-500__50</view>
					<view class="shadow-lg shadow-indigo-500__50 rounded-md">
						<button class="py-2 px-3 bg-indigo-500 text-white rounded-md text-sm font-semibold rounded-md ">Subscribe</button>
					</view>
				</view>
			</view>
		</JcDemo>
		<JcDemo v-bind="Opacity">
			<view class="grid grid-cols-2 items-center justify-center gap-8  text-white text-sm font-bold leading-6">
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">opacity-100</view>
					<button class="px-4 py-2 font-semibold text-sm bg-indigo-500 text-white rounded-md shadow-sm opacity-100">Button A</button>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">opacity-75</view>
					<button class="px-4 py-2 font-semibold text-sm bg-indigo-500 text-white rounded-md shadow-sm opacity-75">Button B</button>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">opacity-50</view>
					<button class="px-4 py-2 font-semibold text-sm bg-indigo-500 text-white rounded-md shadow-sm opacity-50">Button C</button>
				</view>
				<view class="flex flex-col items-center shrink-0">
					<view class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">opacity-25</view>
					<button class="px-4 py-2 font-semibold text-sm bg-indigo-500 text-white rounded-md shadow-sm opacity-25">Button D</button>
				</view>
			</view>
		</JcDemo>
		<!-- <JcDemo v-bind="MixBlendMode"></JcDemo> -->
		<!-- <JcDemo v-bind="BackgroundBlendMode"></JcDemo> -->
	</view>
</template>

<style>
</style>
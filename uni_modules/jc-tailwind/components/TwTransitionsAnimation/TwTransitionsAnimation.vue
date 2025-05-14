<script setup>
	import useTransitionsAnimation from '../../hooks/useTransitionsAnimation.js'
	const { TransitionProperty, TransitionDuration, TransitionTimingFunction, TransitionDelay, Animation } = useTransitionsAnimation()
</script>

<template>
	<view>
		<JcDemo v-bind="TransitionProperty"></JcDemo>
		<JcDemo v-bind="TransitionDuration"></JcDemo>
		<JcDemo v-bind="TransitionTimingFunction"></JcDemo>
		<JcDemo v-bind="TransitionDelay"></JcDemo>
		<JcDemo v-bind="Animation">
			<view class="text-lg p-2">Spin</view>
			<view class="flex items-center justify-center">
				<button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
					<text class="animate-spin -ml-1 mr-3 h-5 w-5 text-white border-2 border-indigo-50 border-t-transparent rounded-full"></text>
					Processing...
				</button>
			</view>

			<view class="text-lg p-2">Ping</view>
			<view class="flex items-center justify-center">
				<view class="relative inline-flex">
					<button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white  transition ease-in-out duration-150 cursor-not-allowed ring-1 ring-slate-900 " disabled="">
						Transactions
					</button>
					<view class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
						<text class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></text>
						<text class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></text>
					</view>
				</view>
			</view>

			<view class="text-lg p-2">Pulse</view>
			<view class="bg-white  p-4  rounded-lg shadow-lg max-w-xs w-full h-28">
				<view class="flex space-x-4 animate-pulse">
					<view class="rounded-full bg-slate-200 h-10 w-10"></view>
					<view class="flex-1 space-y-6 py-1">
						<view class="h-2 bg-slate-200 rounded"></view>
						<view class="space-y-3">
							<view class="grid grid-cols-3 gap-4">
								<view class="h-2 bg-slate-200 rounded col-span-2"></view>
								<view class="h-2 bg-slate-200 rounded col-span-1"></view>
							</view>
							<view class="h-2 bg-slate-200 rounded"></view>
						</view>
					</view>
				</view>
			</view>

			<view class="text-lg p-2">Bounce</view>
			<view class="animate-bounce bg-white  p-2 w-10 h-10 ring-1 ring-slate-900  shadow-lg rounded-full flex items-center justify-center"></view>
		</JcDemo>
	</view>
</template>

<style>
</style>
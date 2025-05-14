<script setup>
	import useSpacing from '../../hooks/useSpacing.js'

	const { Padding, Margin, SpaceBetween } = useSpacing()
</script>

<template>
	<view>
		<JcDemo v-bind="Padding">
			<view class="grid grid-cols-4 gap-2 text-white font-mono text-center">
				<view class="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
					<view class="h-6 bg-stripes-white rounded-t-lg"></view>
					<view class="p-4">pt-6</view>
				</view>

				<view class="flex bg-purple-500 shadow-lg rounded-lg overflow-hidden">
					<view class="flex-1 flex items-center justify-center">pr-4</view>
					<view class="w-4 bg-stripes-white rounded-r"></view>
				</view>

				<view class="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
					<view class="p-4">pb-8</view>
					<view class="h-8 bg-stripes-white rounded-b-lg"></view>
				</view>

				<view class="flex bg-purple-500 shadow-lg rounded-lg overflow-hidden">
					<view class="w-2 bg-stripes-white rounded-l"></view>
					<view class="flex-1 flex items-center justify-center">pl-2</view>
				</view>
			</view>

			<view class="flex justify-center font-mono text-white text-sm font-bold leading-6">
				<view class="flex bg-indigo-500 shadow-lg rounded-lg overflow-hidden text-white mt-2 font-mono">
					<view class="w-8 bg-stripes-white"></view>
					<view class="flex-1 p-4 text-center">px-8</view>
					<view class="w-8 bg-stripes-white"></view>
				</view>
			</view>

			<view class="flex justify-center font-mono text-white text-sm font-bold leading-6">
				<view class="bg-pink-500 shadow-lg rounded-lg overflow-hidden text-white mt-2 font-mono">
					<view class="h-8 bg-stripes-white"></view>
					<view class="p-4 text-center">py-8</view>
					<view class="h-8 bg-stripes-white"></view>
				</view>
			</view>
		</JcDemo>

		<JcDemo v-bind="Margin"></JcDemo>

		<JcDemo v-bind="SpaceBetween">
			<view class="flex space-x-4  bg-stripes-indigo rounded-lg text-white bg-slate-200">
				<view class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">01</view>
				<view class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">02</view>
				<view class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">03</view>
			</view>
			<view class="flex flex-row-reverse space-x-4 space-x-reverse bg-stripes-cyan rounded-lg text-white bg-slate-300 mt-2">
				<view class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">01</view>
				<view class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">02</view>
				<view class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">03</view>
			</view>

			<view class="grid grid-cols-2 gap-2 mt-2">
				<view class="bg-slate-200">
					<view class="flex flex-col space-y-4 bg-stripes-indigo rounded-lg text-white">
						<view class="h-14 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">01</view>
						<view class="h-14 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">02</view>
						<view class="h-14 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">03</view>
					</view>
				</view>
				<view class="bg-slate-300">
					<view class="flex flex-col flex-col-reverse space-y-4 space-y-reverse bg-stripes-cyan rounded-lg text-white">
						<view class="h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">01</view>
						<view class="h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">02</view>
						<view class="h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">03</view>
					</view>
				</view>
			</view>
		</JcDemo>

	</view>
</template>



<style>
</style>
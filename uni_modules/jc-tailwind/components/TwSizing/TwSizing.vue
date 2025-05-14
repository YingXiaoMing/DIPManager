<script setup>
	import useSizing from '../../hooks/useSizing.js'

	const { Width, Height, MaxHeight } = useSizing()
</script>

<template>
	<view>
		<JcDemo v-bind="Width">
			<view class="relative rounded-xl overflow-auto">
				<view class="flex justify-center">
					<view class="space-y-2 font-mono font-bold text-xs text-center text-white">
						<view class="px-2 py-2 bg-blue-500 rounded-lg shadow-lg w-80 hidden sm:block">w-80</view>
						<view class="px-2 py-2 bg-blue-500 rounded-lg shadow-lg w-64 hidden sm:block">w-64</view>
						<view class="px-2 py-2 bg-blue-500 rounded-lg shadow-lg w-48">w-48</view>
						<view class="px-2 py-2 bg-blue-500 rounded-lg shadow-lg w-40">w-40</view>
						<view class="px-2 py-2 bg-blue-500 rounded-lg shadow-lg w-32">w-32</view>
						<view class="px-2 py-2 bg-blue-500 rounded-lg shadow-lg w-24">w-24</view>
					</view>
				</view>
			</view>


			<view class="relative rounded-xl overflow-auto mt-2">
				<view class="space-y-2 font-mono font-bold text-xs text-white">
					<view class="flex space-x-2">
						<view class="w-1_2 py-2 bg-violet-500 rounded-lg shadow-lg text-center">w-1_2</view>
						<view class="w-1_2 py-2 bg-violet-500 rounded-lg shadow-lg text-center">w-1_2</view>
					</view>
					<view class="flex space-x-2">
						<view class="w-2_5 py-2 bg-violet-500 rounded-lg shadow-lg text-center">w-2_5</view>
						<view class="w-3_5 py-2 bg-violet-500 rounded-lg shadow-lg text-center">w-3_5</view>
					</view>
					<view class="flex space-x-2">
						<view class="w-1_3 py-2 bg-violet-500 rounded-lg shadow-lg text-center">w-1_3</view>
						<view class="w-2_3 py-2 bg-violet-500 rounded-lg shadow-lg text-center">w-2_3</view>
					</view>
					<view class="space-x-2 hidden sm:flex">
						<view class="w-1_4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">w-1_4</view>
						<view class="w-3_4 py-2 bg-violet-500 rounded-lg shadow-lg text-center">w-3_4</view>
					</view>
					<view class="space-x-2 hidden sm:flex">
						<view class="w-1_5 py-2 bg-violet-500 rounded-lg shadow-lg text-center">w-1_5</view>
						<view class="w-4_5 py-2 bg-violet-500 rounded-lg shadow-lg text-center">w-4_5</view>
					</view>
					<view class="space-x-2 hidden sm:flex">
						<view class="w-1_6 py-2 bg-violet-500 rounded-lg shadow-lg text-center">w-1_6</view>
						<view class="w-5_6 py-2 bg-violet-500 rounded-lg shadow-lg text-center">w-5_6</view>
					</view>
					<view class="w-full py-2 bg-violet-500 rounded-lg shadow-lg text-center text-white font-mono">w-full</view>
				</view>
			</view>
		</JcDemo>
		<JcDemo v-bind="Height">
			<view class="flex justify-center items-end space-x-4 font-mono font-bold text-xs text-center text-white">
				<view class="w-8 bg-blue-500 rounded-lg shadow-lg h-96 relative">
					<view class="absolute w-8 bottom-6">
						<view class="-rotate-90">h-96</view>
					</view>
				</view>
				<view class="w-8 bg-blue-500 rounded-lg shadow-lg h-80 relative">
					<view class="absolute w-8 bottom-6">
						<view class="-rotate-90">h-80</view>
					</view>
				</view>
				<view class="w-8 bg-blue-500 rounded-lg shadow-lg h-64 relative">
					<view class="absolute w-8 bottom-6">
						<view class="-rotate-90">h-64</view>
					</view>
				</view>
				<view class="w-8 bg-blue-500 rounded-lg shadow-lg h-48 relative">
					<view class="absolute w-8 bottom-6">
						<view class="-rotate-90">h-48</view>
					</view>
				</view>
				<view class="w-8 bg-blue-500 rounded-lg shadow-lg h-40 relative">
					<view class="absolute w-8 bottom-6">
						<view class="-rotate-90">h-40</view>
					</view>
				</view>
				<view class="w-8 bg-blue-500 rounded-lg shadow-lg h-32 relative">
					<view class="absolute w-8 bottom-6">
						<view class="-rotate-90">h-32</view>
					</view>
				</view>
				<view class="w-8 bg-blue-500 rounded-lg shadow-lg h-24 relative">
					<view class="absolute w-8 bottom-6">
						<view class="-rotate-90">h-24</view>
					</view>
				</view>
			</view>
		</JcDemo>
		
		<JcDemo v-bind="MaxHeight"></JcDemo>

	</view>
</template>



<style>
</style>
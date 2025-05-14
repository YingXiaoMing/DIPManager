<script setup>
	import useBackgrounds from '../../hooks/useBackgrounds.js'

	const { BackgroundAttachment, BackgroundClip, BackgroundColor, BackgroundOrigin, BackgroundPosition, BackgroundRepeat, BackgroundSize, BackgroundImage, GradientColorStops } = useBackgrounds()
</script>

<template>
	<view>
		<JcDemo v-bind="BackgroundAttachment"></JcDemo>
		<JcDemo v-bind="BackgroundClip"></JcDemo>
		<JcDemo v-bind="BackgroundColor">
			<view class="gap-4 grid grid-cols-2">
				<view class="h-14 text-white flex items-center justify-center shadow-lg rounded-lg bg-black">bg-black</view>
				<view class="h-14 text-white flex items-center justify-center shadow-lg rounded-lg bg-black__50"><text class="text-white">bg-black__50</text></view>
				<view class="h-14 flex text-white shadow-lg rounded-lg bg-black">
					<view class="flex-1 m-2 text-black flex items-center justify-center shadow-lg rounded-lg bg-white">bg-white</view>
				</view>
				<view class="h-14 flex text-white shadow-lg rounded-lg bg-black">
					<view class="flex-1 m-2 text-black flex items-center justify-center shadow-lg rounded-lg bg-white__50">bg-white__50</view>
				</view>
				
				<template v-for="d, i in ['slate','gray','zinc','neutral','stone','red','orange','amber','yellow','lime','green','emerald','teal','cyan','sky','blue','indigo','violet','purple','fuchsia','pink','rose']" :key="i">
					<view class="h-14 text-white flex items-center justify-center shadow-lg rounded-lg" :class="`bg-${d}-500`">bg-{{d}}-500</view>
				</template>
				
				<view class="h-14 flex items-center justify-center shadow-lg rounded-lg bg-stripes-indigo">bg-stripes-indigo</view>
				<view class="h-14 flex items-center justify-center bg-indigo-500 bg-stripes-white rounded-lg text-white"></view>
				
			</view>
		</JcDemo>
		<JcDemo v-bind="BackgroundOrigin"></JcDemo>
		<JcDemo v-bind="BackgroundPosition"></JcDemo>
		<JcDemo v-bind="BackgroundRepeat"></JcDemo>
		<JcDemo v-bind="BackgroundSize"></JcDemo>
		<JcDemo v-bind="BackgroundImage">
			<view class="space-y-4">
				<view class="h-14 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"></view>
				<view class="h-14 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500"></view>
				<view class="h-14 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500"></view>
				<view class="h-14 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"></view>
			</view>

			<view class="space-y-4 mt-4">
				<view class="h-14 rounded-lg bg-gradient-to-t from-pink-500 to-blue-500 from-0-5 to-0-5"></view>
				<view class="h-14 rounded-lg bg-gradient-to-tr from-pink-500 to-blue-500 from-0-5 to-0-5"></view>
				<view class="h-14 rounded-lg bg-gradient-to-r from-pink-500 to-blue-500 from-0-5 to-0-5"></view>
				<view class="h-14 rounded-lg bg-gradient-to-br from-pink-500 to-blue-500 from-0-5 to-0-5"></view>
				<view class="h-14 rounded-lg bg-gradient-to-b from-pink-500 to-blue-500 from-0-5 to-0-5"></view>
				<view class="h-14 rounded-lg bg-gradient-to-bl from-pink-500 to-blue-500 from-0-5 to-0-5"></view>
				<view class="h-14 rounded-lg bg-gradient-to-l from-pink-500 to-blue-500 from-0-5 to-0-5"></view>
				<view class="h-14 rounded-lg bg-gradient-to-tl from-pink-500 to-blue-500 from-0-5 to-0-5"></view>
			</view>
		</JcDemo>
		<JcDemo v-bind="GradientColorStops">
			<view class="space-y-4">
				<view class="h-10 rounded-lg bg-gradient-to-r from-blue-500"></view>
				<view class="h-10 rounded-lg bg-gradient-to-r from-red-500 to-blue-500 to-0-2"></view>
				<view class="h-10 rounded-lg bg-gradient-to-r from-red-500 to-blue-500 to-0-3"></view>
				<view class="h-10 rounded-lg bg-gradient-to-r from-red-500 to-blue-500 to-0-4"></view>
				<view class="h-10 rounded-lg bg-gradient-to-r from-red-500 to-blue-500 to-0-5"></view>
				<view class="h-10 rounded-lg bg-gradient-to-r from-red-500 to-blue-500 to-0-6"></view>
				<view class="h-10 rounded-lg bg-gradient-to-r from-red-500 to-blue-500 to-0-7"></view>
				<view class="h-10 rounded-lg bg-gradient-to-r from-red-500 to-blue-500 to-0-8"></view>
				<view class="h-10 rounded-lg bg-gradient-to-r from-red-500 to-blue-500 to-0-9"></view>
			</view>
		</JcDemo>
	</view>
</template>



<style>
</style>
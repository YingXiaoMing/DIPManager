<script setup>
	import { computed, nextTick, ref } from "vue";
	const props = defineProps({
		title: '',
		classes: {
			default: []
		},
		scss: '',
		hasShowClass: {
			default: true
		}
	})
	
	const showClasses = ref(false)
	
	function toggleShowClasses() {
		showClasses.value = !showClasses.value
	}

	function copy({ name }) {
		uni.setClipboardData({
			data: name
		})
	}
</script>

<template>
	<view>
		<view class="p-2 sticky top-0 z-10 flex items-center bg-slate-100">
			<view class="flex-1 font-medium font-bold font-sans text-2xl">{{title}}</view>
			<view class="text-blue-500" @tap="toggleShowClasses" v-if="hasShowClass">查看</view>
		</view>
		<view class="p-2 bg-white" v-if="classes.length || $slots.default">
			<view class="border-b-2 border-slate-100 mb-3-5 " v-if="classes.length && showClasses">
				<view class="pb-2 flex items-center border-b-2 border-slate-100 text-slate-700 text-xs">
					<view class="flex-1 font-medium mr-2">Class</view>
					<view class="font-medium">Properties</view>
				</view>
				<view class="max-h-96 overflow-auto">
					<view v-for="d, i in classes" :key="i" @tap="copy(d)">
						<view class="p-2 border-slate-100 flex items-center font-mono text-xs whitespace-nowrap overflow-auto" :class="{'border-t': i > 0}">
							<view class="flex-1 text-sky-500 mr-6 flex items-center">
								<text class="mr-2 w-4 h-4" :style="{backgroundColor: d.bgcolor}" v-if="d.bgcolor != undefined" @tap.stop="copy({name: d.bgcolor})"></text>
								<text class="mr-2 font-medium text-base" :style="{color: d.textcolor}" v-if="d.textcolor != undefined" @tap.stop="copy({name: d.textcolor})">Aa</text>
								{{d.name}}
							</view>
							<view class="text-indigo-500">
								<view class="flex items-center" v-for="v, k in d.value" :key="k">
									<text>{{v.value ? v.value : v}}</text>
									<template v-if="v.value != undefined">
										<text class="text-indigo-300 ml-2" v-if="v.rpx != undefined">/* {{v.rpx}}rpx */</text>
										<text class="text-indigo-300 ml-2" v-if="v.percent != undefined">/* {{v.percent}} */</text>
										<text class="text-indigo-300 ml-2" v-if="v.desc != undefined">/* {{v.desc}} */</text>
									</template>
									<template v-else>
										<text class="text-indigo-300 ml-2" v-if="d.rpx != undefined">/* {{d.rpx}}rpx */</text>
										<text class="text-indigo-300 ml-2" v-if="d.percent != undefined">/* {{d.percent}} */</text>
										<text class="text-indigo-300 ml-2" v-if="d.desc != undefined">/* {{d.desc}} */</text>
									</template>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view :class="{'relative rounded-xl overflow-auto p-2 border border-slate-200 bg-slate-50 box-border': $slots.default}">
				<slot></slot>
			</view>
		</view>
	</view>
</template>
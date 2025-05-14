<script setup>
	import useInteractivity from '../../hooks/useInteractivity.js'
	const { AccentColor, Appearance, Cursor, CaretColor, PointerEvents, Resize, ScrollBehavior, ScrollMargin, ScrollPadding, ScrollSnapAlign, ScrollSnapStop, ScrollSnapType, TouchAction, xxx, UserSelect, WillChange } = useInteractivity()
</script>

<template>
	<view>
		<!-- <JcDemo v-bind="AccentColor"></JcDemo> -->
		<JcDemo v-bind="Appearance"></JcDemo>
		<!-- <JcDemo v-bind="Cursor"></JcDemo> -->
		<!-- <JcDemo v-bind="CaretColor"></JcDemo> -->
		<JcDemo v-bind="PointerEvents"></JcDemo>
		<!-- <JcDemo v-bind="Resize"></JcDemo> -->
		<JcDemo v-bind="ScrollBehavior"></JcDemo>
		<!-- <JcDemo v-bind="ScrollMargin"></JcDemo>
		<JcDemo v-bind="ScrollPadding"></JcDemo>
		<JcDemo v-bind="ScrollSnapAlign"></JcDemo>
		<JcDemo v-bind="ScrollSnapStop"></JcDemo>
		<JcDemo v-bind="ScrollSnapType"></JcDemo>
		<JcDemo v-bind="TouchAction"></JcDemo> -->
		<JcDemo v-bind="UserSelect"></JcDemo>
		<JcDemo v-bind="WillChange"></JcDemo>
	</view>
</template>



<style>
</style>
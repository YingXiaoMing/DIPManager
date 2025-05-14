<script setup>
	import useLayout from '../../hooks/useLayout.js'

	const { AspectRatio1, AspectRatio, BoxSizing, Display, Floats, Clear, Isolation, ObjectFit, ObjectPosition, Overflow, OverscrollBehavior, Position, TopRightBottomLeft, Visibility, ZIndex } = useLayout()
</script>

<template>
	<view>
		<JcDemo v-bind="AspectRatio"></JcDemo>

		<!-- <JcDemo title="Container"></JcDemo>
		<JcDemo title="Columns"></JcDemo>
		<JcDemo title="Break After"></JcDemo>
		<JcDemo title="Break Before"></JcDemo>
		<JcDemo title="Break Inside"></JcDemo>
		<JcDemo title="Box Decoration Break"></JcDemo> -->

		<JcDemo v-bind="BoxSizing"></JcDemo>
		<JcDemo v-bind="Display" :col="3"></JcDemo>
		<JcDemo v-bind="Floats"></JcDemo>
		<JcDemo v-bind="Clear"></JcDemo>
		<JcDemo v-bind="Isolation"></JcDemo>
		<JcDemo v-bind="ObjectFit"></JcDemo>
		<JcDemo v-bind="ObjectPosition"></JcDemo>
		<JcDemo v-bind="Overflow"></JcDemo>
		<JcDemo v-bind="OverscrollBehavior"></JcDemo>
		<JcDemo v-bind="Position"></JcDemo>
		<JcDemo v-bind="TopRightBottomLeft"></JcDemo>
		<JcDemo v-bind="Visibility"></JcDemo>
		<JcDemo v-bind="ZIndex"></JcDemo>
	</view>
</template>



<style>
</style>
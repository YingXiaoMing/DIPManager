<script setup>
	import useSizes from '../../hooks/useSizes.js'
	import useFlexboxGrid from '../../hooks/useFlexboxGrid.js'
	
	const { Sizes, Percents, Xls, Pxs, Pcts } = useSizes()
	
	const {
		FlexBasis,
		FlexDirection,
		FlexWrap,
		Flex,
		FlexGrow,
		FlexShrink,
		Order,
		GridTemplateColumns,
		GridColumnStartEnd,
		GridTemplateRows,
		GridRowStartEnd,
		GridAutoFlow,
		GridAutoColumns,
		GridAutoRows,
		Gap,
		JustifyContent,
		JustifyItems,
		JustifySelf,
		AlignContent,
		AlignItems,
		AlignSelf,
		PlaceContent,
		PlaceItems,
		PlaceSelf
	} = useFlexboxGrid()
</script>

<template>
	<view>
		<JcDemo v-bind="FlexBasis"></JcDemo>
		<JcDemo v-bind="FlexDirection"></JcDemo>
		<JcDemo v-bind="FlexWrap" />
		<JcDemo v-bind="Flex" />
		<JcDemo v-bind="FlexGrow" />
		<JcDemo v-bind="FlexShrink" />
		<JcDemo v-bind="Order" />
		<JcDemo v-bind="GridTemplateColumns" />
		<JcDemo v-bind="GridColumnStartEnd" />
		<JcDemo v-bind="GridTemplateRows" />
		<JcDemo v-bind="GridRowStartEnd" />
		<JcDemo v-bind="GridAutoFlow" />
		<JcDemo v-bind="GridAutoColumns" />
		<JcDemo v-bind="GridAutoRows" />
		<JcDemo v-bind="Gap" />
		<JcDemo v-bind="JustifyContent" />
		<JcDemo v-bind="JustifyItems" />
		<JcDemo v-bind="JustifySelf" />
		<JcDemo v-bind="AlignContent" />
		<JcDemo v-bind="AlignItems" />
		<JcDemo v-bind="AlignSelf" />
		<JcDemo v-bind="PlaceContent" />
		<JcDemo v-bind="PlaceItems" />
		<JcDemo v-bind="PlaceSelf" />
	</view>
</template>



<style>
</style>
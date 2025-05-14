<script setup>
	import useFilters from '../../hooks/useFilters.js'
	const { Blur, Brightness, Contrast, DropShadow, Grayscale, HueRotate, Invert, Saturate, Sepia, BackdropBlur, BackdropBrightness, BackdropContrast, BackdropGrayscale, BackdropHueRotate, BackdropInvert, BackdropOpacity, BackdropSaturate, BackdropSepia } = useFilters()
</script>

<template>
	<view>
		<JcDemo v-bind="Blur"></JcDemo>
		<!-- <JcDemo v-bind="Brightness"></JcDemo> -->
		<!-- <JcDemo v-bind="Contrast"></JcDemo> -->
		<JcDemo v-bind="DropShadow"></JcDemo>
		<!-- <JcDemo v-bind="Grayscale"></JcDemo> -->
		<!-- <JcDemo v-bind="HueRotate"></JcDemo> -->
		<!-- <JcDemo v-bind="Invert"></JcDemo> -->
		<!-- <JcDemo v-bind="Saturate"></JcDemo> -->
		<!-- <JcDemo v-bind="Sepia"></JcDemo> -->
		<JcDemo v-bind="BackdropBlur"></JcDemo>
		<!-- <JcDemo v-bind="BackdropBrightness"></JcDemo> -->
		<!-- <JcDemo v-bind="BackdropContrast"></JcDemo> -->
		<!-- <JcDemo v-bind="BackdropGrayscale"></JcDemo> -->
		<!-- <JcDemo v-bind="BackdropHueRotate"></JcDemo> -->
		<!-- <JcDemo v-bind="BackdropInvert"></JcDemo> -->
		<JcDemo v-bind="BackdropOpacity"></JcDemo>
		<!-- <JcDemo v-bind="BackdropSaturate"></JcDemo> -->
		<!-- <JcDemo v-bind="BackdropSepia"></JcDemo> -->
	</view>
</template>

<style>
</style>
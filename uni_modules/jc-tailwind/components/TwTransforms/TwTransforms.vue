<script setup>
	import useTransforms from '../../hooks/useTransforms.js'
	
	const { Scale, Rotate, Translate, Skew, TransformOrigin } = useTransforms()
</script>

<template>
	<view>
		<JcDemo v-bind="Scale"></JcDemo>
		<JcDemo v-bind="Rotate"></JcDemo>
		<JcDemo v-bind="Translate"></JcDemo>
		<JcDemo v-bind="Skew"></JcDemo>
		<JcDemo v-bind="TransformOrigin"></JcDemo>
	</view>
</template>



<style>
</style>
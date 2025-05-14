<script setup>
	import useTypography from '../../hooks/useTypography.js'
	const {
		FontFamily,
		FontSize,
		FontSmoothing,
		FontStyle,
		FontWeight,
		FontVariantNumeric,
		LetterSpacing,
		LineClamp,
		LineHeight,
		ListStyleImage,
		ListStylePosition,
		ListStyleType,
		TextAlign,
		TextColor,
		TextDecoration,
		TextDecorationColor,
		TextDecorationStyle,
		TextDecorationThickness,
		TextUnderlineOffset,
		TextTransform,
		TextOverflow,
		TextIndent,
		VerticalAlign,
		Whitespace,
		WordBreak,
		Hyphens,
		Content
	} = useTypography()
</script>

<template>
	<view>
		<JcDemo v-bind="FontFamily"></JcDemo>
		<JcDemo v-bind="FontSize">
			<view class="flex flex-col gap-8">
				<view>
					<text class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">text-sm</text>
					<view class="text-sm font-medium text-slate-900 dark:text-slate-200">
						The quick brown fox jumps over the lazy dog.
					</view>
				</view>
				<view>
					<text class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">text-base</text>
					<view class="text-base font-medium text-slate-900 dark:text-slate-200">
						The quick brown fox jumps over the lazy dog.
					</view>
				</view>
				<view>
					<text class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">text-lg</text>
					<view class="text-lg font-medium text-slate-900 dark:text-slate-200">
						The quick brown fox jumps over the lazy dog.
					</view>
				</view>
				<view>
					<text class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">text-xl</text>
					<view class="text-xl font-medium text-slate-900 dark:text-slate-200">
						The quick brown fox jumps over the lazy dog.
					</view>
				</view>
				<view>
					<text class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">text-2xl</text>
					<view class="text-2xl font-medium text-slate-900 dark:text-slate-200">
						The quick brown fox jumps over the lazy dog.
					</view>
				</view>
			</view>
		</JcDemo>
		<!-- <JcDemo v-bind="FontSmoothing"></JcDemo> -->
		<JcDemo v-bind="FontStyle"></JcDemo>
		<JcDemo v-bind="FontWeight"></JcDemo>
		<JcDemo v-bind="FontVariantNumeric"></JcDemo>
		<JcDemo v-bind="LetterSpacing">
			<view class="flex flex-col gap-8">
				<view>
					<text class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">tracking-tight</text>
					<view class="tracking-tight text-lg font-medium text-slate-900 dark:text-slate-200">
						The quick brown fox jumps over the lazy dog.
					</view>
				</view>
				<view>
					<text class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">tracking-normal</text>
					<view class="tracking-normal text-lg font-medium text-slate-900 dark:text-slate-200">
						The quick brown fox jumps over the lazy dog.
					</view>
				</view>
				<view>
					<text class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">tracking-wide</text>
					<view class="tracking-wide text-lg font-medium text-slate-900 dark:text-slate-200">
						The quick brown fox jumps over the lazy dog.
					</view>
				</view>
			</view>
		</JcDemo>
		<JcDemo v-bind="LineClamp">
			<view class="mx-auto max-w-sm bg-white p-8 text-sm leading-6 text-slate-700 shadow-xl ">
				<view datetime="2020-03-16" class="block text-sm leading-6 text-slate-500 ">Mar 10, 2020</view>
				<view class="mt-2 text-lg font-semibold text-slate-900 ">Boost your conversion rate</view>
				<view class="line-clamp-3 mt-4 text-sm leading-6 text-slate-500 ">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</view>
				<view class="mt-4 flex gap-x-2.5 text-sm font-semibold leading-6 text-slate-900 ">
					<img class="h-6 w-6 flex-none rounded-full bg-slate-50 " src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
					Lindsay Walton
				</view>
			</view>
		</JcDemo>
		<JcDemo v-bind="LineHeight"></JcDemo>
		<!-- <JcDemo v-bind="ListStyleImage"></JcDemo> -->
		<!-- <JcDemo v-bind="ListStylePosition"></JcDemo> -->
		<!-- <JcDemo v-bind="ListStyleType"></JcDemo> -->
		<JcDemo v-bind="TextAlign">
			<view class="space-y-2">
				<view class="text-left">text-left</view>
				<view class="text-center">text-center</view>
				<view class="text-right">text-right</view>
			</view>
		</JcDemo>
		<JcDemo v-bind="TextColor">
			<view class="text-xl font-medium leading-6 space-y-2">
				<view class="text-blue-600">The quick brown fox jumps over the lazy dog.</view>
				<view class="text-blue-500">The quick brown fox jumps over the lazy dog.</view>
				<view class="text-blue-400">The quick brown fox jumps over the lazy dog.</view>
				<view class="text-blue-300">The quick brown fox jumps over the lazy dog.</view>
				<view class="text-blue-200">The quick brown fox jumps over the lazy dog.</view>
				<view class="text-blue-100">The quick brown fox jumps over the lazy dog.</view>
			</view>
			<view class="p-2 my-2 bg-black__5">透明度[只支持white,black]</view>
			<view class="text-xl font-medium leading-6 space-y-2">
				<view class="text-black">The quick brown fox jumps over the lazy dog.</view>
				<view class="text-black__75">The quick brown fox jumps over the lazy dog.</view>
				<view class="text-black__50">The quick brown fox jumps over the lazy dog.</view>
				<view class="text-black__5">The quick brown fox jumps over the lazy dog.</view>
			</view>
		</JcDemo>
		<JcDemo v-bind="TextDecoration"></JcDemo>
		<JcDemo v-bind="TextDecorationColor"></JcDemo>
		<JcDemo v-bind="TextDecorationStyle"></JcDemo>
		<JcDemo v-bind="TextDecorationThickness"></JcDemo>
		<JcDemo v-bind="TextUnderlineOffset"></JcDemo>
		<JcDemo v-bind="TextTransform"></JcDemo>
		<JcDemo v-bind="TextOverflow">
			<view class="truncate">
				The longest word in any of the major English language dictionaries is <text class="text-slate-900 font-medium">pneumonoultramicroscopicsilicovolcanoconiosis,</text> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
			</view>
		</JcDemo>
		<JcDemo v-bind="TextIndent"></JcDemo>
		<JcDemo v-bind="VerticalAlign"></JcDemo>
		<JcDemo v-bind="Whitespace"></JcDemo>
		<JcDemo v-bind="WordBreak"></JcDemo>
		<JcDemo v-bind="Hyphens"></JcDemo>
		<JcDemo v-bind="Content"></JcDemo>
	</view>
</template>



<style>
</style>
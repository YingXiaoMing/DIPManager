import useVars from './useVars.js'
import { getClasses } from '../utils/classes.js'
import useColor from './useColor.js'

function useHook() { // useFilters
	const { colors, color } = useColor()
	const { pxs, percents } = useVars()

	const Blur = {
		title: 'Blur',
		classes: getClasses([
			{ name: 'blur-none', value: 'blur(0)' },
			{ name: 'blur-sm', value: `blur(${4 * 2}rpx)` },
			{ name: 'blur', value: `blur(${8 * 2}rpx)` },
			{ name: 'blur-md', value: `blur(${12 * 2}rpx)` },
			{ name: 'blur-lg', value: `blur(${16 * 2}rpx)` },
			{ name: 'blur-xl', value: `blur(${24 * 2}rpx)` },
			{ name: 'blur-2xl', value: `blur(${40 * 2}rpx)` },
			{ name: 'blur-3xl', value: `blur(${64 * 2}rpx)` },
		], { name: '', value: 'filter', scss: 0 })
	}
	const Brightness = { title: 'Brightness', classes: [] }
	const Contrast = { title: 'Contrast', classes: [] }
	const DropShadow = {
		title: 'Drop Shadow',
		classes: getClasses([
			{ name: 'drop-shadow-sm', value: 'drop-shadow(0 1rpx 1rpx rgba(0, 0, 0, 0.05))' },
			{ name: 'drop-shadow', value: 'drop-shadow(0 1rpx 4rpx rgba(0, 0, 0, 0.1)) drop-shadow(0 1rpx 1rpx rgba(0, 0, 0, 0.06))' },
			{ name: 'drop-shadow-md', value: 'drop-shadow(0 8rpx 6rpx rgba(0, 0, 0, 0.07)) drop-shadow(0 4rpx 4rpx rgba(0, 0, 0, 0.06))' },
			{ name: 'drop-shadow-lg', value: 'drop-shadow(0 20rpx 16rpx rgba(0, 0, 0, 0.04)) drop-shadow(0 8rpx 6rpx rgba(0, 0, 0, 0.1))' },
			{ name: 'drop-shadow-xl', value: 'drop-shadow(0 40rpx 26rpx rgba(0, 0, 0, 0.03)) drop-shadow(0 16rpx 10rpx rgba(0, 0, 0, 0.08))' },
			{ name: 'drop-shadow-2xl', value: 'drop-shadow(0 50rpx 50rpx rgba(0, 0, 0, 0.15))' },
			{ name: 'drop-shadow-none', value: 'drop-shadow(0 0 rgba(0,0,0,0))' },
		], { name: '', value: 'filter', scss: 0 })
	}
	const Grayscale = { title: 'Grayscale', classes: [] }
	const HueRotate = { title: 'Hue Rotate', classes: [] }
	const Invert = { title: 'Invert', classes: [] }
	const Saturate = { title: 'Saturate', classes: [] }
	const Sepia = { title: 'Sepia', classes: [] }
	const BackdropBlur = {
		title: 'Backdrop Blur',
		classes: getClasses([
			{ name: 'none', value: `blur(0)` },
			{ name: 'sm', value: `blur(${4 * 2}rpx)` },
			{ name: '', value: `blur(${8 * 2}rpx)` },
			{ name: 'md', value: `blur(${12 * 2}rpx)` },
			{ name: 'lg', value: `blur(${16 * 2}rpx)` },
			{ name: 'xl', value: `blur(${24 * 2}rpx)` },
			{ name: '2xl', value: `blur(${40 * 2}rpx)` },
			{ name: '3xl', value: `blur(${64 * 2}rpx)` },
		], { name: 'backdrop-blur-', value: 'backdrop-filter', scss: 0 })
	}
	const BackdropBrightness = { title: 'Backdrop Brightness', classes: [] }
	const BackdropContrast = { title: 'Backdrop Contrast', classes: [] }
	const BackdropGrayscale = { title: 'Backdrop Grayscale', classes: [] }
	const BackdropHueRotate = { title: 'Backdrop Hue Rotate', classes: [] }
	const BackdropInvert = { title: 'Backdrop Invert', classes: [] }
	const BackdropOpacity = {
		title: 'Backdrop Opacity',
		classes: getClasses([0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100].map(d => {
			return {
				name: d,
				value: `opacity(${d / 100})`
			}
		}), { name: 'backdrop-opacity-', value: 'backdrop-filter', scss: 0 })
	}
	const BackdropSaturate = { title: 'Backdrop Saturate', classes: [] }
	const BackdropSepia = { title: 'Backdrop Sepia', classes: [] }

	return {
		Blur,
		Brightness,
		Contrast,
		DropShadow,
		Grayscale,
		HueRotate,
		Invert,
		Saturate,
		Sepia,
		BackdropBlur,
		BackdropBrightness,
		BackdropContrast,
		BackdropGrayscale,
		BackdropHueRotate,
		BackdropInvert,
		BackdropOpacity,
		BackdropSaturate,
		BackdropSepia
	}

}

export default useHook
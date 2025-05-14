import useVars from './useVars.js'
import { getClasses } from '../utils/classes.js'
import useColor from './useColor.js'

function useHook() { // useEffects
	const { colors, color } = useColor()
	const { pxs, percents } = useVars()

	const BoxShadow = {
		title: 'Box Shadow',
		classes: getClasses([
			{ name: 'shadow-sm', value: '0 1rpx 4rpx 0 rgba(0, 0, 0, 0.05)' },
			{ name: 'shadow', value: '0 1rpx 6rpx 0 rgba(0, 0, 0, 0.1), 0 1rpx 4rpx -1rpx rgba(0, 0, 0, 0.1)' },
			{ name: 'shadow-md', value: '0 8rpx 6px -1rpx rgba(0, 0, 0, 0.1), 0 4rpx 8rpx -4rpx rgba(0, 0, 0, 0.1)' },
			{ name: 'shadow-lg', value: '0 10px 15px -6rpx rgba(0, 0, 0, 0.1), 0 8rpx 6px -8rpx rgba(0, 0, 0, 0.1)' },
			{ name: 'shadow-xl', value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' },
			{ name: 'shadow-2xl', value: '0 25px 50px -24rpx rgba(0, 0, 0, 0.25)' },
			{ name: 'shadow-inner', value: 'inset 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.05)' },
			{ name: 'shadow-none', value: '0 0 #000' },
		], { name: '', value: 'box-shadow', scss: 0 })
	}
	
	const BoxShadowColor = {
		title: 'Box Shadow Color',
		classes: color.map(c => {
			return {
				...c,
				name: `shadow-${c.name}`,
				value: [`--shadow-color: ${c.value};`],
				desc: c.rgb,
			}
		})
	}

	const Opacity = {
		title: 'Opacity',
		classes: getClasses([0,5,10,20,25,30,40,50,60,70,75,80,90,95,100].map(d => {
			return {
				name: d,
				value: d / 100
			}
		}), { name: 'opacity-', value: 'opacity', scss: 0 })
	}
	const MixBlendMode = { title: 'Mix Blend Mode', classes: [] }
	const BackgroundBlendMode = { title: 'Background Blend Mode', classes: [] }

	return {
		BoxShadow,
		BoxShadowColor,
		Opacity,
		MixBlendMode,
		BackgroundBlendMode
	}

}

export default useHook
import useVars from './useVars.js'
import { getClasses } from '../utils/classes.js'


function useHook() { // useTypography
	const { pxs, percents } = useVars()

	const Scale = {
		title: 'Scale',
		classes: getClasses('0, 50, 75, 90, 95, 100, 105, 110, 125, 150', {
			name: ['scale-', 'scale-x-', 'scale-y-'],
			value: [
				d => [`transform: scale(${d.value / 100})`],
				d => [`transform: scaleX(${d.value / 100})`],
				d => [`transform: scaleY(${d.value / 100})`]
			],
		})
	}


	const Rotate = {
		title: 'Rotate',
		classes: getClasses('0, 1, 2, 3, 6, 12, 45, 90, 180', {
			name: ['rotate-', '-rotate-'],
			value: [
				d => [`transform: rotate(${d.value}deg)`],
				d => [`transform: rotate(${-d.value}deg)`]
			],
		})
	}

	const Translate = {
		title: 'Translate',
		classes: [
			...getClasses(pxs, {
				name: ['translate-x-', 'translate-y-'],
				value: [
					d => [`transform: translateX(${d.value})`],
					d => [`transform: translateY(${d.value})`],
				],
			}),
			...getClasses(percents, {
				name: ['translate-x-', 'translate-y-'],
				value: [
					d => [`transform: translateX(${d.value})`],
					d => [`transform: translateY(${d.value})`],
				],
			})
		]
	}

	const Skew = {
		title: 'Skew',
		classes: getClasses('0, 1, 2, 3, 6, 12', {
			name: ['skew-x-', 'skew-y-'],
			value: [
				d => [`transform: skewX(${d.value}deg)`],
				d => [`transform: skewy(${-d.value}deg)`]
			],
		})
	}


	const TransformOrigin = {
		title: 'Transform Origin',
		classes: getClasses('center, top, top-right: top right, right, bottom-right: bottom right, bottom, bottom-left: bottom left, left, top-left: top left', {
			name: ['origin-'],
			value: ['transform-origin'],
		})
	}

	return {
		Scale,
		Rotate,
		Translate,
		Skew,
		TransformOrigin
	}

}

export default useHook
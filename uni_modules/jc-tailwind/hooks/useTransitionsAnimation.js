import useVars from './useVars.js'
import { getClasses } from '../utils/classes.js'
import useColor from './useColor.js'

function useHook() { // useTransitionsAnimation
	const { colors, color } = useColor()
	const { pxs, percents } = useVars()

	const TransitionProperty = {
		title: 'Transition Property',
		classes: getClasses([
			{ name: 'none', value: 'none' },
			{ name: 'all', value: 'all' },
			{ name: '', value: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter' },
			{ name: 'colors', value: 'color, background-color, border-color, text-decoration-color, fill, stroke' },
			{name: 'opacity', value: 'opacity'},
			{name: 'shadow', value: 'box-shadow'},
			{name: 'transform', value: 'transform'},
		], { name: 'transition-', value: ({name, value}) => {
			if(name == 'none') {
				return [ `transition-property: ${name};` ]
			}
			const custom = [
				'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',
				'transition-duration: 150ms;'
			]
			return [ `transition-property: ${value};`, ...custom ]
		}, scss: 0 })
	}
	const TransitionDuration = {
		title: 'Transition Duration',
		classes: getClasses([0, 75, 100, 150, 200, 300, 500, 700, 1000].map(d => {
			return {
				name: d,
				value: `${d}${d > 0 ? 'ms' : 's'}`
			}
		}), { name: 'duration-', value: 'transition-duration', scss: 0 })
	}
	const TransitionTimingFunction = {
		title: 'Transition Timing Function',
		classes: getClasses([
			{ name: 'linear', value: 'linear' },
			{ name: 'in', value: 'cubic-bezier(0.4, 0, 1, 1)' },
			{ name: 'out', value: 'cubic-bezier(0, 0, 0.2, 1)' },
			{ name: 'in-out', value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
		], { name: 'ease-', value: 'transition-timing-function', scss: 0 })
	}
	const TransitionDelay = {
		title: 'Transition Delay',
		classes: getClasses([0, 75, 100, 150, 200, 300, 500, 700, 1000].map(d => {
			return {
				name: d,
				value: `${d}${d > 0 ? 'ms' : 's'}`
			}
		}), { name: 'delay-', value: 'transition-delay', scss: 0 })
	}
	const Animation = { title: 'Animation', classes: [] }

	return {
		TransitionProperty,
		TransitionDuration,
		TransitionTimingFunction,
		TransitionDelay,
		Animation
	}

}

export default useHook
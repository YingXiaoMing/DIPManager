import useVars from './useVars.js'
import { getClasses } from '../utils/classes.js'
import useColor from './useColor.js'

function useHook() { // useBorders
	const { colors, color } = useColor()
	const { pxs, percents, border_radius } = useVars()

	const BorderRadius = {
		title: 'Border Radius',
		classes: getClasses(border_radius, {
			name: [
				'rounded-',
				'rounded-s-',
				'rounded-e-',
				'rounded-t-',
				'rounded-r-',
				'rounded-b-',
				'rounded-l-',
				'rounded-ss-',
				'rounded-se-',
				'rounded-ee-',
				'rounded-es-',
				'rounded-tl-',
				'rounded-tr-',
				'rounded-br-',
				'rounded-bl-'
			],
			value: [
				'border-radius',
				'border-start-start-radius, border-end-start-radius',
				'border-start-end-radius, border-end-end-radius',
				'border-top-left-radius, border-top-right-radius',
				'border-top-right-radius, border-bottom-right-radius',
				'border-bottom-right-radius, border-bottom-left-radius',
				'border-top-left-radius, border-bottom-left-radius',
				'border-start-start-radius',
				'border-start-end-radius',
				'border-end-end-radius',
				'border-end-start-radius',
				'border-top-left-radius',
				'border-top-right-radius',
				'border-bottom-right-radius',
				'border-bottom-left-radius',
			],
		})
	}

	const BorderWidth = {
		title: 'Border Width',
		classes: getClasses(
			', 0, 2, 3, 4, 8'.split(',').map(d => {
				d = d.trim()
				return {
					name: d,
					value: d === '' ? '1rpx' : `${d * 2}rpx`
				}
			}), {
				name: [
					'border-',
					'border-x-',
					'border-y-',
					'border-s-',
					'border-e-',
					'border-t-',
					'border-r-',
					'border-b-',
					'border-l-',
				],
				value: [
					'border-width',
					'border-left-width, border-right-width',
					'border-top-width, border-bottom-width',
					'border-inline-start-width',
					'border-inline-end-width',
					'border-top-width',
					'border-right-width',
					'border-bottom-width',
					'border-left-width',
				],
			}),
	}
	const BorderColor = {
		title: 'Border Color',
		classes: color.map(c => {
			return {
				...c,
				name: `border-${c.name}`,
				value: [`border-color: ${c.value};`],
				desc: c.rgb,
			}
		})
	}

	const BorderStyle = {
		title: 'Border Style',
		classes: getClasses('solid, dashed, dotted, double, hidden, none', { name: 'border-', value: 'border-style' })
	}

	const DivideWidth = { title: 'Divide Width', classes: [] }
	const DivideColor = { title: 'Divide Color', classes: [] }
	const DivideStyle = { title: 'Divide Style', classes: [] }
	const OutlineWidth = { title: 'Outline Width', classes: [] }
	const OutlineColor = { title: 'Outline Color', classes: [] }
	const OutlineStyle = { title: 'Outline Style', classes: [] }
	const OutlineOffset = { title: 'Outline Offset', classes: [] }
	const RingWidth = { title: 'Ring Width', classes: [] }
	const RingColor = { title: 'Ring Color', classes: [] }
	const RingOffsetWidth = { title: 'Ring Offset Width', classes: [] }
	const RingOffsetColor = { title: 'Ring Offset Color', classes: [] }

	return {
		BorderRadius,
		BorderWidth,
		BorderColor,
		BorderStyle,
		DivideWidth,
		DivideColor,
		DivideStyle,
		OutlineWidth,
		OutlineColor,
		OutlineStyle,
		OutlineOffset,
		RingWidth,
		RingColor,
		RingOffsetWidth,
		RingOffsetColor
	}

}

export default useHook
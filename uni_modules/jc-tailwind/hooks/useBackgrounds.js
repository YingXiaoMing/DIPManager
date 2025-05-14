import useVars from './useVars.js'
import { getClasses } from '../utils/classes.js'

import useColor from './useColor.js'

function useHook() { // 
	const { colors, color } = useColor()
	const { pxs, percents } = useVars()



	const BackgroundAttachment = { title: 'Background Attachment', classes: getClasses(`fixed, local, scroll`, { name: 'bg-', value: 'background-attachment', scss: 0 }) }
	const BackgroundClip = {
		title: 'Background Clip',
		classes: getClasses([
			{ name: 'border', value: 'border-box' },
			{ name: 'padding', value: 'padding-box' },
			{ name: 'content', value: 'content-box' },
			{ name: 'text', value: 'text' },
		], { name: 'bg-clip-', value: 'background-clip', scss: 0 })
	}

	const BackgroundColor = {
		title: 'Background Color',
		classes: color.map(c => {
			return {
				...c,
				name: `bg-${c.name}`,
				value: [`background: ${c.value};`],
				bgcolor: c.color,
				desc: c.rgb,
			}
		})
	}

	const BackgroundOrigin = {
		title: 'Background Origin',
		classes: getClasses([{ name: 'border', value: 'border-box' },
			{ name: 'padding', value: 'padding-box' },
			{ name: 'content', value: 'content-box' },
		], { name: 'bg-origin-', value: 'background-origin', scss: 0 })
	}
	const BackgroundPosition = {
		title: 'Background Position',
		classes: getClasses([
			{ name: 'bottom', value: 'bottom' },
			{ name: 'center', value: 'center' },
			{ name: 'left', value: 'left' },
			{ name: 'left-bottom', value: 'left bottom' },
			{ name: 'left-top', value: 'left top' },
			{ name: 'right', value: 'right' },
			{ name: 'right-bottom', value: 'right bottom' },
			{ name: 'right-top', value: 'right top' },
			{ name: 'top', value: 'top' },
		], { name: 'bg-', value: 'background-position', scss: 0 })
	}
	const BackgroundRepeat = {
		title: 'Background Repeat',
		classes: getClasses([
			{ name: 'repeat', value: 'repeat' },
			{ name: 'no-repeat', value: 'no-repeat' },
			{ name: 'repeat-x', value: 'repeat-x' },
			{ name: 'repeat-y', value: 'repeat-y' },
			{ name: 'repeat-round', value: 'round' },
			{ name: 'repeat-space', value: 'space' },
		], { name: 'bg-', value: 'background-repeat', scss: 0 })
	}
	const BackgroundSize = { title: 'Background Size', classes: getClasses(`auto, cover, contain`, { name: 'bg-', value: 'background-size', scss: 0 }) }
	const BackgroundImage = {
		title: 'Background Image',
		classes: getClasses([
			{ name: 'none', value: 'none' },
			{ name: 'gradient-to-t', value: 'linear-gradient(to top, var(--gradient-stops))' },
			{ name: 'gradient-to-tr', value: 'linear-gradient(to top right, var(--gradient-stops))' },
			{ name: 'gradient-to-r', value: 'linear-gradient(to right, var(--gradient-stops))' },
			{ name: 'gradient-to-br', value: 'linear-gradient(to bottom right, var(--gradient-stops))' },
			{ name: 'gradient-to-b', value: 'linear-gradient(to bottom, var(--gradient-stops))' },
			{ name: 'gradient-to-bl	', value: 'linear-gradient(to bottom left, var(--gradient-stops))' },
			{ name: 'gradient-to-l', value: 'linear-gradient(to left, var(--gradient-stops))' },
			{ name: 'gradient-to-tl', value: 'linear-gradient(to top left, var(--gradient-stops))' },
		], { name: 'bg-', value: 'background-image', scss: 0 })
	}
	
	function getFromColor() {
		return color.map(c => {
			const v = c.var ? `var(${c.value})` : c.value
			return {
				...c,
				name: `from-${c.name}`,
				value: [
					`--gradient-from-position: 0%;`,
					`--gradient-from: ${v} var(--gradient-from-position);`,
					`--gradient-to-position: 100%;`,
					`--gradient-to: rgba(0,0,0,0) var(--gradient-to-position);`,
					`--gradient-stops: var(--gradient-from), var(--gradient-to);`,
				],
				desc: c.rgb,
			}
		})
	}
	
	function getToColor() {
		return color.map(c => {
			const v = c.var ? `var(${c.value})` : c.value
			return {
				...c,
				name: `to-${c.name}`,
				value: [
					`--gradient-to: ${v} var(--gradient-to-position);`,
				],
				desc: c.rgb,
			}
		})
	}
	
	function getPercentFromToColor() {
		let froms = new Array(9).fill(0).map((d, i) => {
			return {
				name: `.from-0-${i + 1}`,
				value: [`--gradient-from-position: calc(${i + 1} * 10 * 1%);`]
			}
		})
		let tos = new Array(9).fill(0).map((d, i) => {
			return {
				name: `.to-0-${i + 1}`,
				value: [`--gradient-to-position: calc(${i + 1} * 10 * 1%);`]
			}
		})
		return [...froms, ...tos]
	}
	
	const GradientColorStops = {
		title: 'Gradient Color Stops',
		classes: [
			...getFromColor(),
			...getToColor(),
			...getPercentFromToColor(),
		]
	}

	return {
		BackgroundAttachment,
		BackgroundClip,
		BackgroundColor,
		BackgroundOrigin,
		BackgroundPosition,
		BackgroundRepeat,
		BackgroundSize,
		BackgroundImage,
		GradientColorStops
	}

}

export default useHook
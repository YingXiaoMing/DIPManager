import useVars from './useVars.js'
import { getClasses } from '../utils/classes.js'

function useHook() { // useLayout
	const { pxs, percents } = useVars()

	const AspectRatio = {
		title: 'Aspect Ratio',
		classes: getClasses([
			{ name: 'auto', value: 'auto' },
			{ name: 'square', value: '1 / 1' },
			{ name: 'video', value: '16 / 9' },
		], {
			name: 'aspect-',
			value: 'aspect-ratio'
		})
	}

	const BoxSizing = ({
		title: 'Box Sizing',
		classes: getClasses([
			{ name: 'border', value: 'border-box' },
			{ name: 'content', value: 'content-box' },
		], {
			name: 'box-',
			value: 'box-sizing'
		})
	})

	const Display = {
		title: 'Display',
		classes: getClasses('block, inline-block, inline, flex, inline-flex, flow-root, grid, inline-grid, contents, list-item, hidden: none', {
			name: '',
			value: 'display',
			scss: 0
		})
	}

	const Floats = {
		title: 'Floats',
		classes: getClasses('left, right, none', {
			name: 'float-',
			value: 'float',
		})
	}

	const Clear = {
		title: 'Clear',
		classes: getClasses('left, right, both, none', {
			name: 'clear-',
			value: 'clear',
		})
	}

	const Isolation = {
		title: 'Isolation',
		classes: getClasses('isolate ,isolation-auto', {
			name: '',
			value: 'isolation',
		})
	}

	const ObjectFit = {
		title: 'Object Fit',
		classes: getClasses('contain, cover, fill, none, scale-down', {
			name: 'object-',
			value: 'object-fit',
		})
	}

	const ObjectPosition = {
		title: 'Object Position',
		classes: getClasses('bottom, center, left, left-bottom, left-top, right, right-bottom, right-top, top', {
			name: 'object-',
			value: 'object-position',
		})
	}

	const Overflow = {
		title: 'Overflow',
		classes: getClasses('auto, hidden, clip, visible, scroll', {
			name: ['overflow-', 'overflow-x-', 'overflow-y-'],
			value: ['overflow', 'overflow-x', 'overflow-y'],
		})
	}

	const OverscrollBehavior = {
		title: 'Overscroll Behavior',
		classes: getClasses('auto, contain, none', {
			name: ['overscroll-', 'overscroll-x-', 'overscroll-y-'],
			value: ['overscroll-behavior', 'overscroll-behavior-x', 'overscroll-behavior-y'],
		})
	}

	const Position = {
		title: 'Position',
		classes: getClasses('static, fixed, absolute, relative, sticky', {
			name: '',
			value: 'position',
		})
	}

	const TopRightBottomLeft = {
		title: 'Top / Right / Bottom / Left',
		classes: getClasses(pxs, {
			name: ['inset-', 'inset-x-', 'inset-y-', 'start-', 'end-', 'top-', 'right-', 'bottom-', 'left-'],
			value: ['inset', 'left, right', 'top, bottom', 'inset-inline-start', 'inset-inline-end', 'top', 'right', 'bottom', 'left'],
		})
	}

	const Visibility = {
		title: 'Visibility',
		classes: getClasses('visible, invisible, collapse', {
			name: '',
			value: 'visibility',
		})
	}

	const ZIndex = {
		title: 'Z-Index',
		classes: getClasses('0, 10, 20, 30, 40, 50, auto', {
			name: 'z-',
			value: 'z-index',
		})
	}



	return {
		AspectRatio,
		BoxSizing,
		Display,
		Floats,
		Clear,
		Isolation,
		ObjectFit,
		ObjectPosition,
		Overflow,
		OverscrollBehavior,
		Position,
		TopRightBottomLeft,
		Visibility,
		ZIndex
	}

}

export default useHook
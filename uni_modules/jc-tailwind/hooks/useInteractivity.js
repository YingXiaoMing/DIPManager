import useVars from './useVars.js'
import { getClasses } from '../utils/classes.js'
import useColor from './useColor.js'

function useHook() { // useInteractivity
	const { colors, color } = useColor()
	const { pxs, percents } = useVars()
	
	const AccentColor = { title: 'Accent Color', classes: [] }
	const Appearance = { title: 'Appearance', classes: getClasses('none', {name: 'appearance-', value: 'appearance', scss: 0}) }
	const Cursor = { title: 'Cursor', classes: [] }
	const CaretColor = { title: 'Caret Color', classes: [] }
	const PointerEvents = { title: 'Pointer Events', classes: getClasses('none, auto', {name: 'pointer-events-', value: 'pointer-events', scss: 0}) }
	const Resize = { title: 'Resize', classes: [] }
	const ScrollBehavior = { title: 'Scroll Behavior', classes: getClasses('auto, smooth', {name: 'scroll-', value: 'scroll-behavior', scss: 0}) }
	const ScrollMargin = { title: 'Scroll Margin', classes: [] }
	const ScrollPadding = { title: 'Scroll Padding', classes: [] }
	const ScrollSnapAlign = { title: 'Scroll Snap Align', classes: [] }
	const ScrollSnapStop = { title: 'Scroll Snap Stop', classes: [] }
	const ScrollSnapType = { title: 'Scroll Snap Type', classes: [] }
	const TouchAction = { title: 'Touch Action', classes: [] }
	const UserSelect = { title: 'User Select', classes: getClasses('none, text, all, auto', {name: 'select-', value: 'user-select', scss: 0}) }
	const WillChange = { title: 'Will Change', classes: getClasses('auto, scroll: scroll-position,contents,transform', {name: 'will-change-', value: 'will-change', scss: 0}) }

	return {
		AccentColor, Appearance, Cursor, CaretColor, PointerEvents, Resize, ScrollBehavior, ScrollMargin, ScrollPadding, ScrollSnapAlign, ScrollSnapStop, ScrollSnapType, TouchAction, UserSelect, WillChange
	}

}

export default useHook
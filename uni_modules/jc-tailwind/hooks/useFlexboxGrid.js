import useVars from './useVars.js'
import { getClasses } from '../utils/classes.js'

function getGridTemplateRepeats(max = 12) {
	const arr = new Array(max).fill('').map((d, i) => {
		let index = i + 1
		return {
			name: index,
			value: `repeat(${index}, minmax(0, 1fr))`
		}
	})
	return arr
}

function getGridColumnStartEnd(name = 'col', vname = 'column', max = 12) {
	let arr = [{ name: `${name}-auto`, value: [`grid-${vname}: auto;`] }]
	for (let i = 1; i <= max; i++) {
		if (i <= max) {
			arr.push({ name: `${name}-span-${i}`, value: [`grid-${vname}: span ${i} / span ${i};`] })
		}
		arr.push({ name: `${name}-start-${i}`, value: [`grid-${vname}-start: ${i};`] })
		arr.push({ name: `${name}-end-${i}`, value: [`grid-${vname}-end: ${i};`] })
	}
	arr.push({ name: `${name}-span-full`, value: [`grid-${vname}: 1 / -1;`] })
	arr.push({ name: `${name}-start-auto`, value: [`grid-${vname}-start: auto;`] })
	arr.push({ name: `${name}-end-auto`, value: [`grid-${vname}-end: auto;`] })
	return arr
}


function useHook() { // useFlexboxGrid
	const { pxs, percents } = useVars()

	const FlexBasis = {
		title: 'Flex Basis',
		classes: [...getClasses(pxs, {
			name: ['basis-'],
			value: ['flex-basis'],
		}), ...getClasses(percents, {
			name: ['basis-'],
			value: ['flex-basis'],
		})]
	}
	const FlexDirection = {
		title: 'Flex Direction',
		classes: getClasses('row, row-reverse, col, col-reverse', { name: 'flex-', value: 'flex-direction' }),
	}

	const FlexWrap = {
		title: 'Flex Wrap',
		classes: getClasses('wrap, wrap-reverse, nowrap', { name: 'flex-', value: 'flex-wrap' }),
	}

	const Flex = {
		title: 'Flex',
		classes: getClasses('1: 1 1 0%, auto: 1 1 0%, initial: 0 1 auto, none', { name: 'flex-', value: 'flex' }),
	}

	const FlexGrow = {
		title: 'Flex Grow',
		classes: getClasses(':1, 0', { name: 'grow-', value: 'grow' }),
	}

	const FlexShrink = {
		title: 'Flex Shrink',
		classes: getClasses(':1, 0', { name: 'shrink-', value: 'shrink' }),
	}

	const Order = {
		title: 'Order',
		classes: getClasses('1,2,3,4,5,6,7,8,9,10,11,12,first: -9999,last: 9999,none: 0', { name: 'order-', value: 'order' }),
	}

	const GridTemplateColumns = {
		title: 'Grid Template Columns',
		classes: getClasses([...getGridTemplateRepeats(12), { name: 'none' }], { name: 'grid-cols-', value: 'grid-template-columns' }),
	}

	const GridColumnStartEnd = {
		title: 'Grid Column Start End',
		classes: getGridColumnStartEnd(),
	}

	const GridTemplateRows = {
		title: 'Grid Template Rows',
		classes: getClasses([...getGridTemplateRepeats(6), { name: 'none' }], { name: 'grid-rows-', value: 'grid-template-rows' }),
	}

	const GridRowStartEnd = {
		title: 'Grid Row Start End',
		classes: getGridColumnStartEnd('row', 'row', 6),
	}

	const GridAutoFlow = {
		title: 'Grid Auto Flow',
		classes: getClasses('row, col, dense, row-dense, col-dense', { name: 'grid-flow-', value: 'grid-auto-flow' }),
	}

	const GridAutoColumns = {
		title: 'Grid Auto Columns',
		classes: getClasses([
			{ name: 'auto', value: 'auto' },
			{ name: 'min', value: 'min-content' },
			{ name: 'max', value: 'max-content' },
			{ name: 'fr', value: 'minmax(0, 1fr)' },
		], { name: 'auto-cols-', value: 'grid-auto-columns' }),
	}

	const GridAutoRows = {
		title: 'Grid Auto Rows',
		classes: getClasses([
			{ name: 'auto', value: 'auto' },
			{ name: 'min', value: 'min-content' },
			{ name: 'max', value: 'max-content' },
			{ name: 'fr', value: 'minmax(0, 1fr)' },
		], { name: 'auto-rows-', value: 'grid-auto-rows' }),
	}

	const Gap = {
		title: 'Gap',
		classes: getClasses(pxs, { name: ['gap-', 'gap-x-', 'gap-y-'], value: ['gap', 'column-gap', 'row-gap'] }),
	}

	const JustifyContent = {
		title: 'Justify Content',
		classes: getClasses('normal, start: flex-start, end: flex-end, center, between: space-between, around: space-around, evenly: space-evenly, stretch', { name: 'justify-', value: 'justify-content' }),
	}

	const JustifyItems = {
		title: 'Justify Items',
		classes: getClasses('start, end, center, stretch', { name: 'justify-items-', value: 'justify-items' }),
	}

	const JustifySelf = {
		title: 'Justify Self',
		classes: getClasses('auto, start, end, center, stretch', { name: 'justify-self-', value: 'justify-self' }),
	}

	const AlignContent = {
		title: 'Align Content',
		classes: getClasses('normal, center, start: flex-start, end: flex-end, between: space-between, around: space-around, evenly: space-evenly, baseline, stretch', { name: 'content-', value: 'align-content' }),
	}

	const AlignItems = {
		title: 'Align Items',
		classes: getClasses('start: flex-start, end, center, baseline, stretch', { name: 'items-', value: 'align-items' }),
	}

	const AlignSelf = {
		title: 'Align Self',
		classes: getClasses('auto, start: flex-start, end: flex-end, center, stretch, baseline', { name: 'self-', value: 'align-self' }),
	}
	const PlaceContent = {
		title: 'Place Content',
		classes: getClasses('center, start, end, between: space-between, around: space-around, evenly: space-evenly, baseline, stretch', { name: 'place-content-', value: 'place-content' }),
	}
	const PlaceItems = {
		title: 'Place Items',
		classes: getClasses('start, end, center, baseline, stretch', { name: 'place-items-', value: 'place-items' }),
	}
	const PlaceSelf = {
		title: 'Place Self',
		classes: getClasses('auto, start, end, center, stretch', { name: 'place-self-', value: 'place-self' }),
	}


	return {
		FlexBasis,
		FlexDirection,
		FlexWrap,
		Flex,
		FlexGrow,
		FlexShrink,
		Order,
		GridTemplateColumns,
		GridColumnStartEnd,
		GridTemplateRows,
		GridRowStartEnd,
		GridAutoFlow,
		GridAutoColumns,
		GridAutoRows,
		Gap,
		JustifyContent,
		JustifyItems,
		JustifySelf,
		AlignContent,
		AlignItems,
		AlignSelf,
		PlaceContent,
		PlaceItems,
		PlaceSelf
	}

}

export default useHook
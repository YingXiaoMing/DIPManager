import useVars from './useVars.js'
import { getClasses } from '../utils/classes.js'

function useHook() { // useTypography
	const { pxs, percents } = useVars()

	const Padding = {
		title: 'Padding',
		classes: getClasses(pxs, {
			// name: ['p-', 'px-', 'py-', 'ps-', 'pe-', 'pt-', 'pr-', 'pb-', 'pl-'],
			// value: ['padding', 'padding-left, padding-right', 'padding-top, padding-bottom', 'padding-inline-start', 'padding-inline-end', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
			name: ['p-', 'px-', 'py-', 'pt-', 'pr-', 'pb-', 'pl-'],
			value: ['padding', 'padding-left, padding-right', 'padding-top, padding-bottom', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
		})
	}

	const Margin = {
		title: 'Margin',
		classes: [
			...getClasses(pxs, {
				// name: ['m-', 'mx-', 'my-', 'ms-', 'me-', 'mt-', 'mr-', 'mb-', 'ml-'],
				// value: ['margin', 'margin-left, margin-right', 'margin-top, margin-bottom', 'margin-inline-start', 'margin-inline-end', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
				name: ['m-', 'mx-', 'my-', 'mt-', 'mr-', 'mb-', 'ml-'],
				value: ['margin', 'margin-left, margin-right', 'margin-top, margin-bottom', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
			}),
			...getClasses([{name: 'auto', value: 'auto'}], {
				name: ['m-', 'mx-', 'my-', 'mt-', 'mr-', 'mb-', 'ml-'],
				value: ['margin', 'margin-left, margin-right', 'margin-top, margin-bottom', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
			})
		]
	}

	const SpaceBetween = {
		title: 'Space Between',
		classes: [
			...getClasses(pxs, {
				name: ['space-x-', 'space-y-'],
				value: ['margin-left', 'margin-top'],
			}),
			{name: 'space-x-reverse', value: ['--space-x-reverse: 1']},
			{name: 'space-y-reverse', value: ['--space-y-reverse: 1']},
		]
	}

	return {
		Padding,
		Margin,
		SpaceBetween
	}

}

export default useHook
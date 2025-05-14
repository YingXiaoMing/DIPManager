import useVars from './useVars.js'
import { getClasses } from '../utils/classes.js'

function useHook() { // useTypography
	const { pxs, percents } = useVars()

	const Width = {
		title: 'Width',
		classes: [
			...getClasses(pxs, {
				name: ['w-'],
				value: ['width'],
			}),
			...getClasses(percents, {
				name: ['w-'],
				value: ['width'],
			}),
			{name: 'w-screen', value: ['width: var(--w-screen)'], percent: '100vw'}
		]
	}



	const Height = {
		title: 'Height',
		classes: [
			...getClasses(pxs, {
				name: ['h-'],
				value: ['height'],
			}),
			...getClasses(percents, {
				name: ['h-'],
				value: ['height'],
			}),
			{name: 'h-screen', value: ['height: var(--h-screen)'], percent: '100vh'}
		]
	}
	
	const MaxHeight = {
		title: 'Max Height',
		classes: [
			...getClasses(pxs, {
				name: ['max-h-'],
				value: ['max-height'],
			}),
			...getClasses(percents, {
				name: ['max-h-'],
				value: ['max-height'],
			}),
			{name: 'max-h-screen', value: ['max-height: var(--h-screen)'], percent: '100vh'}
		]
	} 

	return {
		Width,
		Height,
		MaxHeight
	}

}

export default useHook
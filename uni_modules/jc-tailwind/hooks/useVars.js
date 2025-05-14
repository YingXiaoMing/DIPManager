import useSizes from './useSizes.js'

function useHook() { // 
	const { Pxs, Pcts, Xls } = useSizes()
	const pxs = Pxs.map(p => {
		return {
			name: p.name,
			value: `var(--rpx-${p.name})`,
			px: p.px,
			rpx: p.px == 1 ? 1 : p.px * 2
		}
	})
	const percents = Pcts.map(p => {
		return {
			name: p.name,
			value: `var(--percent-${p.name})`,
			percent: typeof p.val == 'string' ? p.val : `${p.val % 1 == 0 ? p.val : p.val.toFixed(6)}%`
		}
	})
	const _borderRadius = 'none: 0, sm: 2, : 4, md: 6, lg: 8, xl: 12, 2xl: 16, 3xl: 24, full: 9999'
	const borderRadius = _borderRadius.split(',').map(d => {
		let [name, value] = d.split(':').map(d => d.trim())
		return {name, value: name ? `var(--rounded-${name})` : `var(--rounded)`, rpx: value * 2}
	})
	
	
	const xls = Xls.map((d) => {
		return {
			...d,
			value: `var(--text-${d.name})`,
			lineHeightValue: `var(--text-${d.name}-lineHeight)`,
			rpx: `${d.fontSize * 2}rpx`,
		}
	})

	// 5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95
	let opacitys = []
	for(let i = 1; i < 20; i ++) {
		const _o = i * 5
		opacitys.push({
				value: `var(--opacity-${_o})`,
				calc: `calc(${_o} / 100)`,
				opacity: _o / 100,
		})
	}
	// const opacitys = [
	// 	{
	// 		value: 'var(--opacity-50)',
	// 		calc: 'calc(50 / 100)',
	// 		opacity: 50 / 100,
	// 	}
	// ]
	return {
		pxs, percents, border_radius: borderRadius, xls, opacitys
	}

}

export default useHook
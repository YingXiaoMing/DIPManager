function getPxs() {
	const _Sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96]
	let Pxs = [{ name: 'px', px: 1 }]
	_Sizes.map(d => {
		let d5 = d * 5,
			d10 = d * 10
		if (d5 > 0 && d5 <= 40 && d5 % 5 == 0 && d5 % 10 != 0) {
			Pxs.push({ name: d5, px: d * 2 })
		}
		Pxs.push({ name: d10, px: d * 4 })
	})
	Pxs = Pxs.sort((n1, n2) => n1.px - n2.px).map(d => {
		d.name10 = d.name
		if (d.name != 'px') {
			let _name = d.name / 10
			if (_name % 1 == 0) {
				d.name = _name
			} else {
				d.name = `${_name}`.replace(/\./g, '-')
			}
			d._name = _name
		}
		return d
	})
	let sass = '',
		sassName = ''
	Pxs.map(d => {
		sass += `,'${d.name}' ${d.px} `
		sassName += `,'${d.name}' `
	})
	sass = sass.substring(1)
	sassName = sassName.substring(1)

	return { Pxs, pxsass: sass, pxSassName: sassName }
}

function getPercents() {
	const pct = [2, 3, 4, 5, 6, 12]

	let pcts = []
	pct.map((d) => {
		for (let it = 1; it < d; it++) {
			if (it != d) {
				pcts.push({
					name: `${it}_${d}`,
					val: (it / d * 100) % 1 == 0 ? it / d * 100 : it / d * 100,
				})
			}
		}
	})
	pcts.push(...[
		{ name: 'auto', val: 'auto' },
		{ name: 'full', val: '100%' },
		// {name: 'w-screen', val: '100vw'},
		// {name: 'h-screen', val: '100vh'},
	])

	let sassNames = ''
	pcts.map(d => {
		sassNames += `,'${d.name}' `
	})
	sassNames = sassNames.substring(1)

	return { Pcts: pcts, pctSassName: sassNames }
}

function useHook() { // useSizes
	const Sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96]
	const Percents = [2, 3, 4, 5, 6, 12, 'full', 'auto']
	const Xls = ['3xs 10 12', '2xs 11 14', 'xs 12 16', 'mini 13 18', 'sm 14 20', 'md 15 22', 'base 16 24', 'lg 18 28', 'xl 20 28', '2xl 24 32', '3xl 30 36', '4xl 36 40', '5xl 48 0', '6xl 60 0', '7xl 72 0', '8xl 96 0', '9xl 128 0'].map(d => {

		let [name, fontSize, lineHeight] = d.split(' ')
		return {
			name,
			fontSize,
			lineHeight
		}
	})

	const { Pxs, pxsass, pxSassName } = getPxs()

	const { Pcts, pctSassName } = getPercents()
	// console.log(Pcts)
	return {
		Sizes: Pxs,
		Percents: Pcts,
		Xls,
		Pxs,
		Pcts,
	}

}

export default useHook
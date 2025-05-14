export function getClassObject(list, { name, value }) {
	return list.map((d, i) => {
		const values = typeof value === 'string' ? value.split(',').map(v => {
			return `${v}: ${d.value || d.name};`
		}) : [...value(d, i)]

		return {
			...d,
			name: d.name !== '' ? `${name}${d.name}` : `${name.slice(0, name.lastIndexOf('-'))}`,
			value: values
		}
	})
}


export function getClassArray(list, options) {
	const { name, value } = options
	if ('string' !== typeof name) {
		return name.reduce((acc, cur, index) => {
			if (acc) {
				acc.push(...getClassObject(list, { name: cur, value: value[index] }))
				return acc
			}
		}, [])
	}
	return getClassObject(list, { name, value })
}

export function getStringList(list) {
	return list.split(',').map(d => {
		d = d.trim()
		const [name, value = d] = d.split(':')
		return { name, value }
	})
}

export function getClasses(list, options) {
	if ('string' === typeof list) {
		list = getStringList(list)
	}

	const result = getClassArray(list, options)

	// console.log(result, options);
	if (options?.scss) { // 生成scss
		createNameValueScss(result, options, list)
	}
	return result


}

// 驼峰法
function getCamelCaseName(str) {
	if (typeof str !== 'string') return ''
	let words = str.split('-')
	for (let i = 1; i < words.length; i++) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
	}
	return words.join('')
}

function createNameValueScss(list, { name, value, scss }, _list) {
	if (typeof value !== 'string') {
		let strs = []
		list.map(d => {
			let className = `.${d.name} {`
			let classValue = d.value.join(' ')
			strs.push(`${className}${classValue} }\n`)
		})
		return console.log(`%c${strs.join('\r')}`, 'color: skyblue;')
	}


	const camelCaseName = getCamelCaseName(value)

	let arrValues = []
	_list.map(d => {
		arrValues.push(`'${name}${d.name}' '${d.value}'`)
	})
	const arrName = `$${camelCaseName}s`
	const arrs = `${arrName}: ${arrValues.join(',')}`
	let str = `
// ${camelCaseName}
\r
${arrs};
\r
@each $name, $val in ${arrName} {
	.#{$name} {${value}: #{$val};}
}
		`
	console.log(`%c${str}`, 'color: skyblue;')
}
import useVars from './useVars.js'
import { getClasses } from '../utils/classes.js'
import useColor from './useColor.js'

function useHook() { // useTypography
	const { colors, color } = useColor()
	const { pxs, percents, xls } = useVars()

	const FontFamily = {
		title: 'Font Family',
		classes: getClasses('sans, serif, mono', {
			name: ['font-'],
			value: [d => {
				const fs = {
					sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
					serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
					mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
				}
				return [`font-family: ${fs[d.value]};`]
			}]
		})
	}

	const FontSize = ({
		title: 'Font Size',
		classes: getClasses(xls, {
			name: 'text-',
			value: d => {
				return [{ value: `font-size: ${d.value};`, rpx: d.fontSize * 2 }, { value: `line-height: ${d.lineHeightValue};`, desc: d.lineHeight > 0 ? `${d.lineHeight * 2}rpx` : 1 }]
			}
		}),
	})
	const FontSmoothing = { title: 'Font Smoothing', classes: [] }

	const FontStyle = {
		title: 'Font Style',
		classes: getClasses([
			{ name: 'italic', value: 'italic' },
			{ name: 'not-italic', value: 'normal' },
		], { name: '', value: 'font-style' })
	}

	const FontWeight = ({
		title: 'Font Weight',
		classes: getClasses('thin,extralight,light,normal,medium,semibold,bold,extrabold,black', {
			name: 'font-',
			value: (d, i) => {
				return [`font-weight: ${(i + 1) * 100};`]
			}
		}),
	})

	const FontVariantNumeric = {
		title: 'Font Variant Numeric',
		classes: getClasses([
			{ name: 'normal-nums', value: 'normal' },
			{ name: 'ordinal', value: 'ordinal' },
			{ name: 'slashed-zero', value: 'slashed-zero' },
			{ name: 'lining-nums', value: 'lining-nums' },
			{ name: 'oldstyle-nums', value: 'oldstyle-nums' },
			{ name: 'proportional-nums', value: 'proportional-nums' },
			{ name: 'tabular-nums', value: 'tabular-nums' },
			{ name: 'diagonal-fractions', value: 'diagonal-fractions' },
			{ name: 'stacked-fractions', value: 'stacked-fractions' },
		], { name: '', value: 'font-variant-numeric' })
	}
	// 1em = 16px .1em = 16 * 0.1 = 1.6px = 3.2rpx
	const LetterSpacing = {
		title: 'Letter Spacing',
		classes: getClasses([
			{ name: 'tighter', value: '-0.05em', rpx: -16 * 2 * .05 },
			{ name: 'tight', value: '-0.025em', rpx: -16 * 2 * .025 },
			{ name: 'normal', value: '0em', rpx: 0 },
			{ name: 'wide', value: '0.025em', rpx: 16 * 2 * .025 },
			{ name: 'wider', value: '0.05em', rpx: 16 * 2 * .05 },
			{ name: 'widest', value: '0.1em', rpx: 16 * 2 * .1 },
		], { name: 'tracking-', value: 'letter-spacing' })
	}
	const LineClamp = {
		title: 'Line Clamp',
		classes: [
			...new Array(6).fill(0).map((d, i) => {
				return {
					name: `line-clamp-${i + 1}`,
					value: [
						'overflow: hidden;',
						'display: -webkit-box;',
						'-webkit-box-orient: vertical;',
						`-webkit-line-clamp: ${i + 1};`
					]
				}
			}),
			{
				name: 'line-clamp-none',
				value: [
					'overflow: visible;',
					'display: block;',
					'-webkit-box-orient: horizontal;',
					'-webkit-line-clamp: none;'
				]
			}
		]
	}

	const LineHeight = {
		title: 'Line Height',
		classes: getClasses([
			{ name: '3', value: '.75rem', rpx: 16 * 2 * .75 },
			{ name: '4', value: '1rem', rpx: 16 * 2 * 1 },
			{ name: '5', value: '1.25rem', rpx: 16 * 2 * 1.25 },
			{ name: '6', value: '1.5rem', rpx: 16 * 2 * 1.5 },
			{ name: '7', value: '1.75rem', rpx: 16 * 2 * 1.75 },
			{ name: '8', value: '2rem', rpx: 16 * 2 * 2 },
			{ name: '9', value: '2.25rem', rpx: 16 * 2 * 2.25 },
			{ name: '10', value: '2.5rem', rpx: 16 * 2 * 2.5 },
			{ name: 'none', value: '1' },
			{ name: 'tight', value: '1.25' },
			{ name: 'snug', value: '1.375' },
			{ name: 'normal', value: '1.5' },
			{ name: 'relaxed', value: '1.625' },
			{ name: 'loose', value: '2' },
		], { name: 'leading-', value: 'line-height' })
	}
	const ListStyleImage = { title: 'List StyleImage', classes: [] }
	const ListStylePosition = { title: 'List StylePosition', classes: [] }
	const ListStyleType = { title: 'List StyleType', classes: [] }

	const TextAlign = ({
		title: 'Text Align',
		classes: getClasses('left,center,right,justify,start,end', { name: 'text-', value: 'text-align' }),
	})
	const TextColor = {
		title: 'Text Color',
		classes: color.map(c => {
			return {
				...c,
				name: `text-${c.name}`,
				value: [`color: ${c.value};`],
				textcolor: c.color,
				desc: c.rgb,
			}
		})
	}

	const TextDecoration = {
		title: 'Text Decoration',
		classes: getClasses([
			{ name: 'underline', value: 'underline' },
			{ name: 'overline', value: 'overline' },
			{ name: 'line-through', value: 'line-through' },
			{ name: 'no-underline', value: 'none' },
		], { name: '', value: 'text-decoration-line' })
	}
	const TextDecorationColor = {
		title: 'Text DecorationColor',
		classes: color.map(c => {
			return {
				...c,
				name: `decoration-${c.name}`,
				value: [`color: ${c.value};`],
				// textcolor: c.color,
				desc: c.rgb,
			}
		})
	}
	const TextDecorationStyle = {
		title: 'Text DecorationStyle',
		classes: getClasses('solid, double, dotted, dashed, wavy', { name: 'decoration-', value: 'text-decoration-style' })
	}
	const TextDecorationThickness = {
		title: 'Text Decoration Thickness',
		classes: getClasses([
			{ name: 'auto', value: 'auto' },
			{ name: 'from-font', value: 'from-font' },
			{ name: '0', value: '0' },
			{ name: '1', value: `${1 * 2}rpx` },
			{ name: '2', value: `${2 * 2}rpx` },
			{ name: '4', value: `${4 * 2}rpx` },
			{ name: '8', value: `${8 * 2}rpx` },
		], { name: 'decoration-', value: 'text-decoration-thickness', scss: 0 })
	}
	const TextUnderlineOffset = {
		title: 'Text Underline Offset',
		classes: getClasses([
			{ name: 'auto', value: 'auto' },
			{ name: '0', value: '0' },
			{ name: '1', value: `${1 * 2}rpx` },
			{ name: '2', value: `${2 * 2}rpx` },
			{ name: '4', value: `${4 * 2}rpx` },
			{ name: '8', value: `${8 * 2}rpx` },
		], { name: 'underline-offset-', value: 'text-underline-offset', scss: 0 })
	}
	const TextTransform = {
		title: 'Text Transform',
		classes: getClasses([
			{ name: 'uppercase', value: 'uppercase' },
			{ name: 'lowercase', value: 'lowercase' },
			{ name: 'capitalize', value: 'capitalize' },
			{ name: 'normal-case', value: 'none' },
		], { name: '', value: 'text-transform', scss: 0 })
	}
	const TextOverflow = {
		title: 'Text Overflow',
		classes: [{
				name: 'truncate',
				value: ['overflow: hidden;',
					'text-overflow: ellipsis;',
					'white-space: nowrap;'
				]
			},
			{ name: 'text-ellipsis', value: ['text-overflow: ellipsis;'] },
			{ name: 'text-clip', value: ['text-overflow: clip;'] },
		]
	}
	const TextIndent = {
		title: 'Text Indent',
		classes: getClasses(pxs, {
			name: ['indent-'],
			value: ['text-indent'],
		})
	}
	const VerticalAlign = {
		title: 'Vertical Align',
		classes: getClasses([
			{ name: 'baseline', value: 'baseline' },
			{ name: 'top', value: 'top' },
			{ name: 'middle', value: 'middle' },
			{ name: 'bottom', value: 'bottom' },
			{ name: 'text-top', value: 'text-top' },
			{ name: 'text-bottom', value: 'text-bottom' },
			{ name: 'sub', value: 'sub' },
			{ name: 'super', value: 'super' },
		], { name: 'align-', value: 'vertical-align', scss: 0 })
	}
	const Whitespace = { title: 'Whitespace', classes: getClasses(`normal, nowrap, pre, pre-line, pre-wrap, break-spaces`, { name: 'whitespace-', value: 'white-space', scss: 0 }) }
	const WordBreak = {
		title: 'WordBreak',
		classes: [
			{name: 'break-normal', value: ['overflow-wrap: normal;', 'word-break: normal;']},
			{name: 'break-words', value: ['overflow-wrap: break-word;']},
			{name: 'break-all', value: ['word-break: break-all;']},
			{name: 'break-keep', value: ['word-break: keep-all;']},
		]
	}
	const Hyphens = { title: 'Hyphens', classes: getClasses(`none, manual, auto`, { name: 'hyphens-', value: 'hyphens', scss: 0 }) }
	const Content = { title: 'Content', classes: getClasses(`none`, { name: 'content-', value: 'content', scss: 0 }) }


	return {
		FontFamily,
		FontSize,
		FontSmoothing,
		FontStyle,
		FontWeight,
		FontVariantNumeric,
		LetterSpacing,
		LineClamp,
		LineHeight,
		ListStyleImage,
		ListStylePosition,
		ListStyleType,
		TextAlign,
		TextColor,
		TextDecoration,
		TextDecorationColor,
		TextDecorationStyle,
		TextDecorationThickness,
		TextUnderlineOffset,
		TextTransform,
		TextOverflow,
		TextIndent,
		VerticalAlign,
		Whitespace,
		WordBreak,
		Hyphens,
		Content
	}

}

export default useHook
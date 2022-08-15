import {test, expect} from 'vitest'
import tzOffset, {withTz} from './index.js'

test('tzOffset', () => {
	expect(tzOffset('Asia/Shanghai')).toEqual(480)
	expect(tzOffset('UTC')).toEqual(0)
})

test('withTz', () => {
	const utc = Date.UTC(2000, 0)
	expect(withTz(utc, 'Asia/Shanghai').getTime()).toEqual(
		new Date(utc).setHours(8),
	)
})

import {test, expect} from 'vitest'
import {tzOffset, withTz} from './index.js'

test('tzOffset', () => {
	expect(tzOffset('Asia/Shanghai')).toEqual(480)
	expect(tzOffset('Etc/GMT+8')).toEqual(-480)
})

test('withTz', () => {
	const utc = Date.UTC(2000, 0)

	expect(
		withTz('Asia/Shanghai', utc).getTime(),
	).toEqual(
		new Date(utc).setHours(8),
	)
})

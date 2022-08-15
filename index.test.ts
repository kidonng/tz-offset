import {test, expect} from 'vitest'
import tzOffset from './index.js'

test('Does exactly what it says on the tin', () => {
	expect(tzOffset('Asia/Shanghai')).toEqual(480)
	expect(tzOffset('UTC')).toEqual(0)
})

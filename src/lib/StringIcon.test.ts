import { expect, test, it } from 'vitest'
import { StringIcon } from './StringIcon'

test('test type', () => {
  expect(StringIcon(4)).toBe(' ')
})

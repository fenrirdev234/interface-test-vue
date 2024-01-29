// @ts-nocheck
import { expect, test, it } from 'vitest'
import { StringIcon } from './StringIcon'

test('test type', () => {
  expect(StringIcon(4)).toBe(' ')
})
test('test sting random', () => {
  expect(StringIcon('hi')).toBe(' ')
})
test('test correct string', () => {
  expect(StringIcon('country')).toBe('location_on')
})

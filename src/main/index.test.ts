import { describe, test, expect, it } from 'vitest'
import { sum } from '.'

describe('First test if vitest', () => {
  test('#Sum', (ctx) => {
    expect(sum(3, 5)).toBe(8)
  })
})

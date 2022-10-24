import { describe, test, expect } from 'vitest'
import { factoryUpdateUseCaseFake } from './factory-fake/update'
import { loginEntityMock } from './mock/login-entity'

describe('# Login - Update', () => {
  test('Success to upate password', async () => {
    const usecase = factoryUpdateUseCaseFake()
    const result = await usecase.execute(loginEntityMock)

    expect(result).toStrictEqual(true)
  })
})

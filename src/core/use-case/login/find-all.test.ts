import { describe, test, expect } from 'vitest'
import { factoryFindAllUseCaseFake } from './factory-fake/find-all'
import { loginEntityMock } from './mock/login-entity'

describe('# Login - Findall', () => {
  test('Success to find all Login entity', async () => {
    const usecase = factoryFindAllUseCaseFake()
    const result = await usecase.execute()

    expect(result).toStrictEqual([loginEntityMock])
  })
})

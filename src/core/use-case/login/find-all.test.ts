import { describe, test, expect } from 'vitest'
import { factoryFindAllUseCaseFake } from './factory-fake/find-all'
import { loginEntityMock } from './mock/login-entity-mock'

describe('# Login - Findall', () => {
  test('Success to find all Login entity', async () => {
    const usecase = factoryFindAllUseCaseFake([loginEntityMock])
    const result = await usecase.execute()

    expect(result).toStrictEqual([loginEntityMock])
  })

  test('Error to find all Login entity', async () => {
    const usecase = factoryFindAllUseCaseFake([])
    const result = await usecase.execute()

    expect(result).toStrictEqual([])
  })
})

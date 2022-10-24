import { describe, test, expect } from 'vitest'
import { factoryFindByIdUseCaseFake } from './factory-fake/find-by-id'
import { loginEntityMock } from './mock/login-entity'

describe('# Login - Find by Id', () => {
  test('Success to find by id', async () => {
    const usecase = factoryFindByIdUseCaseFake()
    const result = await usecase.execute(loginEntityMock.id)
    expect(result).toStrictEqual(loginEntityMock)
  })
})

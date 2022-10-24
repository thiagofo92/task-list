import { describe, test, expect } from 'vitest'
import { factoryDeleteUseCaseFake } from './factory-fake/delete'
import { loginEntityMock } from './mock/login-entity'

describe('# Login - Delete', () => {
  test('Success to delete the user', async () => {
    const usecase = factoryDeleteUseCaseFake()
    const result = await usecase.execute(loginEntityMock.id)

    expect(result).toStrictEqual(true)
  })
})

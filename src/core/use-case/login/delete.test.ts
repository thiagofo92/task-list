import { describe, test, expect } from 'vitest'
import { factoryDeleteUseCaseFake } from './factory-fake/delete'
import { loginEntityMock } from './mock/login-entity'

describe('# Login - Delete', () => {
  test('Success to delete the user', async () => {
    const usecase = factoryDeleteUseCaseFake([loginEntityMock])
    const result = await usecase.execute(loginEntityMock.id)

    expect(result).toStrictEqual(true)
  })

  test('Error to delete the user', async () => {
    const usecase = factoryDeleteUseCaseFake(null as any)
    const result = await usecase.execute(loginEntityMock.id)

    expect(result).toStrictEqual(false)
  })
})

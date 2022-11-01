import { describe, test, expect } from 'vitest'
import { DeleteLoginError } from '@core/repositories/error/login-error'
import { factoryDeleteUseCaseFake } from './factory-fake/delete'
import { loginMock } from '@infra/repositories/memory/mock/login-entity-mock'

describe('# Login - Delete', () => {
  test('Success to delete the user', async () => {
    const usecase = factoryDeleteUseCaseFake([loginMock])
    const result = await usecase.execute(loginMock.id)

    expect(result).toStrictEqual(true)
  })

  test('Error to delete the user', async () => {
    const usecase = factoryDeleteUseCaseFake(null as any)
    const result = usecase.execute(loginMock.id)

    await expect(result).rejects.toThrowError(DeleteLoginError)
  })
})

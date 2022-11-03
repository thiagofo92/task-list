import { describe, test, expect } from 'vitest'
import { DeleteLoginError } from '@core/repositories/error/login-error'
import { factoryDeleteUseCaseFake } from './factory-fake/delete'
import { loginMock } from '@infra/repositories/memory/mock/login-mock'

describe('# Login - Delete', () => {
  test('Success to delete the user', async () => {
    const usecase = factoryDeleteUseCaseFake()
    const result = await usecase.execute(loginMock.id)

    expect(result).toStrictEqual(true)
  })

  test('User not found', async () => {
    const usecase = factoryDeleteUseCaseFake()
    const result = await usecase.execute('')

    expect(result).toStrictEqual(false)
  })

  test('Error to delete the user', async () => {
    const usecase = factoryDeleteUseCaseFake()
    const result = usecase.execute(loginMock.id)

    await expect(result).rejects.toThrowError(DeleteLoginError)
  })
})

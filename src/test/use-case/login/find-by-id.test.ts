import { FindByIdLoginError } from '@core/repositories/error/login-error'
import { describe, test, expect } from 'vitest'
import { factoryFindByIdUseCaseFake } from './factory-fake/find-by-id'
import { loginMock } from '@infra/repositories/memory/mock/login-mock'

describe('# Login - Find by Id', () => {
  test('Success to find by id', async () => {
    const usecase = factoryFindByIdUseCaseFake()
    const result = await usecase.execute(loginMock.id)
    expect(result).toStrictEqual(loginMock)
  })

  test('Error to find by id', async () => {
    const usecase = factoryFindByIdUseCaseFake()
    const result = usecase.execute(loginMock.id)
    await expect(result).rejects.toThrowError(FindByIdLoginError)
  })
})
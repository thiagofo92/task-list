import { CreateLoginError } from '@core/repositories/error/login-error'
import { describe, expect, test } from 'vitest'
import { factoryCreateUseCaseFake } from './factory-fake/create'
import { loginMock } from '@infra/repositories/memory/mock/login-entity-mock'

describe('#Login create', () => {
  test('Create login with success', async () => {
    const usecase = factoryCreateUseCaseFake([loginMock])

    const result = await usecase.execute(loginMock)
    expect(result).toStrictEqual(loginMock)
  })
  test('Generate login error when try to create login', async () => {
    const usecase = factoryCreateUseCaseFake(null as any)

    const result = usecase.execute(loginMock)
    await expect(result).rejects.toThrowError(CreateLoginError)
  })
})

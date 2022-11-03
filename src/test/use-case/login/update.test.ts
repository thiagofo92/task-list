import { NotFoundIdUpdateLoginError, UpdateLoginError } from '@core/repositories/error/login-error'
import { describe, test, expect, beforeEach } from 'vitest'
import { factoryUpdateUseCaseFake } from './factory-fake/update'
import { loginMock } from '@infra/repositories/memory/mock/login-mock'

const LoginMock = { ...loginMock }

describe('# Login - Update', () => {
  beforeEach(() => {
    LoginMock.id = loginMock.id
    LoginMock.email = loginMock.email
    LoginMock.password = loginMock.password
  })
  test('Success to upate password', async () => {
    const usecase = factoryUpdateUseCaseFake()
    const result = await usecase.execute(LoginMock)

    expect(result).toStrictEqual(true)
  })

  test('Error to upate password', async () => {
    const usecase = factoryUpdateUseCaseFake()
    const result = usecase.execute(LoginMock)

    await expect(result).rejects.toThrowError(UpdateLoginError)
  })

  test('Error to find id', async () => {
    LoginMock.id = ''
    const usecase = factoryUpdateUseCaseFake()
    const result = usecase.execute(LoginMock)

    await expect(result).rejects.toThrowError(NotFoundIdUpdateLoginError)
  })
})

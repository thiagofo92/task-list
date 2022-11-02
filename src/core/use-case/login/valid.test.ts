import { NotFoundEmailError, NotFoundPasswordError, ValidLoginError } from '@core/repositories/error/login-error'
import { beforeEach, describe, expect, test } from 'vitest'
import { factoryValidUseCase } from './factory-fake/valid-use-case'
import { loginMock } from '@infra/repositories/memory/mock/login-mock'

const loginFake = { ...loginMock }

describe('#Login - Valid', () => {
  beforeEach(() => {
    loginFake.email = 'test@test.com.br'
    loginFake.password = '1234'
  })

  test('Success to valid login', async () => {
    const validLogin = factoryValidUseCase()
    const isValid = await validLogin.execute(loginFake)

    expect(isValid).toStrictEqual(true)
  })

  test('Invalid login with password', async () => {
    const validLogin = factoryValidUseCase()
    loginFake.password = '123'
    const isValid = validLogin.execute(loginFake)

    await expect(isValid).rejects.toThrowError(NotFoundPasswordError)
  })

  test('Invalid login with email', async () => {
    const validLogin = factoryValidUseCase()
    loginFake.email = ''
    const isValid = validLogin.execute(loginFake)

    await expect(isValid).rejects.toThrowError(NotFoundEmailError)
  })

  test('Error to valid login', async () => {
    const validLogin = factoryValidUseCase()
    loginFake.email = ''
    const isValid = validLogin.execute(loginFake)

    await expect(isValid).rejects.toThrowError(ValidLoginError)
  })
})

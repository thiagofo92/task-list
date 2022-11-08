import { describe, expect, test, vi } from 'vitest'

import { ValidLoginError } from '@core/repositories/error/login-error'
import { LoginValidUseCase } from '@app/use-case/login'
import { DbLoginMock } from '../../infra/db/mocks/db-login-mock'
import { mockLogin } from '@test/core/mocks'

interface FactoryLoginValidUseCase {
  sut: LoginValidUseCase
  dbLogin: DbLoginMock
}

function factoryValidUseCase (): FactoryLoginValidUseCase {
  const dbLogin = new DbLoginMock()
  const sut = new LoginValidUseCase(dbLogin)

  return {
    sut,
    dbLogin
  }
}

describe('#Login - Valid', () => {
  test('Success to valid login', async () => {
    const { sut } = factoryValidUseCase()
    const login = mockLogin()
    const isValid = await sut.execute(login)

    expect(isValid).toStrictEqual(true)
  })

  test('Invalid login with password', async () => {
    const { sut } = factoryValidUseCase()
    const login = mockLogin()
    login.password = ''

    const isValid = await sut.execute(login)

    expect(isValid).toStrictEqual(false)
  })

  test('Invalid login with email', async () => {
    const { sut } = factoryValidUseCase()
    const login = mockLogin()
    login.email = ''

    const isValid = await sut.execute(login)

    expect(isValid).toStrictEqual(false)
  })

  test('Error to valid login', async () => {
    const { sut, dbLogin } = factoryValidUseCase()
    vi.spyOn(dbLogin, 'valid').mockRejectedValueOnce(new ValidLoginError('Test valid login'))
    const isValid = sut.execute({} as any)

    await expect(isValid).rejects.toThrowError(ValidLoginError)
  })
})

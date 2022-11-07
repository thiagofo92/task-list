import { describe, expect, test, vi } from 'vitest'

import { CreateLoginError } from '@core/repositories/error/login-error'
import { LoginCreateUseCase } from '@app/use-case/login'
import { DbLoginMock } from '../mocks/db-login-mock'
import { mockLogin } from '@test/core/mocks'

interface FactoryLoginCreateUseCase {
  sut: LoginCreateUseCase
  dbLogin: DbLoginMock
}

function factoryStub (): FactoryLoginCreateUseCase {
  const dbLogin = new DbLoginMock()
  const sut = new LoginCreateUseCase(dbLogin)

  return { sut, dbLogin }
}

describe('#Login create', () => {
  test('Create login with success', async () => {
    const login = mockLogin()
    const { sut } = factoryStub()

    const result = await sut.execute(login)
    expect(result).toStrictEqual(login)
  })

  test('Generate login error when try to create login', async () => {
    const { sut, dbLogin } = factoryStub()
    vi.spyOn(dbLogin, 'create').mockRejectedValueOnce(new CreateLoginError('Mock error'))
    const result = sut.execute({} as any)
    await expect(result).rejects.toThrowError(CreateLoginError)
  })
})

import { describe, test, expect, vi } from 'vitest'

import { FindByIdLoginError } from '@core/repositories/error/login-error'
import { LoginFindByIdUseCase } from '@app/use-case/login/find-by-id'
import { DbLoginMock } from '../mocks/db-login-mock'
import { mockLogin } from '@test/core/mocks'

interface FactoryLoginFindByIdUseCase {
  sut: LoginFindByIdUseCase
  dbLogin: DbLoginMock
}

function factoryFindByIdUseCase (): FactoryLoginFindByIdUseCase {
  const dbLogin = new DbLoginMock()
  const sut = new LoginFindByIdUseCase(dbLogin)

  return {
    sut,
    dbLogin
  }
}

describe('# Login - Find by Id', () => {
  test('Success to find by id', async () => {
    const { sut } = factoryFindByIdUseCase()
    const login = mockLogin()
    const result = await sut.execute(login.id)
    expect(result).toStrictEqual(result)
  })

  test('ID not found', async () => {
    const { sut } = factoryFindByIdUseCase()
    const result = await sut.execute('')
    expect(result).toStrictEqual(null)
  })

  test('Error to find by id', async () => {
    const { sut, dbLogin } = factoryFindByIdUseCase()
    vi.spyOn(dbLogin, 'findById').mockRejectedValueOnce(new FindByIdLoginError('Test Error'))
    const result = sut.execute('')
    await expect(result).rejects.toThrowError(FindByIdLoginError)
  })
})

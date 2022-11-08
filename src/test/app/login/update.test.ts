import { describe, test, expect, vi } from 'vitest'

import { UpdateLoginError } from '@core/repositories/error/login-error'
import { LoginUpdateUseCase } from '@app/use-case/login/update'
import { DbLoginMock } from '../../infra/db/mocks/db-login-mock'
import { mockLogin } from '@test/core/mocks'

interface FactoryLoginUpdateUseCase {
  sut: LoginUpdateUseCase
  dbLogin: DbLoginMock
}

function factoryUpdateUseCase (): FactoryLoginUpdateUseCase {
  const dbLogin = new DbLoginMock()
  const sut = new LoginUpdateUseCase(dbLogin)

  return {
    sut,
    dbLogin
  }
}

describe('# Login - Update', () => {
  test('Success to upate password', async () => {
    const { sut } = factoryUpdateUseCase()
    const login = mockLogin()
    const result = await sut.execute(login)

    expect(result).toStrictEqual(true)
  })

  test('Id not found', async () => {
    const { sut } = factoryUpdateUseCase()
    const login = mockLogin()
    login.id = ''
    const result = await sut.execute(login)

    await expect(result).toStrictEqual(false)
  })

  test('Error to update user', async () => {
    const { sut, dbLogin } = factoryUpdateUseCase()
    vi.spyOn(dbLogin, 'update').mockRejectedValueOnce(new UpdateLoginError('Test update login'))

    const result = sut.execute({} as any)

    await expect(result).rejects.toThrowError(UpdateLoginError)
  })
})

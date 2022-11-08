import { describe, test, expect, vi } from 'vitest'

import { DeleteLoginError } from '@core/repositories/error/login-error'
import { LoginDeleteUseCase } from '@app/use-case/login/delete'
import { DbLoginMock } from '../../infra/db/mocks/db-login-mock'
import { mockLogin } from '@test/core/mocks'

interface FactoryLoginDeleteUseCase {
  sut: LoginDeleteUseCase
  dbLogin: DbLoginMock
}

function factoryDeleteUseCase (): FactoryLoginDeleteUseCase {
  const dbLogin = new DbLoginMock()
  const sut = new LoginDeleteUseCase(dbLogin)
  return {
    sut,
    dbLogin
  }
}

describe('# Login - Delete', () => {
  test('Success to delete the user', async () => {
    const { sut } = factoryDeleteUseCase()

    const result = await sut.execute(mockLogin().id)
    expect(result).toStrictEqual(true)
  })

  test('User not found', async () => {
    const { sut } = factoryDeleteUseCase()
    const result = await sut.execute('')
    expect(result).toStrictEqual(false)
  })

  test('Error to delete the user', async () => {
    const { sut, dbLogin } = factoryDeleteUseCase()

    vi.spyOn(dbLogin, 'del').mockRejectedValueOnce(new DeleteLoginError('Test delete login - mock'))
    const result = sut.execute(mockLogin().id)

    await expect(result).rejects.toThrowError(DeleteLoginError)
  })
})

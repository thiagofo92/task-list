import { describe, test, expect, vi } from 'vitest'

import { LoginFindAllUseCase } from '@app/use-case/login/find-all'
import { LoginEntity } from '@core/entities'
import { FindAllLoginError } from '@core/repositories/error/login-error'
import { DbLoginMock } from '../mocks/db-login-mock'

interface FactoryLoginFindAllUseCase {
  sut: LoginFindAllUseCase
  dbLogin: DbLoginMock
}

function factoryFindAllUseCase (): FactoryLoginFindAllUseCase {
  const dbLogin = new DbLoginMock()
  const sut = new LoginFindAllUseCase(dbLogin)

  return {
    sut,
    dbLogin
  }
}

describe('# Login - Findall', () => {
  test('Success to find all Login entity', async () => {
    const { sut } = factoryFindAllUseCase()
    const result = await sut.execute()

    expect(result.length).toBeGreaterThan(0)
    expect(result[0]).toBeInstanceOf(LoginEntity)
  })

  test('Error to find all Login entity', async () => {
    const { sut, dbLogin } = factoryFindAllUseCase()
    vi.spyOn(dbLogin, 'findAll').mockRejectedValueOnce(new FindAllLoginError('Test find all login'))
    const result = sut.execute()

    await expect(result).rejects.toThrowError(FindAllLoginError)
  })
})

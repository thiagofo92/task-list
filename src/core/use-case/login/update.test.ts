import { NotFoundIdUpdateLoginError, UpdateLoginError } from '@core/repositories/error/login-error'
import { describe, test, expect, beforeEach } from 'vitest'
import { factoryUpdateUseCaseFake } from './factory-fake/update'
import { loginEntityMock } from './mock/login-entity-mock'

const loginMock = { ...loginEntityMock }

describe('# Login - Update', () => {
  beforeEach(() => {
    loginMock.id = loginEntityMock.id
    loginMock.email = loginEntityMock.email
    loginMock.password = loginEntityMock.password
  })
  test('Success to upate password', async () => {
    const usecase = factoryUpdateUseCaseFake([loginEntityMock])
    const result = await usecase.execute(loginEntityMock)

    expect(result).toStrictEqual(true)
  })

  test('Error to upate password', async () => {
    const usecase = factoryUpdateUseCaseFake(null as any)
    const result = usecase.execute(loginEntityMock)

    await expect(result).rejects.toThrowError(UpdateLoginError)
  })

  test('Error to find id', async () => {
    loginMock.id = ''
    const usecase = factoryUpdateUseCaseFake([loginMock])
    const result = usecase.execute(loginEntityMock)

    await expect(result).rejects.toThrowError(NotFoundIdUpdateLoginError)
  })
})

import { NotFoundIdUpdateLoginError, UpdateLoginError } from '@core/repositories/error/login-error'
import { describe, test, expect, beforeEach } from 'vitest'
import { factoryUpdateUseCaseFake } from './factory-fake/update'
import { loginMock } from '@infra/repositories/memory/mock/login-entity-mock'

const loginMock = { ...loginMock }

describe('# Login - Update', () => {
  beforeEach(() => {
    loginMock.id = loginMock.id
    loginMock.email = loginMock.email
    loginMock.password = loginMock.password
  })
  test('Success to upate password', async () => {
    const usecase = factoryUpdateUseCaseFake([loginMock])
    const result = await usecase.execute(loginMock)

    expect(result).toStrictEqual(true)
  })

  test('Error to upate password', async () => {
    const usecase = factoryUpdateUseCaseFake(null as any)
    const result = usecase.execute(loginMock)

    await expect(result).rejects.toThrowError(UpdateLoginError)
  })

  test('Error to find id', async () => {
    loginMock.id = ''
    const usecase = factoryUpdateUseCaseFake([loginMock])
    const result = usecase.execute(loginMock)

    await expect(result).rejects.toThrowError(NotFoundIdUpdateLoginError)
  })
})

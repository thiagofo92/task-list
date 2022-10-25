import { beforeEach, describe, expect, test } from 'vitest'
import { factoryValidUseCase } from './factory-fake/valid-use-case'
import { loginEntityMock } from './mock/login-entity'

const loginFake = { ...loginEntityMock }

describe('#Login - Valid', () => {
  beforeEach(() => {
    loginFake.email = 'test@test.com.br'
    loginFake.password = '1234'
  })

  test('Success to valid login', async () => {
    const validLogin = factoryValidUseCase([loginEntityMock])
    const isValid = await validLogin.execute(loginFake)

    expect(isValid).toStrictEqual(true)
  })

  test('Invalid login with password', async () => {
    const validLogin = factoryValidUseCase([loginEntityMock])
    loginFake.password = '123'
    const isValid = await validLogin.execute(loginFake)

    expect(isValid).toStrictEqual(false)
  })

  test('Invalid login with email', async () => {
    const validLogin = factoryValidUseCase([loginEntityMock])
    loginFake.email = ''
    const isValid = await validLogin.execute(loginFake)

    expect(isValid).toStrictEqual(false)
  })

  test('Error to valid login', async () => {
    const validLogin = factoryValidUseCase(null as any)
    loginFake.email = ''
    const isValid = await validLogin.execute(loginFake)

    expect(isValid).toStrictEqual(false)
  })
})

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
    const validLogin = factoryValidUseCase()
    const isValid = await validLogin.execute(loginFake)

    expect(isValid).toStrictEqual(true)
  })

  test.skip('Invalid login', async () => {
    const validLogin = factoryValidUseCase()
    loginFake.password = '123'
    const isValid = await validLogin.execute(loginFake)

    expect(isValid).toStrictEqual(false)
  })
})

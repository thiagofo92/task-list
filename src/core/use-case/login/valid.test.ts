import { randomUUID } from 'crypto'
import { beforeEach, describe, expect, test } from 'vitest'
import { LoginModel } from '@app/models/login'
import { factoryValidUseCase } from './factory-fake/valid-use-case'

const loginFake: LoginModel = {
  id: randomUUID(),
  email: 'test@test.com.br',
  password: '1234'
}

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

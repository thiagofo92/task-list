import { LoginMockService } from '@infra/services/__test__/__mocks__/login-service-mock'
import { describe, test, expect } from 'vitest'
import { LoginUseCase } from '../login-use-case'
import { LoginCreationInModel, LoginUpdateInModel } from '@app/model/input'
import { LoginCreationOutModel } from '@app/model/output'

interface FactoryLogin {
  sut: LoginUseCase
}

function Factory (): FactoryLogin {
  const service = new LoginMockService()
  const sut = new LoginUseCase(service)
  return { sut }
}

describe('# Login Use case', () => {
  test('Sucess to create login', async () => {
    const { sut } = Factory()
    const login: LoginCreationInModel = {} as any

    const result = await sut.create(login)
    const expected = { id: '0' }

    expect(result.value).toStrictEqual(expected)
  })

  test('Sucess to update login', async () => {
    const { sut } = Factory()
    const login: LoginCreationInModel = {
      password: 'test',
      email: 'test@test',
      nickName: 'test_test'
    }

    const created = await sut.create(login)
    const loginCreated = created.value as LoginCreationOutModel
    const loginUpdate: LoginUpdateInModel = {
      id: loginCreated.id,
      nickName: 'Updated test',
      password: 'Updated password'
    }

    const expected = {
      nickName: loginUpdate.nickName,
      password: loginUpdate.password
    }

    const result = await sut.update(loginUpdate)
    expect(result.value).toStrictEqual(expected)
  })
  test.todo('Sucess to authenticate the login and password')
  test.todo('Sucess to find all login')
  test.todo('Sucess to find login by id')
  test.todo('Sucess to find login by email')
})

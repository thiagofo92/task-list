import { LoginMockService } from '@infra/services/__test__/__mocks__/login-service-mock'
import { describe, test, expect, vi } from 'vitest'
import { LoginUseCase } from '../login-use-case'
import { LoginCreationInModel, LoginUpdateInModel } from '@app/model/input'

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
    const expected = { id: '1' }

    expect(result.value).toStrictEqual(expected)
  })

  test('Sucess to update login', async () => {
    const { sut } = Factory()
    const login: LoginUpdateInModel = {} as any

    const result = await sut.update(login)
    const expected = { id: '1' }

    expect(result.value).toStrictEqual(expected)
  })
  test.todo('Sucess to authenticate the login and password')
  test.todo('Sucess to find all login')
  test.todo('Sucess to find login by id')
  test.todo('Sucess to find login by email')
})

import { LoginRepository } from '@core/repositories'
import { LoginMockService } from '@infra/services/__test__/__mocks__/login-service-mock'
import { describe, test, expect, vi } from 'vitest'
import { LoginUseCase } from '../login-use-case'
import { LoginCreationInModel } from '@app/model'

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
    const expected = ''

    expect(result).toStrictEqual(expected)
  })
  test.todo('Sucess to update login')
  test.todo('Sucess to authentica the login and password')
  test.todo('Sucess to find all login')
  test.todo('Sucess to find login by id')
  test.todo('Sucess to find login by email')
})

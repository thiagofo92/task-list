import { describe, test, expect, vi, beforeEach, MockedObject } from 'vitest'
import { LoginUseCase } from '../login-use-case'
import { LoginCreationInModel, LoginUpdateInModel } from '@app/model/input'
import { LoginCreationOutModel } from '@app/model/output'
import { LoginContractRepository } from '@core/repositories'
import { LoginCreationError } from '@infra/repositories/error/login-error'
import { LoginRepository } from '@infra/repositories'
import { right } from '@shared/error/etheir'
interface FactoryLogin {
  sut: LoginUseCase
  repositoryMocked: MockedObject<LoginContractRepository>
}

vi.mock('@infra/repositories/login-repository')

function Factory (): FactoryLogin {
  const repositoryMocked = vi.mocked(new LoginRepository())
  const sut = new LoginUseCase(repositoryMocked)
  return { sut, repositoryMocked }
}

describe('# Login Use case', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  test('Sucess to create login', async () => {
    const { sut, repositoryMocked } = Factory()
    const login: LoginCreationInModel = {} as any

    repositoryMocked.create.mockResolvedValueOnce(right({ id: '0' }))

    const result = await sut.create(login)
    const expected = { id: '0' }

    expect(result.value).toStrictEqual(expected)
  })

  test('Error to create login', async () => {
    const { sut, repositoryMocked } = Factory()

    const login: LoginCreationInModel = {} as any

    const result = await sut.create(login)

    expect(result.value).instanceOf(LoginCreationError)
  })

  test('Sucess to update login', async () => {
    const { sut, repositoryMocked } = Factory()
    const loginUpdate: LoginUpdateInModel = {
      id: '0',
      nickName: 'Updated test',
      password: 'Updated password'
    }

    repositoryMocked.update.mockResolvedValueOnce(
      right({
        nickName: 'Updated test',
        password: 'Updated password'
      }))

    const result = await sut.update(loginUpdate)
    const expected = {
      nickName: loginUpdate.nickName,
      password: loginUpdate.password
    }

    expect(result.value).toStrictEqual(expected)
  })

  test('Sucess to find all login', async () => {
    const { sut, repositoryMocked } = Factory()

    repositoryMocked.findAll.mockResolvedValueOnce(right([{
      id: '0',
      password: 'test',
      email: 'test@test',
      nickName: 'test_test'
    }]))

    const result = await sut.findAll()
    const expected = {
      id: '0',
      password: 'test',
      email: 'test@test',
      nickName: 'test_test'
    }

    expect(result.value).toStrictEqual([expected])
  })

  test('Sucess to find login by id', async () => {
    const { sut, repositoryMocked } = Factory()

    repositoryMocked.findById.mockResolvedValueOnce(right({
      id: '0',
      password: 'test',
      email: 'test@test',
      nickName: 'test_test'
    }))

    const result = await sut.findById('0')
    const expected = {
      id: '0',
      password: 'test',
      email: 'test@test',
      nickName: 'test_test'
    }

    expect(result.value).toStrictEqual(expected)
  })

  test('Sucess to find login by email', async () => {
    const { sut, repositoryMocked } = Factory()

    repositoryMocked.findByEmail.mockResolvedValueOnce(right({
      id: '0',
      password: 'test',
      email: 'test@test',
      nickName: 'test_test'
    }))

    const result = await sut.findByEmail('test@test')
    const expected = {
      id: '0',
      password: 'test',
      email: 'test@test',
      nickName: 'test_test'
    }

    expect(result.value).toStrictEqual(expected)
  })

  test('Sucess to authenticate the login and password', async () => {
    const { sut, repositoryMocked } = Factory()
    const login: LoginCreationInModel = {
      password: 'test',
      email: 'test@test',
      nickName: 'test_test'
    }

    repositoryMocked.authenticationLogin.mockResolvedValueOnce(right(true))

    const result = await sut.authenticationLogin({ email: login.email, password: login.password })
    const expected = true

    expect(result.value).toStrictEqual(expected)
  })
})

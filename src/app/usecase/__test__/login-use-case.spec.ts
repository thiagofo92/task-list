import { LoginRepository } from '@core/repositories'
import { LoginMockService } from '@infra/services/__test__/__mocks__/login-service-mock'
import { describe, test, expect, vi } from 'vitest'

interface FactoryLogin {
  sut: LoginRepository
}

function Factory (): FactoryLogin {
  const sut = new LoginMockService()
  return { sut }
}

describe('# Login Use case', () => {
  test.todo('Sucess to create login')
  test.todo('Sucess to update login')
  test.todo('Sucess to authentica the login and password')
  test.todo('Sucess to find all login')
  test.todo('Sucess to find login by id')
  test.todo('Sucess to find login by email')
})

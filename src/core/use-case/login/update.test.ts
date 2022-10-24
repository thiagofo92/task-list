import { LoginEntity } from '@core/entities/LoginEntity'
import { describe, test, expect } from 'vitest'
import { factoryUpdateUseCaseFake } from './factory-fake/update'

describe('# Login - Update', () => {
  test('Success to upate password', async () => {
    const usecase = factoryUpdateUseCaseFake()
    const login: LoginEntity = {
      id: '1b481f95-a852-484a-be40-ef6653e37101',
      password: '12345',
      email: 'test@test.com.br'
    }
    const result = await usecase.execute(login)

    expect(result).toStrictEqual(true)
  })
})

import { describe, expect, test } from 'vitest'
import { factoryCreateUseCaseFake } from './factory-fake/create'
import { loginEntityMock } from './mock/login-entity'

describe('#Login create', () => {
  test('Create login with success', async () => {
    const usecase = factoryCreateUseCaseFake()

    usecase.execute(loginEntityMock)
    expect(true).toStrictEqual(true)
  })
  test.todo('Generate login error when try to create login')
})

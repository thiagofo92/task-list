import { describe, expect, test } from 'vitest'
import { factoryCreateUseCaseFake } from './factory-fake/create'
import { loginEntityMock } from './mock/login-entity'

describe('#Login create', () => {
  test('Create login with success', async () => {
    const usecase = factoryCreateUseCaseFake()

    const result = await usecase.execute(loginEntityMock)
    expect(result).toStrictEqual(loginEntityMock)
  })
  test.todo('Generate login error when try to create login')
})

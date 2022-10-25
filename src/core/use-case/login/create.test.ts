import { CreateLoginError } from '@core/repositories/error/login-error'
import { describe, expect, test } from 'vitest'
import { factoryCreateUseCaseFake } from './factory-fake/create'
import { loginEntityMock } from './mock/login-entity'

describe('#Login create', () => {
  test('Create login with success', async () => {
    const usecase = factoryCreateUseCaseFake([loginEntityMock])

    const result = await usecase.execute(loginEntityMock)
    expect(result).toStrictEqual(loginEntityMock)
  })
  test('Generate login error when try to create login', async () => {
    const usecase = factoryCreateUseCaseFake(null as any)

    const result = usecase.execute(loginEntityMock)
    await expect(result).rejects.toThrowError(CreateLoginError)
  })
})

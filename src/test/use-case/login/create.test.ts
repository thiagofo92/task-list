import { describe, expect, test } from 'vitest'

import { CreateLoginError } from '@core/repositories/error/login-error'
import { factoryCreateUseCase } from './factory-fake/create'

describe('#Login create', () => {
  test('Create login with success', async () => {
    const { sut, data } = factoryCreateUseCase()

    const result = await sut.execute(data)
    expect(result).toStrictEqual(data)
  })
  test('Generate login error when try to create login', async () => {
    const { sut, data } = factoryCreateUseCase()

    const result = sut.execute(data)
    await expect(result).rejects.toThrowError(CreateLoginError)
  })
})

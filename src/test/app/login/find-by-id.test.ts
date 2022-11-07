import { describe, test, expect, vi } from 'vitest'

import { FindByIdLoginError } from '@core/repositories/error/login-error'
import { factoryFindByIdUseCaseFake } from './factory-fake/find-by-id'

describe('# Login - Find by Id', () => {
  test('Success to find by id', async () => {
    const usecase = factoryFindByIdUseCaseFake()
    const result = await usecase.execute(loginMock.id)
    expect(result).toStrictEqual(loginMock)
  })

  test('Error to find by id', async () => {
    const usecase = factoryFindByIdUseCaseFake()
    vi.spyOn(usecase, 'execute').mockRejectedValueOnce(new FindByIdLoginError('Test Error'))
    const result = usecase.execute(loginMock.id)
    await expect(result).rejects.toThrowError(FindByIdLoginError)
  })
})

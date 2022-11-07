import { describe, test, expect, vi } from 'vitest'

import { LoginFindAllUseCase } from '@app/use-case/login/find-all'
import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { factoryCreateUseCase } from './factory-fake/create'
import { factoryFindAllUseCaseFake } from './factory-fake/find-all'
import { LoginEntity } from '@core/entities'
import { FindAllLoginError } from '@core/repositories/error/login-error'

function factoryLoginDeleteUsecase (): LoginFindAllUseCase {
  return new LoginFindAllUseCase(new LoginRepositoryMemory())
}

describe('# Login - Findall', () => {
  test('Success to find all Login entity', async () => {
    const { sutLoginCreate, data } = factoryCreateUseCase()
    const usecase = factoryLoginDeleteUsecase()
    await sutLoginCreate.execute(data)

    const result = await usecase.execute()

    expect(result.length).toBeGreaterThan(0)
    expect(result[0]).toBeInstanceOf(LoginEntity)
  })

  test('Error to find all Login entity', async () => {
    const usecase = factoryFindAllUseCaseFake()
    const fakeExecute = async (): Promise<LoginEntity[]> =>
      await Promise.reject(new FindAllLoginError('Teste login find all'))

    usecase.execute = vi.fn(fakeExecute)
    const result = usecase.execute()

    await expect(result).rejects.toThrowError(FindAllLoginError)
  })
})

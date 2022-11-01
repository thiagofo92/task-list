import { describe, test, expect } from 'vitest'
import { factoryFindAllUseCaseFake } from './factory-fake/find-all'
import { loginMock } from '@infra/repositories/memory/mock/login-entity-mock'

describe('# Login - Findall', () => {
  test('Success to find all Login entity', async () => {
    const usecase = factoryFindAllUseCaseFake([loginMock])
    const result = await usecase.execute()

    expect(result).toStrictEqual([loginMock])
  })

  test('Error to find all Login entity', async () => {
    const usecase = factoryFindAllUseCaseFake([])
    const result = await usecase.execute()

    expect(result).toStrictEqual([])
  })
})

import { describe, test, expect } from 'vitest'
import { ListCreateUseCase } from './create'

describe('# List - create', () => {
  test('Success to create the list', async () => {
    const usecase = new ListCreateUseCase()
    const result = await usecase.execute()
    expect(result).toStrictEqual(true)
  })
  test.todo('Error when try to create the list')
})

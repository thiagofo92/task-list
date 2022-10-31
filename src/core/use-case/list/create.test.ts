import { describe, test, expect } from 'vitest'
import { ListModel } from '@app/models/list'
import { ListCreateUseCase } from './create'
import { factoryListCreate } from './factory/create'

describe('# List - create', () => {
  test('Success to create the list', async () => {
    const usecase = factoryListCreate()
    const result = await usecase.execute()
    const list: ListModel = { id: 0, type: '' }

    expect(result).toMatchObject(list)
  })
  test.todo('Error when try to create the list')
})

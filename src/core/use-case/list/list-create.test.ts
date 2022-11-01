import { describe, test, expect } from 'vitest'
import { ListCreateModel } from '@app/models/list-model'
import { factoryListCreate } from './factory/list-create'
import { listEntityMock } from './mock/list-entity-mock'

describe('# List - create', () => {
  test('Success to create the list', async () => {
    const usecase = factoryListCreate()
    const result = await usecase.execute(listEntityMock)
    const list: ListCreateModel = { idLogin: 0, type: [1], description: 'test' }

    expect(result).toMatchObject(list)
  })
  test.todo('Error when try to create the list')
})

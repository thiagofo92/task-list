import { describe, test, expect } from 'vitest'
import { factoryListCreate } from './factory/list-create'
import { listTypeMock } from '@infra/repositories/memory/mock/list-mock'
import { ListCreateModelPresenter } from '@app/presenter/models/list-create-model'
import { ListCreateModel } from '@app/gateway/models/list-model'
import { loginMock } from '@infra/repositories/memory/mock/login-mock'

describe('# List - create', () => {
  test('Success to create the list', async () => {
    const usecase = factoryListCreate()
    const listTest: ListCreateModel = {
      idLogin: loginMock.id,
      type: listTypeMock.map(item => item.id),
      description: 'Teste list'
    }

    const result = await usecase.execute(listTest)
    const list: ListCreateModelPresenter = { id: 0, description: '', type: [] }

    expect(result).toMatchObject(list)
  })
  test.todo('Error when try to create the list')
})

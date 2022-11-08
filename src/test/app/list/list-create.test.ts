import { ListCreateModel } from '@app/models'
import { ListCreateUseCase } from '@app/use-case/list/list-create'
import { ListCreateError } from '@core/repositories/error/list-error'
import { faker } from '@faker-js/faker'
import { DbListMock } from '@test/infra/db/mocks/db-list-mock'
import { describe, test, vi, expect } from 'vitest'

interface FactoryUseCase {
  sut: ListCreateUseCase
  dbList: DbListMock
}

function factoryUseCase (): FactoryUseCase {
  const dbList = new DbListMock()
  const sut = new ListCreateUseCase(dbList)

  return {
    sut,
    dbList
  }
}

describe('# List - create', () => {
  test('Success to create the list', async () => {
    const { sut } = factoryUseCase()
    const list: ListCreateModel = {
      idLogin: faker.datatype.uuid(),
      type: [1, 2, 3],
      description: faker.lorem.text()
    }
    const result = await sut.execute(list)
    expect(result.id).toBeTruthy()
    expect(result).toEqual(
      expect.objectContaining({
        idLogin: list.idLogin,
        idTypes: list.type,
        description: list.description
      })
    )
  })

  test('Error when try to create the list', async () => {
    const { sut, dbList } = factoryUseCase()
    vi.spyOn(dbList, 'create').mockRejectedValueOnce(new ListCreateError('Test Error'))
    const list: ListCreateModel = {
      idLogin: faker.datatype.uuid(),
      type: [1, 2, 3],
      description: faker.lorem.text()
    }
    const result = sut.execute(list)

    await expect(result).rejects.toThrowError(ListCreateError)
  })
})

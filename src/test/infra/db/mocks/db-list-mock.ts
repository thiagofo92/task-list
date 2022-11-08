import { ListEntity } from '@core/entities'
import {
  ListCreateError,
  ListUpdateError,
  ListFindByIdError,
  ListFindAllError
} from '@core/repositories/error/list-error'
import { ListRepository } from '@core/repositories/list-repository'
import { faker } from '@faker-js/faker'
import { Either, left, right } from '@shared/errors/Either'

export class DbListMock implements ListRepository {
  private readonly list: ListEntity[] = []
  async create (list: ListEntity): Promise<Either<ListCreateError, ListEntity>> {
    try {
      list.id = faker.datatype.number()
      this.list.push(list)
      return right(this.list[this.list.length - 1])
    } catch (error) {
      return left(new ListCreateError('Error to create list'))
    }
  }

  async update (list: ListEntity): Promise<Either<ListUpdateError, boolean>> {
    try {
      if (list.id) return right(true)

      return right(false)
    } catch (error) {
      return left(new ListUpdateError('Error to create list'))
    }
  }

  async findById (id: number): Promise<Either<ListFindByIdError, ListEntity | null>> {
    try {
      if (id) {
        const list: ListEntity = {
          id: 1,
          idTypes: [1, 2, 3],
          idLogin: faker.datatype.uuid(),
          description: faker.lorem.text()
        }
        return right(list)
      }
      return right(null)
    } catch (error) {
      return left(new ListCreateError('Error to create list'))
    }
  }

  async findAll (): Promise<Either<ListFindAllError, ListEntity[]>> {
    try {
      const list: ListEntity[] = [
        {
          id: 1,
          idLogin: faker.datatype.uuid(),
          idTypes: [1, 2, 3],
          description: faker.lorem.text()
        }
      ]
      return right(list)
    } catch (error) {
      return left(new ListFindAllError('Error to find all list'))
    }
  }
}

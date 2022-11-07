import { ListEntity, ListTypeEntity } from '@core/entities'
import {
  ListCreateError,
  ListUpdateError,
  ListFindByIdError,
  ListFindAllTypeByIdError
} from '@core/repositories/error/list-error'
import { ListRepository } from '@core/repositories/list-repository'
import { Either } from '@shared/errors/Either'

export class DbListMock implements ListRepository {
  async create (list: ListEntity, idListType: number[]): Promise<Either<ListCreateError, ListEntity>> {

  }

  async update (): Promise<Either<ListUpdateError, any>> {

  }

  async findById (id: number): Promise<Either<ListFindByIdError, any>> {

  }

  async findAllTypeById (id: number): Promise<Either<ListFindAllTypeByIdError, ListTypeEntity[]>> {

  }
}

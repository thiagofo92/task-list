import { ListEntity } from '@core/entities'
import { Either } from '@shared/errors/Either'
import {
  ListCreateError,
  ListFindAllError,
  ListFindByIdError,
  ListUpdateError
} from './error/list-error'

export interface ListRepository {
  create: (list: ListEntity) => Promise<Either<ListCreateError, ListEntity>>
  update: (list: ListEntity) => Promise<Either<ListUpdateError, any>>
  findById: (id: number) => Promise<Either<ListFindByIdError, ListEntity | null>>
  findAll: () => Promise<Either<ListFindAllError, ListEntity[]>>
}

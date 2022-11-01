import { ListEntity } from '@core/entities'
import { Either } from '@shared/errors/Either'
import { ListCreateError, ListFindByIdError, ListUpdateError } from './error/list-error'

export interface ListRepository {
  create: (list: ListEntity, idListType: number[]) => Promise<Either<ListCreateError, ListEntity>>
  update: () => Promise<Either<ListUpdateError, any>>
  findById: (id: number) => Promise<Either<ListFindByIdError, any>>
}

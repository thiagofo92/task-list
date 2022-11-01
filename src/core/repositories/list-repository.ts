import { ListEntity } from '@core/entities'
import { Either } from '@shared/errors/Either'
import { ListCreateError, ListUpdateError } from './error/list-error'

export interface ListRepository {
  create: (list: ListEntity, idListType: number[]) => Promise<Either<ListCreateError, ListEntity>>
  update: () => Promise<Either<ListUpdateError, any>>
}

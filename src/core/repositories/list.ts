import { ListModel } from '@app/models/list'
import { ListEntity } from '@core/entities'
import { Either } from '@shared/errors/Either'
import { ListCreateError, ListUpdateError } from './error/list-error'

export interface ListRepository {
  create: (list: ListEntity) => Promise<Either<ListCreateError, ListModel>>
  update: () => Promise<Either<ListUpdateError, any>>
}

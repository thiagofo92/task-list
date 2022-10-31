import { ListModel } from '@app/models/list'
import { Either } from '@shared/errors/Either'
import { ListCreateError, ListUpdateError } from './error/list-error'

export interface ListRepository {
  create: () => Promise<Either<ListCreateError, ListModel>>
  update: () => Promise<Either<ListUpdateError, any>>
}

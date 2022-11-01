import { ListCreateModel } from '@app/models/list-model'
import { ListEntity } from '@core/entities'
import { Either } from '@shared/errors/Either'
import { ListCreateError, ListUpdateError } from './error/list-error'

export interface ListRepository {
  create: (list: ListEntity, idListType: number[]) => Promise<Either<ListCreateError, ListCreateModel>>
  update: () => Promise<Either<ListUpdateError, any>>
}

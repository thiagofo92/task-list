import { ListCreateModel } from '@app/models'
import { ListEntity } from '@core/entities'

export interface ListCreateaUseCaseContract {
  execute: (list: ListCreateModel) => Promise<ListEntity>
}

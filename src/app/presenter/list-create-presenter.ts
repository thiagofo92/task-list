import { ListEntity, ListTypeEntity } from '@core/entities'
import { ListCreateModelPresenter } from './models/list-create-model'

export class ListCreatePresenter {
  execute (list: ListEntity, types: ListTypeEntity[]): ListCreateModelPresenter {
    return {
      id: list.id!,
      description: list.description,
      type: types
    }
  }
}

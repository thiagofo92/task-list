import { ListModel } from '@app/models/list'
import { ListEntity } from '@core/entities'

export const ListCreateGateway = {
  fromDto (List: ListEntity): ListModel {
    return {} as any
  }
}

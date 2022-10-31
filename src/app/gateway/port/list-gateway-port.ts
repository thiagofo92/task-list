import { ListModel } from '@app/models/list'
import { ListEntity } from '@core/entities'

export interface ListCreateGatewayPort {
  toDto: (List: ListModel) => ListEntity
}

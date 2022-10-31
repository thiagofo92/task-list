import { ListModel } from '@app/models/list'
import { ListEntity } from '@core/entities'
import { ListCreateGatewayPort } from './port/list-gateway-port'
export class ListGateway implements ListCreateGatewayPort {
  toDto (List: ListModel): ListEntity {
    return {} as any
  }
}

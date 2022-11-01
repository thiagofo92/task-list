import { ListCreateGatewayModel, ListCreateModel } from '@app/gateway/models/list-model'
import { ListCreateGatewayPort } from './port/list-gateway-port'

export class ListCreateGateway implements ListCreateGatewayPort {
  toDto (list: ListCreateModel): ListCreateGatewayModel {
    return {
      listEntity: {
        idLogin: list.idLogin,
        description: list.description
      },
      idListType: list.type
    }
  }
}

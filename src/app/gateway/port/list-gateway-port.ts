import { ListCreateGatewayModel, ListCreateModel } from '@app/gateway/models/list-model'

export interface ListCreateGatewayPort {
  toDto: (List: ListCreateModel) => ListCreateGatewayModel
}

import { ListCreateGatewayModel, ListCreateModel } from '@app/models/list-model'

export interface ListCreateGatewayPort {
  toDto: (List: ListCreateModel) => ListCreateGatewayModel
}

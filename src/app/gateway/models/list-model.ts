import { ListEntity } from '@core/entities'

export interface ListCreateModel {
  idLogin: string
  type: number []
  description: string
}

export interface ListCreateGatewayModel {
  listEntity: ListEntity
  idListType: number[]
}

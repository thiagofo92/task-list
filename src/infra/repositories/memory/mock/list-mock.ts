import { ListTypeAuxModel, ListTypeModel } from '@core/models'
import { ListModel } from '@core/models/list-model'
import { loginMock } from '@infra/repositories/memory/mock/login-mock'

export const listMock: ListModel = {
  id: 1,
  idLogin: loginMock.id,
  description: 'Mock list entity'
}

export const listTypeAux: ListTypeAuxModel[] = [
  {
    idList: listMock.id!,
    idListType: 1
  },
  {
    idList: listMock.id!,
    idListType: 2
  }
]

export const listTypeMock: ListTypeModel[] = [
  {
    id: 1,
    type: 'food'
  },
  {
    id: 2,
    type: 'movie'
  },
  {
    id: 3,
    type: 'serie'
  },
  {
    id: 4,
    type: 'places'
  }
]

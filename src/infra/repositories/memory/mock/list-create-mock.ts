import { ListCreateModel } from '@app/gateway/models/list-model'
import { ListTypeModel } from '@core/models'
import { loginEntityMock } from '@infra/repositories/memory/mock/login-entity-mock'

export const listCreateMock: ListCreateModel = {
  idLogin: loginEntityMock.id,
  type: [1, 3, 4],
  description: 'Mock list entity'
}

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

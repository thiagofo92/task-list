import { ListCreateModel } from '@app/models/list-model'
import { loginEntityMock } from '@core/use-case/login/mock/login-entity-mock'

export const listCreateMock: ListCreateModel = {
  idLogin: loginEntityMock.id,
  type: [1, 3, 4],
  description: 'Mock list entity'
}

export const listTypeEntityMock = [
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

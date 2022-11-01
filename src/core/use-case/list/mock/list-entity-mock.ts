import { ListCreateModel } from '@app/models/list-model'
import { loginEntityMock } from '@core/use-case/login/mock/login-entity-mock'

export const listEntityMock: ListCreateModel = {
  idLogin: loginEntityMock.id,
  type: [1, 3, 4],
  description: 'Mock list entity'
}

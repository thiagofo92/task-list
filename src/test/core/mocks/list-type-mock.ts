import { ListTypeEntity } from '@core/entities'
import { faker } from '@faker-js/faker'

export function listTypeMock (): ListTypeEntity {
  return {
    id: faker.datatype.number(),
    type: faker.locale
  }
}

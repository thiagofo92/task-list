import { ListEntity } from '@core/entities'
import { faker } from '@faker-js/faker'

export function mockList (): ListEntity {
  const list: ListEntity = {
    id: faker.datatype.number(),
    idLogin: faker.datatype.uuid(),
    description: faker.lorem.text()
  }

  return list
}

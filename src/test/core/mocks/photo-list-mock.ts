import { PhotoListEntity } from '@core/entities'
import { faker } from '@faker-js/faker'

export function mockPhotoList (): PhotoListEntity {
  return {
    id: faker.datatype.number(),
    idList: faker.datatype.number(),
    photo: faker.image.food()
  }
}

import { faker } from '@faker-js/faker'
import { LoginEntity } from '@core/entities'

export function mockLogin (): LoginEntity {
  const login = {
    email: faker.internet.email(),
    password: faker.internet.password(16),
    name: faker.name.firstName()
  }
  return new LoginEntity(login)
}

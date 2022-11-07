import { LoginEntity } from '@core/entities'
import { LoginRepository } from '@core/repositories'
import { Either, left, right } from '@shared/errors/Either'
import {
  CreateLoginError,
  ValidLoginError,
  UpdateLoginError,
  DeleteLoginError,
  FindAllLoginError,
  FindByIdLoginError
} from '@core/repositories/error'
import { faker } from '@faker-js/faker'

export class DbLoginMock implements LoginRepository {
  private readonly login: LoginEntity[] = []
  async create (login: LoginEntity): Promise<Either<CreateLoginError, LoginEntity>> {
    try {
      this.login.push(login)
      return right(login)
    } catch (error: any) {
      return left(new CreateLoginError('Login mock'))
    }
  }

  async valid (login: LoginEntity): Promise<Either<ValidLoginError, boolean>> {
    try {
      if (login.email) return right(true)

      return right(false)
    } catch (error) {
      return left(new ValidLoginError('Valid login Mock'))
    }
  }

  async update (login: LoginEntity): Promise<Either<UpdateLoginError, boolean>> {
    try {
      if (login.id) return right(true)

      return right(false)
    } catch (error) {
      return left(new UpdateLoginError('Update login Mock'))
    }
  }

  async del (id: string): Promise<Either<DeleteLoginError, boolean>> {
    try {
      if (id) return right(true)

      return right(false)
    } catch (error) {
      return left(new DeleteLoginError('Delete login Mock'))
    }
  }

  async findAll (): Promise<Either<FindAllLoginError, LoginEntity[]>> {
    try {
      const login = [
        {
          id: faker.datatype.uuid(),
          email: faker.internet.email(),
          password: faker.internet.password(16),
          name: faker.name.firstName()
        }
      ]
      return right(login)
    } catch (error) {
      return left(new FindAllLoginError('Find all login Mock'))
    }
  }

  async findById (id: string): Promise<Either<FindByIdLoginError, LoginEntity | null>> {
    try {
      if (!id) return right(null)

      const login = {
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        password: faker.internet.password(16),
        name: faker.name.firstName()
      }

      return right(login)
    } catch (error) {
      return left(new FindByIdLoginError('Find login by id Mock'))
    }
  }
}

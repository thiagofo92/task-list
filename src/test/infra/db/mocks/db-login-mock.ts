import { LoginEntity, LoginValidEntity } from '@core/entities'
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
import { mockLogin } from '@test/core/mocks'

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

  async valid (login: LoginValidEntity): Promise<Either<ValidLoginError, boolean>> {
    try {
      if (login.email && login.password) return right(true)

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
      const login = [mockLogin()]
      return right(login)
    } catch (error) {
      return left(new FindAllLoginError('Find all login Mock'))
    }
  }

  async findById (id: string): Promise<Either<FindByIdLoginError, LoginEntity | null>> {
    try {
      if (!id) return right(null)

      const login = mockLogin()

      return right(login)
    } catch (error) {
      return left(new FindByIdLoginError('Find login by id Mock'))
    }
  }
}

import {
  CreateLoginError,
  DeleteLoginError,
  FindAllLoginError,
  FindByIdLoginError,
  UpdateLoginError,
  ValidLoginError,
  NotFoundEmailError,
  NotFoundPasswordError,
  NotFoundIdUpdateLoginError
} from '@core/repositories/error/login-error'
import { LoginModel } from '@app/gateway/models/login'
import { LoginEntity } from '@core/entities/LoginEntity'
import { LoginRepository } from '@core/repositories/login'
import { Either, left, right } from '@shared/errors/Either'
export class LoginRepositoryMemory implements LoginRepository {
  constructor (private readonly loginEntityMock: LoginModel[]) {}
  async create (login: LoginEntity): Promise<Either<CreateLoginError, LoginModel>> {
    try {
      this.loginEntityMock.push(login)
      const newLogin = this.loginEntityMock[this.loginEntityMock.length - 1]
      return right(newLogin)
    } catch (error: any) {
      return left(new CreateLoginError(error?.stack))
    }
  }

  async valid (login: LoginEntity): Promise<Either<ValidLoginError, boolean>> {
    try {
      if (!this.loginEntityMock.find(item => login.email === item.email)) return left(new NotFoundEmailError('EmailNotFound'))

      if (!this.loginEntityMock.find(item => login.password === item.password)) {
        return left(new NotFoundPasswordError('PasswordNotFound'))
      }

      return right(true)
    } catch (error: any) {
      return left(new ValidLoginError(error?.stacK))
    }
  }

  async update (login: LoginEntity): Promise<Either<UpdateLoginError, boolean>> {
    try {
      const index = this.loginEntityMock.findIndex(item => item.id === login.id)
      if (index < 0) return left(new NotFoundIdUpdateLoginError('IdNotFound'))

      this.loginEntityMock[index].password = login.password

      return right(true)
    } catch (error: any) {
      return left(new UpdateLoginError(error?.stack))
    }
  }

  async del (id: string): Promise<Either<DeleteLoginError, boolean>> {
    try {
      const index = this.loginEntityMock.findIndex(item => item.id === id)

      if (index < 0) right(false)

      this.loginEntityMock.splice(index, 1)

      return right(true)
    } catch (error: any) {
      return left(new DeleteLoginError(error?.stack))
    }
  }

  async findAll (): Promise<Either<FindAllLoginError, LoginModel[]>> {
    try {
      return right(this.loginEntityMock)
    } catch (error: any) {
      return left(new FindAllLoginError(error?.stack))
    }
  }

  async findById (id: string): Promise<Either<FindByIdLoginError, LoginModel | null>> {
    try {
      const result = this.loginEntityMock.find(item => item.id === id) || null
      return right(result)
    } catch (error: any) {
      return left(new FindByIdLoginError(error?.stack))
    }
  }
}

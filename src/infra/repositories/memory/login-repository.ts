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
import { LoginModel } from '@app/models/login'
import { LoginEntity } from '@core/entities/LoginEntity'
import { LoginRepository } from '@core/repositories/login'
import { Either, left, right } from '@shared/errors/Either'

const LOGIN_MEMORY: LoginEntity[] = []
export class LoginRepositoryMemory implements LoginRepository {
  private readonly loginMemory: LoginEntity [] = LOGIN_MEMORY

  async create (login: LoginEntity): Promise<Either<CreateLoginError, LoginModel>> {
    try {
      this.loginMemory.push(login)
      const newLogin = this.loginMemory[this.loginMemory.length - 1]
      return right(newLogin)
    } catch (error: any) {
      return left(new CreateLoginError(error?.stack))
    }
  }

  async valid (login: LoginEntity): Promise<Either<ValidLoginError | NotFoundEmailError | NotFoundPasswordError, boolean>> {
    try {
      if (!this.loginMemory.find(item => login.email === item.email)) return left(new NotFoundEmailError('EmailNotFound'))

      if (!this.loginMemory.find(item => login.password === item.password)) {
        return left(new NotFoundPasswordError('PasswordNotFound'))
      }

      return right(true)
    } catch (error: any) {
      return left(new ValidLoginError(error?.stacK))
    }
  }

  async update (login: LoginEntity): Promise<Either<UpdateLoginError, boolean>> {
    try {
      const index = this.loginMemory.findIndex(item => item.id === login.id)
      if (index < 0) return right(true)

      this.loginMemory[index].password = login.password

      return right(true)
    } catch (error: any) {
      return left(new UpdateLoginError(error?.stack))
    }
  }

  async del (id: string): Promise<Either<DeleteLoginError, boolean>> {
    try {
      const index = this.loginMemory.findIndex(item => item.id === id)

      if (index < 0) return right(false)

      this.loginMemory.splice(index, 1)

      return right(true)
    } catch (error: any) {
      return left(new DeleteLoginError(error?.stack))
    }
  }

  async findAll (): Promise<Either<FindAllLoginError, LoginModel[]>> {
    try {
      return right(this.loginMemory)
    } catch (error: any) {
      return left(new FindAllLoginError(error?.stack))
    }
  }

  async findById (id: string): Promise<Either<FindByIdLoginError, LoginModel | null>> {
    try {
      const result = this.loginMemory.find(item => item.id === id) || null
      return right(result)
    } catch (error: any) {
      return left(new FindByIdLoginError(error?.stack))
    }
  }
}

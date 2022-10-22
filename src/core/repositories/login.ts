import { LoginModel } from 'app/models/login'
import { LoginEntity } from 'core/entities/LoginEntity'
import { Either } from 'shared/errors/Either'
import { CreateLoginError, UpdateLoginError, ValidLoginError } from './error/login-error'

export interface LoginRepository {
  create: (login: LoginEntity) => Promise<Either<CreateLoginError, LoginModel>>
  valid: (login: LoginEntity) => Promise<Either<ValidLoginError, boolean>>
  update: (login: LoginEntity) => Promise<Either<UpdateLoginError, boolean>>
}

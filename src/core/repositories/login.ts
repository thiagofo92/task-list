import { LoginModel } from '@app/gateway/models/login'
import { LoginEntity } from 'core/entities/LoginEntity'
import { Either } from 'shared/errors/Either'
import {
  CreateLoginError,
  DeleteLoginError,
  UpdateLoginError,
  ValidLoginError,
  FindAllLoginError,
  FindByIdLoginError
} from './error/login-error'

export interface LoginRepository {
  create: (login: LoginEntity) => Promise<Either<CreateLoginError, LoginModel>>
  valid: (login: LoginEntity) => Promise<Either<ValidLoginError, boolean>>
  update: (login: LoginEntity) => Promise<Either<UpdateLoginError, boolean>>
  del: (id: string) => Promise<Either<DeleteLoginError, boolean>>
  findAll: () => Promise<Either<FindAllLoginError, LoginEntity[]>>
  findById: (id: string) => Promise<Either<FindByIdLoginError, LoginEntity | null>>
}

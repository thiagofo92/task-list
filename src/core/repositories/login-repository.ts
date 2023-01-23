import {
  LoginFecthOutModel,
  LoginCreationOutModel,
  LoginUpdateOutModel
} from '@app/model/output'

import {
  LoginUpdateInModel,
  LoginAuthenticationInModel,
  LoginCreationInModel
} from '@app/model/input'
import {
  LoginCreationError,
  LoginFinByLoginAndPasswordError,
  LoginFindAllError,
  LoginFindByEmailError,
  LoginFindByIdError,
  LoginUpdateError
} from '@infra/services/error/login-error'
import { Either } from '@shared/error/etheir'

export interface LoginRepository {
  create: (login: LoginCreationInModel) => Promise<Either<LoginCreationError, LoginCreationOutModel>>
  update: (login: LoginUpdateInModel) => Promise<Either<LoginUpdateError, LoginUpdateOutModel | null>>
  findAll: () => Promise<Either<LoginFindAllError, LoginFecthOutModel[]>>
  findById: (id: string) => Promise<Either<LoginFindByIdError, LoginFecthOutModel | null>>
  findByEmail: (email: string) => Promise<Either<LoginFindByEmailError, LoginFecthOutModel | null>>
  findByLoginAndPassword: (login: LoginAuthenticationInModel) => Promise<Either<LoginFinByLoginAndPasswordError, boolean>>
}

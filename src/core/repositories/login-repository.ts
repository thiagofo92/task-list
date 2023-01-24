import {
  LoginFetchOutModel,
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
} from '@infra/repositories/error/login-error'
import { Either } from '@shared/error/etheir'

export interface LoginContractRepository {
  create: (login: LoginCreationInModel) => Promise<Either<LoginCreationError, LoginCreationOutModel>>
  update: (login: LoginUpdateInModel) => Promise<Either<LoginUpdateError, LoginUpdateOutModel | null>>
  findAll: () => Promise<Either<LoginFindAllError, LoginFetchOutModel[]>>
  findById: (id: string) => Promise<Either<LoginFindByIdError, LoginFetchOutModel | null>>
  findByEmail: (email: string) => Promise<Either<LoginFindByEmailError, LoginFetchOutModel | null>>
  authenticationLogin: (login: LoginAuthenticationInModel) => Promise<Either<LoginFinByLoginAndPasswordError, boolean>>
}

import {
  LoginAuthenticationInModel,
  LoginCreationInModel,
  LoginCreationOutModel,
  LoginFetchOutModel,
  LoginUpdateInModel,
  LoginUpdateOutModel
} from '@app/model'
import {
  LoginCreationError,
  LoginFinByLoginAndPasswordError,
  LoginFindAllError,
  LoginFindByEmailError,
  LoginFindByIdError,
  LoginUpdateError
} from '@app/usecase/error/login-error'
import { Either } from '@shared/error/etheir'

export interface LoginRepository {
  create: (login: LoginCreationInModel) => Promise<Either<LoginCreationError, LoginCreationOutModel>>
  update: (login: LoginUpdateInModel) => Promise<Either<LoginUpdateError, LoginUpdateOutModel | null>>
  findAll: () => Promise<Either<LoginFindAllError, LoginFetchOutModel[]>>
  findById: (id: string) => Promise<Either<LoginFindByIdError, LoginFetchOutModel | null>>
  findByEmail: (email: string) => Promise<Either<LoginFindByEmailError, LoginFetchOutModel | null>>
  findByLoginAndPassword: (login: LoginAuthenticationInModel) => Promise<Either<LoginFinByLoginAndPasswordError, boolean>>
}

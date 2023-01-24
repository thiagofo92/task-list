import { LoginAuthenticationInModel, LoginCreationInModel, LoginUpdateInModel } from '@app/model/input'
import { LoginCreationOutModel } from '@app/model/output'
import {
  LoginUseCaseCreationError,
  LoginUseCaseFindAllError,
  LoginUseCaseFindByEmailError,
  LoginUseCaseFindByIdError,
  LoginUseCaseUpdateError
} from '@app/usecase/errors/login-error'
import { Either } from '@shared/error/etheir'

export interface LoginUseCaseContract {
  create: (login: LoginCreationInModel) => Promise<Either<LoginUseCaseCreationError, LoginCreationOutModel>>
  update: (login: LoginUpdateInModel) => Promise<Either<LoginUseCaseUpdateError, unknown>>
  findAll: () => Promise<Either<LoginUseCaseFindAllError, unknown>>
  findById: (id: string) => Promise<Either<LoginUseCaseFindByIdError, unknown>>
  findByEmail: (email: string) => Promise<Either<LoginUseCaseFindByEmailError, unknown>>
  authenticationLogin: (login: LoginAuthenticationInModel) => Promise<Either<LoginUseCaseFindByEmailError, boolean>>
}

import { LoginCreationInModel, LoginUpdateInModel } from '@app/model/input'
import { LoginCreationOutModel } from '@app/model/output'
import { LoginUseCaseCreationError, LoginUseCaseFindAllError, LoginUseCaseUpdateError } from '@app/usecase/errors/login-error'
import { Either } from '@shared/error/etheir'

export interface LoginUseCaseContract {
  create: (login: LoginCreationInModel) => Promise<Either<LoginUseCaseCreationError, LoginCreationOutModel>>
  update: (login: LoginUpdateInModel) => Promise<Either<LoginUseCaseUpdateError, unknown>>
  findAll: () => Promise<Either<LoginUseCaseFindAllError, unknown>>
}

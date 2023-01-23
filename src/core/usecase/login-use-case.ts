import { LoginCreationInModel } from '@app/model/input'
import { LoginUseCaseCreationError } from '@app/usecase/errors/login-error'
import { Either } from '@shared/error/etheir'

export interface LoginUseCaseContract {
  create: (login: LoginCreationInModel) => Promise<Either<LoginUseCaseCreationError, unknown>>
}

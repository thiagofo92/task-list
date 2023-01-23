import { LoginCreationInModel, LoginUpdateInModel } from '@app/model/input'
import { LoginRepository } from '@core/repositories'
import { LoginUseCaseContract } from '@core/usecase'
import { Either, left, right } from '@shared/error/etheir'
import { LoginUseCaseCreationError, LoginUseCaseUpdateError } from './errors/login-error'
import { LoginUpdateError } from '@infra/services/error/login-error'
import { LoginCreationOutModel } from '@app/model/output'

export class LoginUseCase implements LoginUseCaseContract {
  constructor (private readonly loginService: LoginRepository) {}

  async create (login: LoginCreationInModel): Promise<Either<LoginUseCaseCreationError, LoginCreationOutModel>> {
    const successOrError = await this.loginService.create(login)

    if (successOrError.isLeft()) return left(new LoginUseCaseCreationError(successOrError.value.message))

    return right(successOrError.value)
  }

  async update (login: LoginUpdateInModel): Promise<Either<LoginUpdateError, unknown>> {
    const successOrError = await this.loginService.update(login)

    if (successOrError.isLeft()) return left(new LoginUseCaseUpdateError(successOrError.value.message))

    return right(successOrError.value)
  }
}

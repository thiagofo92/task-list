import { LoginAuthenticationInModel, LoginCreationInModel, LoginUpdateInModel } from '@app/model/input'
import { LoginContractRepository } from '@core/repositories'
import { LoginUseCaseContract } from '@core/usecase'
import { Either, left, right } from '@shared/error/etheir'
import {
  LoginUseCaseCreationError,
  LoginUseCaseFindByEmailError,
  LoginUseCaseFindByIdError,
  LoginUseCaseUpdateError
} from './errors/login-error'
import {
  LoginFindAllError,
  LoginFindByEmailError,
  LoginFindByIdError,
  LoginUpdateError
} from '@infra/repositories/error/login-error'
import { LoginCreationOutModel } from '@app/model/output'

export class LoginUseCase implements LoginUseCaseContract {
  constructor (private readonly loginRepository: LoginContractRepository) {}

  async create (login: LoginCreationInModel): Promise<Either<LoginUseCaseCreationError, LoginCreationOutModel>> {
    const successOrError = await this.loginRepository.create(login)

    if (successOrError.isLeft()) return left(new LoginUseCaseCreationError(successOrError.value.message))

    return right(successOrError.value)
  }

  async update (login: LoginUpdateInModel): Promise<Either<LoginUpdateError, unknown>> {
    const successOrError = await this.loginRepository.update(login)

    if (successOrError.isLeft()) return left(new LoginUseCaseUpdateError(successOrError.value.message))

    return right(successOrError.value)
  }

  async findAll (): Promise<Either<LoginFindAllError, unknown>> {
    const successOrError = await this.loginRepository.findAll()

    if (successOrError.isLeft()) return left(new LoginUseCaseUpdateError(successOrError.value.message))

    return right(successOrError.value)
  }

  async findById (id: string): Promise<Either<LoginFindByIdError, unknown>> {
    const successOrError = await this.loginRepository.findById(id)

    if (successOrError.isLeft()) return left(new LoginUseCaseFindByIdError(successOrError.value.message))

    return right(successOrError.value)
  }

  async findByEmail (email: string): Promise<Either<LoginFindByEmailError, unknown>> {
    const successOrError = await this.loginRepository.findByEmail(email)

    if (successOrError.isLeft()) return left(new LoginUseCaseFindByEmailError(successOrError.value.message))

    return right(successOrError.value)
  }

  async authenticationLogin (login: LoginAuthenticationInModel): Promise<Either<LoginFindByEmailError, boolean>> {
    const successOrError = await this.loginRepository.authenticationLogin(login)

    if (successOrError.isLeft()) return left(new LoginUseCaseFindByEmailError(successOrError.value.message))

    return right(successOrError.value)
  }
}

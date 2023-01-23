import { LoginCreationInModel } from '@app/model'
import { LoginRepository } from '@core/repositories'
import { LoginUseCaseContract } from '@core/usecase'

export class LoginUseCase implements LoginUseCaseContract {
  constructor (private readonly loginService: LoginRepository) {}

  async create (login: LoginCreationInModel): Promise<unknown> {
    const successOrError = await this.loginService.create(login)

    if (successOrError.isLeft()) return null

    return successOrError.value
  }
}

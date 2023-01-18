import { LoginCreationInModel } from '@app/model'
import { LoginRepository } from '@core/repositories'
import { LoginUseCaseContract } from '@core/usecase'

export class LoginUseCase implements LoginUseCaseContract {
  constructor (private readonly loginService: LoginRepository) {}

  async create (login: LoginCreationInModel): Promise<unknown> {
    return ''
  }
}

import { LoginValidModel } from '@app/models'
import { LoginValidUseCaseContract } from '@core/contract/login/valid-use-case'
import { LoginRepository } from 'core/repositories/login'

export class LoginValidUseCase implements LoginValidUseCaseContract {
  constructor (private readonly loginRepository: LoginRepository) {}

  async execute (login: LoginValidModel): Promise<boolean> {
    const result = await this.loginRepository.valid(login)
    if (result.isLeft()) throw result.value

    return result.value
  }
}

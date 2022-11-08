import { LoginModel } from '@app/models'
import { LoginUpdateUseCaseContract } from '@core/contract/login'
import { LoginRepository } from '@core/repositories/login'

export class LoginUpdateUseCase implements LoginUpdateUseCaseContract {
  constructor (private readonly loginRepository: LoginRepository) {}

  async execute (login: LoginModel): Promise<boolean> {
    const result = await this.loginRepository.update(login)

    if (result.isLeft()) throw result.value

    return result.value
  }
}

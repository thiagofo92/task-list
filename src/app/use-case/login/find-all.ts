import { LoginModel } from '@app/models'
import { LoginFindAllUseCaseContract } from '@core/contract/login/find-all-use-case'
import { LoginRepository } from '@core/repositories/login'

export class LoginFindAllUseCase implements LoginFindAllUseCaseContract {
  constructor (private readonly loginRepository: LoginRepository) {}

  async execute (): Promise<LoginModel[]> {
    const result = await this.loginRepository.findAll()
    if (result.isLeft()) throw result.value

    return result.value
  }
}

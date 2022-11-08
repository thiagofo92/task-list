import { LoginModel } from '@app/models'
import { LoginFindByIdUseCaseContract } from '@core/contract/login/find-by-id-use-case'
import { LoginRepository } from '@core/repositories/login'

export class LoginFindByIdUseCase implements LoginFindByIdUseCaseContract {
  constructor (private readonly loginRepository: LoginRepository) {}

  async execute (id: string): Promise<LoginModel | null> {
    const result = await this.loginRepository.findById(id)

    if (result.isLeft()) throw result.value

    return result.value
  }
}

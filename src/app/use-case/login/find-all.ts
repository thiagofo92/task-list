import { LoginEntity } from '@core/entities/LoginEntity'
import { LoginRepository } from '@core/repositories/login'

export class LoginFindAllUseCase {
  constructor (private readonly loginRepository: LoginRepository) {}

  async execute (): Promise<LoginEntity[]> {
    const result = await this.loginRepository.findAll()
    if (result.isLeft()) throw result.value

    return result.value
  }
}

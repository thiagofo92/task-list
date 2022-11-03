import { LoginEntity } from '@core/entities/LoginEntity'
import { LoginRepository } from '@core/repositories/login'

export class LoginUpdateUseCase {
  constructor (private readonly loginRepository: LoginRepository) {}

  async execute (login: LoginEntity): Promise<boolean> {
    const result = await this.loginRepository.update(login)

    if (result.isLeft()) throw result.value

    return result.value
  }
}

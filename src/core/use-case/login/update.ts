import { LoginEntity } from '@core/entities/LoginEntity'
import { LoginRepository } from '@core/repositories/login'

export class UpdateLoginUseCase {
  constructor (private readonly loginRepository: LoginRepository) {}

  async execute (login: LoginEntity): Promise<boolean> {
    const result = await this.loginRepository.update(login)
    return result
  }
}

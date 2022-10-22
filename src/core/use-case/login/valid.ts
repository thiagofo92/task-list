import { LoginRepository } from 'core/repositories/login'
import { LoginEntity } from '../../entities/LoginEntity'

export class ValidLoginUseCase {
  constructor (private readonly loginRepository: LoginRepository) {}

  async execute (login: LoginEntity): Promise<boolean> {
    const result = await this.loginRepository.valid(login)
    return result
  }
}

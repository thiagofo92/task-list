import { LoginEntity } from 'core/entities/LoginEntity'
import { LoginRepository } from '../../repositories/login'

export class CreateLoginUseCase {
  constructor (private readonly loginRepository: LoginRepository) {}
  async execute (login: LoginEntity): Promise<any> {
    const result = await this.loginRepository.create(login)
    return result
  }
}

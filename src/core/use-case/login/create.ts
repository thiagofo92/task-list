import { LoginEntity } from 'core/entities/LoginEntity'
import { LoginRepository } from '../../repositories/login'

export class LoginCreateUseCase {
  constructor (private readonly loginRepository: LoginRepository) {}
  async execute (login: LoginEntity): Promise<LoginEntity | null> {
    const result = await this.loginRepository.create(login)
    if (result.isLeft()) throw result.value
    return result.value
  }
}

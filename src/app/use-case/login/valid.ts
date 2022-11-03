import { LoginRepository } from 'core/repositories/login'
import { LoginEntity } from '../../../core/entities/LoginEntity'

export class LoginValidUseCase {
  constructor (private readonly loginRepository: LoginRepository) {}

  async execute (login: LoginEntity): Promise<boolean> {
    const result = await this.loginRepository.valid(login)
    if (result.isLeft()) throw result.value

    return result.value
  }
}

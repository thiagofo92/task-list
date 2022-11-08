import { LoginCreateModel } from '@app/models'
import { LoginCreateUseCaseContract } from '@core/contract/login'
import { LoginEntity } from 'core/entities/LoginEntity'
import { LoginRepository } from '../../../core/repositories/login'

export class LoginCreateUseCase implements LoginCreateUseCaseContract {
  constructor (private readonly loginRepository: LoginRepository) {}
  async execute (login: LoginCreateModel): Promise<LoginEntity> {
    const result = await this.loginRepository.create(login)
    if (result.isLeft()) throw result.value
    return result.value
  }
}

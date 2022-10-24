import { LoginEntity } from '@core/entities/LoginEntity'
import { LoginRepository } from '@core/repositories/login'

export class FindAllUseCase {
  constructor (private readonly loginRepository: LoginRepository) {}

  async execute (): Promise<LoginEntity[]> {
    const result = await this.loginRepository.findAll()
    if (result.isLeft()) {
      console.log(result.value)

      return []
    }
    return result.value
  }
}

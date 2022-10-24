import { LoginEntity } from '@core/entities/LoginEntity'
import { LoginRepository } from '@core/repositories/login'

export class FindByIdUseCase {
  constructor (private readonly loginRepository: LoginRepository) {}

  async execute (id: string): Promise<LoginEntity | null> {
    const result = await this.loginRepository.findById(id)

    if (result.isLeft()) {
      console.log(result.value)

      return null
    }
    return result.value
  }
}

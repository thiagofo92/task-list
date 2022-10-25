import { LoginRepository } from '@core/repositories/login'

export class DeleteLoginUseCase {
  constructor (private readonly loginRepository: LoginRepository) {}

  async execute (id: string): Promise<boolean> {
    const result = await this.loginRepository.del(id)

    if (result.isLeft()) throw result.value

    return result.value
  }
}

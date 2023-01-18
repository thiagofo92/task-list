import { LoginRepository } from '@core/repositories'
import { LoginUseCaseContract } from '@core/usecase'

export class LoginUseCase implements LoginUseCaseContract {
  constructor (private readonly loginService: LoginRepository) {}
}

import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { ValidLoginUseCase } from '@core/use-case/login'
import { LoginEntity } from '@core/entities/LoginEntity'

export function factoryValidUseCase (login: LoginEntity[]): ValidLoginUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new ValidLoginUseCase(repository)
}

import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginValidUseCase } from '@core/use-case/login'
import { LoginEntity } from '@core/entities/LoginEntity'

export function factoryValidUseCase (login: LoginEntity[]): LoginValidUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new LoginValidUseCase(repository)
}

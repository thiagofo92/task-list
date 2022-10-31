import { LoginFindAllUseCase } from '../find-all'
import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginEntity } from '@core/entities/LoginEntity'

export function factoryFindAllUseCaseFake (login: LoginEntity[]): LoginFindAllUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new LoginFindAllUseCase(repository)
}

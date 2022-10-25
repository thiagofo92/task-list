import { FindAllUseCase } from '../find-all'
import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginEntity } from '@core/entities/LoginEntity'

export function factoryFindAllUseCaseFake (login: LoginEntity[]): FindAllUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new FindAllUseCase(repository)
}

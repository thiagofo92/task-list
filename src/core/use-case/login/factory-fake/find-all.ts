import { LoginFindAllUseCase } from '../find-all'
import { LoginRepositoryMemory } from '@infra/repositories/memory'

export function factoryFindAllUseCaseFake (): LoginFindAllUseCase {
  const repository = new LoginRepositoryMemory()
  return new LoginFindAllUseCase(repository)
}

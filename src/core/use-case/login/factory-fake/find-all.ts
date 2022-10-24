import { FindAllUseCase } from '../find-all'
import { LoginRepositoryMemory } from '@infra/repositories/memory'

export function factoryFindAllUseCaseFake (): FindAllUseCase {
  const repository = new LoginRepositoryMemory()
  return new FindAllUseCase(repository)
}

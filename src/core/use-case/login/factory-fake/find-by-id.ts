import { LoginFindByIdUseCase } from '../find-by-id'
import { LoginRepositoryMemory } from '@infra/repositories/memory'

export function factoryFindByIdUseCaseFake (): LoginFindByIdUseCase {
  const repository = new LoginRepositoryMemory()
  return new LoginFindByIdUseCase(repository)
}

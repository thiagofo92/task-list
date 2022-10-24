import { FindByIdUseCase } from '../find-by-id'
import { LoginRepositoryMemory } from '@infra/repositories/memory'

export function factoryFindByIdUseCaseFake (): FindByIdUseCase {
  const repository = new LoginRepositoryMemory()
  return new FindByIdUseCase(repository)
}

import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginUpdateUseCase } from '../update'

export function factoryUpdateUseCaseFake (): LoginUpdateUseCase {
  const repository = new LoginRepositoryMemory()
  return new LoginUpdateUseCase(repository)
}

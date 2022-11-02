import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginCreateUseCase } from '../create'

export function factoryCreateUseCaseFake (): LoginCreateUseCase {
  const repository = new LoginRepositoryMemory()
  return new LoginCreateUseCase(repository)
}

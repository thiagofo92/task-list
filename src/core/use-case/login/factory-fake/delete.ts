import { LoginDeleteUseCase } from '../delete'
import { LoginRepositoryMemory } from '@infra/repositories/memory'

export function factoryDeleteUseCaseFake (): LoginDeleteUseCase {
  const repository = new LoginRepositoryMemory()
  return new LoginDeleteUseCase(repository)
}

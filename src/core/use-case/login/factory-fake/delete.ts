import { DeleteLoginUseCase } from '../delete'
import { LoginRepositoryMemory } from '@infra/repositories/memory'

export function factoryDeleteUseCaseFake (): DeleteLoginUseCase {
  const repository = new LoginRepositoryMemory()
  return new DeleteLoginUseCase(repository)
}

import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { UpdateLoginUseCase } from '../update'

export function factoryUpdateUseCaseFake (): UpdateLoginUseCase {
  const repository = new LoginRepositoryMemory()
  return new UpdateLoginUseCase(repository)
}

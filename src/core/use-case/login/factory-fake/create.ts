import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { CreateLoginUseCase } from '../create'

export function factoryCreateUseCaseFake (): CreateLoginUseCase {
  const repository = new LoginRepositoryMemory()
  return new CreateLoginUseCase(repository)
}

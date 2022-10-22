import { CreateLoginUseCase } from '../create'
import { LoginRepositoryMemory } from 'infra/repositories/memory'

export function factoryCreateUseCaseFake (): CreateLoginUseCase {
  const repository = new LoginRepositoryMemory()
  return new CreateLoginUseCase(repository)
}

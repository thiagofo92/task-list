import { CreateLoginUseCase } from '../create'
import { LoginRepositoryMemory } from 'infra/repositories/memory'

export function factoryLoginUseCaseFake (): CreateLoginUseCase {
  const repository = new LoginRepositoryMemory()
  return new CreateLoginUseCase(repository)
}

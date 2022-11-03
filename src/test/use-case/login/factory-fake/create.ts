import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginCreateUseCase } from '../../../../core/use-case/login/create'

export function factoryCreateUseCaseFake (): LoginCreateUseCase {
  const repository = new LoginRepositoryMemory()
  return new LoginCreateUseCase(repository)
}

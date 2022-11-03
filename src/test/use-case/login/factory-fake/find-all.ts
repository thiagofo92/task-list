import { LoginFindAllUseCase } from '../../../../core/use-case/login/find-all'
import { LoginRepositoryMemory } from '@infra/repositories/memory'

export function factoryFindAllUseCaseFake (): LoginFindAllUseCase {
  const repository = new LoginRepositoryMemory()
  return new LoginFindAllUseCase(repository)
}

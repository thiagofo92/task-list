import { LoginCreateUseCase } from '../../../../app/use-case/login/create'
import { LoginRepositoryMemory } from 'infra/repositories/memory'

export function factoryLoginUseCaseFake (): LoginCreateUseCase {
  const repository = new LoginRepositoryMemory()
  return new LoginCreateUseCase(repository)
}

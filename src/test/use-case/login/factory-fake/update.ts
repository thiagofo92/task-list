import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginUpdateUseCase } from '../../../../app/use-case/login/update'

export function factoryUpdateUseCaseFake (): LoginUpdateUseCase {
  const repository = new LoginRepositoryMemory()
  return new LoginUpdateUseCase(repository)
}
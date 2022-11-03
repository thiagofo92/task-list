import { LoginDeleteUseCase } from '../../../../app/use-case/login/delete'
import { LoginRepositoryMemory } from '@infra/repositories/memory'

export function factoryDeleteUseCaseFake (): LoginDeleteUseCase {
  const repository = new LoginRepositoryMemory()
  return new LoginDeleteUseCase(repository)
}

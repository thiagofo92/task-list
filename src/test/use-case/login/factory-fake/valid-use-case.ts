import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginValidUseCase } from '@app/use-case/login'

export function factoryValidUseCase (): LoginValidUseCase {
  const repository = new LoginRepositoryMemory()
  return new LoginValidUseCase(repository)
}

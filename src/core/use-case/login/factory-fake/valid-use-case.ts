import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginValidUseCase } from '@core/use-case/login'

export function factoryValidUseCase (): LoginValidUseCase {
  const repository = new LoginRepositoryMemory()
  return new LoginValidUseCase(repository)
}

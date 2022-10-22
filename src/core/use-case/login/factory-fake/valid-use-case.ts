import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { ValidLoginUseCase } from '@core/use-case/login'

export function factoryValidUseCase (): ValidLoginUseCase {
  const repository = new LoginRepositoryMemory()
  return new ValidLoginUseCase(repository)
}

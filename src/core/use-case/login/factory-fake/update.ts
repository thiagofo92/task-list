import { LoginEntity } from '@core/entities/LoginEntity'
import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginUpdateUseCase } from '../update'

export function factoryUpdateUseCaseFake (login: LoginEntity[]): LoginUpdateUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new LoginUpdateUseCase(repository)
}

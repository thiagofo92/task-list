import { LoginEntity } from '@core/entities/LoginEntity'
import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginCreateUseCase } from '../create'

export function factoryCreateUseCaseFake (login: LoginEntity[]): LoginCreateUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new LoginCreateUseCase(repository)
}

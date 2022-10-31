import { LoginCreateUseCase } from '../create'
import { LoginRepositoryMemory } from 'infra/repositories/memory'
import { LoginEntity } from '@core/entities/LoginEntity'

export function factoryLoginUseCaseFake (login: LoginEntity[]): LoginCreateUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new LoginCreateUseCase(repository)
}

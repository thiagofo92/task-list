import { CreateLoginUseCase } from '../create'
import { LoginRepositoryMemory } from 'infra/repositories/memory'
import { LoginEntity } from '@core/entities/LoginEntity'

export function factoryLoginUseCaseFake (login: LoginEntity[]): CreateLoginUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new CreateLoginUseCase(repository)
}

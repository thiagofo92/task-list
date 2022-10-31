import { LoginFindByIdUseCase } from '../find-by-id'
import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginEntity } from '@core/entities/LoginEntity'

export function factoryFindByIdUseCaseFake (login: LoginEntity[]): LoginFindByIdUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new LoginFindByIdUseCase(repository)
}

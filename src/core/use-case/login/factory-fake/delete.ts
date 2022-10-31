import { LoginDeleteUseCase } from '../delete'
import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginEntity } from '@core/entities/LoginEntity'

export function factoryDeleteUseCaseFake (login: LoginEntity[]): LoginDeleteUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new LoginDeleteUseCase(repository)
}

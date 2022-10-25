import { DeleteLoginUseCase } from '../delete'
import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginEntity } from '@core/entities/LoginEntity'

export function factoryDeleteUseCaseFake (login: LoginEntity[]): DeleteLoginUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new DeleteLoginUseCase(repository)
}

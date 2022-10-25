import { LoginEntity } from '@core/entities/LoginEntity'
import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { CreateLoginUseCase } from '../create'

export function factoryCreateUseCaseFake (login: LoginEntity[]): CreateLoginUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new CreateLoginUseCase(repository)
}

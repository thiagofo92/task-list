import { LoginEntity } from '@core/entities/LoginEntity'
import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { UpdateLoginUseCase } from '../update'

export function factoryUpdateUseCaseFake (login: LoginEntity[]): UpdateLoginUseCase {
  const repository = new LoginRepositoryMemory(login)
  return new UpdateLoginUseCase(repository)
}

import { LoginRepositoryMemory } from '@infra/repositories/memory'
import { LoginCreateUseCase } from '@app/use-case/login/create'
import { FactoryUseCase } from '@test/use-case/port/factory-usecase/factory'
import { LoginEntity } from '@core/entities'

export function factoryCreateUseCase (): FactoryUseCase<LoginCreateUseCase, LoginEntity> {
  const repository = new LoginRepositoryMemory()
  const login = new LoginEntity('test@test.com.br', '1234')
  return {
    sut: new LoginCreateUseCase(repository),
    data: login
  }
}

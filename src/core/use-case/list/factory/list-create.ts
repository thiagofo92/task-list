import { ListCreateGateway } from '@app/gateway/list-gateway'
import { ListRepositoryMemory } from '@infra/repositories/memory/list-repository'
import { ListCreateUseCase } from '../list-create'
import { ListCreatePresenter } from '@app/presenter'

export function factoryListCreate (): ListCreateUseCase {
  const repository = new ListRepositoryMemory()
  const presenter = new ListCreatePresenter()
  const gateway = new ListCreateGateway()
  return new ListCreateUseCase(repository, gateway, presenter)
}

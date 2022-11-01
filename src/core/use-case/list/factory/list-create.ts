import { ListCreateGateway } from '@app/gateway/list-gateway'
import { ListRepositoryMemory } from '@infra/repositories/memory/list-repository'
import { ListCreateUseCase } from '../list-create'
import { listCreateMock } from '../mock/list-create-mock'

export function factoryListCreate (): ListCreateUseCase {
  const repository = new ListRepositoryMemory([listCreateMock])
  const gateway = new ListCreateGateway()
  return new ListCreateUseCase(repository, gateway)
}

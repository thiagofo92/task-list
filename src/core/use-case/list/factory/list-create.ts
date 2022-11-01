import { ListRepositoryMemory } from '@infra/repositories/memory/list-repository'
import { ListCreateUseCase } from '../list-create'
import { listCreateMock } from '../mock/list-create-mock'

export function factoryListCreate (): ListCreateUseCase {
  const repository = new ListRepositoryMemory([listCreateMock])
  return new ListCreateUseCase(repository)
}

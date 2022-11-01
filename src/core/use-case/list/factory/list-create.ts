import { ListRepositoryMemory } from '@infra/repositories/memory/list-repository'
import { ListCreateUseCase } from '../list-create'
import { listEntityMock } from '../mock/list-entity-mock'

export function factoryListCreate (): ListCreateUseCase {
  const repository = new ListRepositoryMemory([listEntityMock])
  return new ListCreateUseCase(repository)
}

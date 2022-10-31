import { ListCreateUseCase } from '../create'

export function factoryListCreate (): ListCreateUseCase {
  const repository = new ListRepositoryMemory()
  return new ListCreateUseCase(repository)
}

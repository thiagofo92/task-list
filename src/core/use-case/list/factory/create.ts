import { ListCreateUseCase } from '../create'

export function ListCreateFactory (): ListCreateUseCase {
  return new ListCreateUseCase()
}

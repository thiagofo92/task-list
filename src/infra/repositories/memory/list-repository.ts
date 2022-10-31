import { ListModel } from '@app/models/list'
import { ListCreateError } from '@core/repositories/error/list-error'
import { ListRepository } from '@core/repositories/list'
import { Either, left, right } from '@shared/errors/Either'

export class ListRepositoryMemory implements ListRepository {
  constructor () {}

  async create (): Promise<Either<ListCreateError, ListModel>> {
    try {
      const result: ListModel = { id: 0, type: '' }
      return right(result)
    } catch (error: any) {
      return left(new ListCreateError(error.message))
    }
  }

  update: () => Promise<any>
}

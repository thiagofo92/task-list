import { ListEntity } from '@core/entities'
import { ListCreateError } from '@core/repositories/error/list-error'
import { ListRepository } from '@core/repositories/list-repository'
import { Either, left, right } from '@shared/errors/Either'

export class ListRepositoryMemory implements ListRepository {
  constructor (private readonly listEntity: ListEntity[]) {}

  async create (listEntity: ListEntity): Promise<Either<ListCreateError, ListEntity>> {
    try {
      listEntity.id = this.listEntity.length + 1
      this.listEntity.push(listEntity)
      const list = this.listEntity[this.listEntity.length - 1]
      return right(list)
    } catch (error: any) {
      return left(new ListCreateError(error.message))
    }
  }

  async update (): Promise<any> {

  }
}

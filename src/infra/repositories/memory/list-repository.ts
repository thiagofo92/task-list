import { ListCreateModel } from '@app/models/list-model'
import { ListEntity } from '@core/entities'
import { ListCreateError } from '@core/repositories/error/list-error'
import { ListRepository } from '@core/repositories/list'
import { Either, left, right } from '@shared/errors/Either'

export class ListRepositoryMemory implements ListRepository {
  constructor (private readonly listEntity: ListEntity[]) {}

  async create (listEntity: ListEntity): Promise<Either<ListCreateError, ListCreateModel>> {
    try {
      this.listEntity.push(listEntity)
      const list = this.listEntity[this.listEntity.length - 1]
      return right(list as any)
    } catch (error: any) {
      return left(new ListCreateError(error.message))
    }
  }

  async update (): Promise<any> {

  }
}

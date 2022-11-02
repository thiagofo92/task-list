import { ListEntity, ListTypeEntity } from '@core/entities'
import { ListCreateError, ListFindByIdError } from '@core/repositories/error/list-error'
import { ListRepository } from '@core/repositories/list-repository'
import { Either, left, right } from '@shared/errors/Either'
import { listMock, listTypeAux, listTypeMock } from './mock/list-mock'

const ListType = listTypeMock
const List = [listMock]
const ListTypeAux = listTypeAux
export class ListRepositoryMemory implements ListRepository {
  async create (listEntity: ListEntity, idListType: number[]): Promise<Either<ListCreateError, ListEntity>> {
    try {
      listEntity.id = List.length + 1
      List.push(listEntity)

      idListType.forEach(item => ListTypeAux.push({ idList: listEntity.id!, idListType: item }))
      const list = List[List.length - 1]
      return right(list)
    } catch (error: any) {
      return left(new ListCreateError(error.message))
    }
  }

  async update (): Promise<any> {

  }

  async findById (id: number): Promise<Either<ListFindByIdError, any>> {
    try {
      const list = List.find(item => item.id === id)

      return right(list)
    } catch (error: any) {
      return left(new ListFindByIdError(error.message))
    }
  }

  async findAllTypeById (id: number): Promise<Either<ListFindByIdError, ListTypeEntity[]>> {
    try {
      const idTypes = ListTypeAux.filter(item => item.idList === id)
      const types = ListType.filter(item => idTypes.some(type => type.idListType === item.id))
      return right(types)
    } catch (error: any) {
      return left(new ListFindByIdError(error.message))
    }
  }
}

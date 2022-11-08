import { ListCreateModel } from '@app/models/list-model'
import { ListCreateaUseCaseContract } from '@core/contract/list/create-use-case'
import { ListEntity } from '@core/entities'
import { ListRepository } from '@core/repositories/list-repository'

export class ListCreateUseCase implements ListCreateaUseCaseContract {
  constructor (
    private readonly listRepository: ListRepository
  ) {}

  async execute (listModel: ListCreateModel): Promise<ListEntity> {
    const list: ListEntity = {
      ...listModel,
      idTypes: listModel.type
    }

    const listCreated = await this.listRepository.create(list)
    if (listCreated.isLeft()) throw listCreated.value

    return listCreated.value
  }
}

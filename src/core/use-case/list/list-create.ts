import { ListCreateGateway } from '@app/gateway/list-gateway'
import { ListCreateModel } from '@app/gateway/models/list-model'
import { ListRepository } from '@core/repositories/list-repository'

export class ListCreateUseCase {
  constructor (
    private readonly listRepository: ListRepository,
    private readonly listCreateGateway: ListCreateGateway
  ) {}

  async execute (listModel: ListCreateModel): Promise<ListCreateModel> {
    const list = this.listCreateGateway.toDto(listModel)
    const listCreated = await this.listRepository.create(list.listEntity, list.idListType)
    if (listCreated.isLeft()) throw listCreated.value

    return listCreated.value
  }
}

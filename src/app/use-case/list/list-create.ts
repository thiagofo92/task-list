import { ListCreateGateway } from '@app/gateway/list-gateway'
import { ListCreateModel } from '@app/gateway/models/list-model'
import { ListCreatePresenter } from '@app/presenter'
import { ListCreateModelPresenter } from '@app/presenter/models/list-create-model'
import { ListRepository } from '@core/repositories/list-repository'

export class ListCreateUseCase {
  constructor (
    private readonly listRepository: ListRepository,
    private readonly listCreateGateway: ListCreateGateway,
    private readonly listCreatePresenter: ListCreatePresenter
  ) {}

  async execute (listModel: ListCreateModel): Promise<ListCreateModelPresenter> {
    const list = this.listCreateGateway.toDto(listModel)
    const listCreated = await this.listRepository.create(list.listEntity, list.idListType)
    if (listCreated.isLeft()) throw listCreated.value

    const types = await this.listRepository.findAllTypeById(listCreated.value.id!)

    if (types.isLeft()) throw types.value

    const listPresenter = this.listCreatePresenter.execute(listCreated.value, types.value)

    return listPresenter
  }
}

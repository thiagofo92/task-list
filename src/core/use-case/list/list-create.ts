import { ListModel } from '@app/models/list'
import { ListRepository } from '@core/repositories/list'

export class ListCreateUseCase {
  constructor (
    private readonly listRepository: ListRepository
  ) {}

  async execute (listModel: ListModel): Promise<ListModel> {
    const list = {} as any
    const result = await this.listRepository.create(list)
    if (result.isLeft()) throw result.value

    return result.value
  }
}

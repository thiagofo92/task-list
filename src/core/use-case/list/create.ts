import { ListModel } from '@app/models/list'
import { ListRepository } from '@core/repositories/list'

export class ListCreateUseCase {
  constructor (private readonly listRepository: ListRepository) {}

  async execute (): Promise<ListModel> {
    const result = await this.listRepository.create()
    if (result.isLeft()) throw result.value

    return result.value
  }
}

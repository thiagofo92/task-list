import { ListModel } from '@app/models/list'
import { ListRepository } from '@core/repositories/list'

export class ListRepositoryMemory implements ListRepository {
  constructor () {}

  async create (): Promise<ListModel> {
    const result: ListModel = { id: 0, type: '' }
    return result
  }

  update: () => Promise<any>
}

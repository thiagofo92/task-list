import { ListModel } from '@app/models/list'

export class ListCreateUseCase {
  constructor () {}

  async execute (): Promise<ListModel> {
    const t: ListModel = { } as any

    return t
  }
}

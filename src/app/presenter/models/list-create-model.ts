import { ListTypeModel } from '@app/models'

export interface ListCreateModelPresenter {
  id: number
  description: string
  type: ListTypeModel[]
}

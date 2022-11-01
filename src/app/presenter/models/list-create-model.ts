import { ListTypeModel } from '@core/models'

export interface ListCreateModelPresenter {
  id: number
  description: string
  type: ListTypeModel[]
}

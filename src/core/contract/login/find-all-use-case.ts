import { LoginModel } from '@app/models'

export interface LoginFindAllUseCaseContract {
  execute: () => Promise<LoginModel[]>
}

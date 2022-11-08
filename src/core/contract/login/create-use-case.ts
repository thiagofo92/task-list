import { LoginModel, LoginCreateModel } from '@app/models'

export interface LoginCreateUseCaseContract {
  execute: (login: LoginCreateModel) => Promise<LoginModel>
}

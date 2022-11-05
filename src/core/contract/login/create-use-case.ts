import { LoginModel, LoginCreateModel } from '@app/models'

export interface LoginCreateUseCase {
  execute: (login: LoginCreateModel) => Promise<LoginModel>
}

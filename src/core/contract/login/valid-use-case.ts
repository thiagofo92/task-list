import { LoginValidModel } from '@app/models'

export interface LoginValidUseCaseContract {
  execute: (login: LoginValidModel) => Promise<boolean>
}

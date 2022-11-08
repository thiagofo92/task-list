import { LoginModel } from '@app/models'

export interface LoginUpdateUseCaseContract {
  execute: (login: LoginModel) => Promise<boolean>
}

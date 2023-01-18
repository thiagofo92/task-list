import { LoginCreationInModel } from '@app/model'

export interface LoginUseCaseContract {
  create: (login: LoginCreationInModel) => Promise<unknown>
}

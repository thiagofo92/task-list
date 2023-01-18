import { LoginAuthenticationInModel, LoginCreationInModel, LoginCreationOutModel, LoginFetchOutModel } from '@app/model'

export interface LoginRepository {
  create: (login: LoginCreationInModel) => Promise<LoginCreationOutModel>
  findAll: () => Promise<LoginFetchOutModel[]>
  findById: (id: string) => Promise<LoginFetchOutModel | null>
  findByEmail: (email: string) => Promise<LoginFetchOutModel>
  findByLoginAndPassword: (login: LoginAuthenticationInModel) => Promise<boolean>
}

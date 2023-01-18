import {
  LoginAuthenticationInModel,
  LoginCreationInModel,
  LoginCreationOutModel,
  LoginFetchOutModel,
  LoginUpdateInModel,
  LoginUpdateOutModel
} from '@app/model'

export interface LoginRepository {
  create: (login: LoginCreationInModel) => Promise<LoginCreationOutModel>
  update: (login: LoginUpdateInModel) => Promise<LoginUpdateOutModel | null>
  findAll: () => Promise<LoginFetchOutModel[]>
  findById: (id: string) => Promise<LoginFetchOutModel | null>
  findByEmail: (email: string) => Promise<LoginFetchOutModel | null>
  findByLoginAndPassword: (login: LoginAuthenticationInModel) => Promise<boolean>
}

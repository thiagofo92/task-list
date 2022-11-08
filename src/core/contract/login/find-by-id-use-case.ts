import { LoginModel } from '@app/models'

export interface LoginFindByIdUseCaseContract {
  execute: (id: string) => Promise<LoginModel | null>
}
